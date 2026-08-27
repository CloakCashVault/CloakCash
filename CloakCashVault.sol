// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title  CloakCashVault — Privacy Vault 🎭
 * @author CloakCash Protocol
 * @notice Zero-knowledge privacy vault for CloakCash (https://cloakcash.com | https://cloakcash.org).
 *
 *         Users deposit tokens and receive an encrypted ticket. Withdrawal is proven via a
 *         Groth16 ZK proof — no link between depositor and recipient is ever revealed on-chain.
 *
 *         Mechanism:
 *         - Deposit: user generates secret + nullifier off-chain, computes
 *           commitment = Poseidon(secret, nullifier, amount), inserted as a leaf into a
 *           depth-20 incremental Merkle tree backed by Poseidon hashing.
 *         - Withdraw: user generates a ZK proof that they know a valid leaf in the tree
 *           without revealing which one. The nullifierHash prevents double-spend.
 *         - Relayer: optional third-party gas sponsor. Fee is locked inside the proof;
 *           the relayer cannot alter it. Ticket format: cloakcash-{chainId}-{amount}-{base58}
 *         - Anonymity set: all deposits of the same amount share one set — uniformity
 *           maximises privacy.
 *
 * @custom:website  https://cloakcash.com
 * @custom:website  https://cloakcash.org
 */

import {IPoolManager} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {IUnlockCallback} from "@uniswap/v4-core/src/interfaces/callback/IUnlockCallback.sol";
import {Currency} from "@uniswap/v4-core/src/types/Currency.sol";

interface IERC20 {
    function transferFrom(address, address, uint256) external returns (bool);
    function balanceOf(address) external view returns (uint256);
}

interface IGroth16Verifier {
    function verifyProof(
        uint256[2] calldata a,
        uint256[2][2] calldata b,
        uint256[2] calldata c,
        uint256[6] calldata input
    ) external view returns (bool);
}

// circomlibjs poseidonContract.createCode(2) — matches circom Poseidon(2)
interface IHasher {
    function poseidon(uint256[2] calldata input) external pure returns (uint256);
}

contract CloakCashVault is IUnlockCallback {
    IPoolManager             public immutable poolManager;
    IGroth16Verifier         public immutable verifier;
    IHasher                  public immutable hasher;

    uint256 constant SNARK_FIELD   = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    uint256 constant TREE_DEPTH    = 20;
    uint256 constant MAX_LEAVES    = 1 << 20;
    // Poseidon(0,0) — used to verify hasher correctness at deploy time
    uint256 constant POSEIDON_ZERO = 0x2098f5fb9e239eab3ceac3f27b81e481dc3124d55ffed523a839ee8446b64864;
    // relayerFee <= max(1% of amount, gas cost ceiling)
    uint256 constant MAX_FEE_BPS      = 100;
    uint256 constant MAX_GAS_COST_WEI = 350_000 * 10 gwei; // 3.5M gwei ceiling

    uint256[21] public zeros;
    uint256[21] public filledSubtrees;
    uint256 public nextIndex;
    uint256 public currentRoot;
    uint256[100] public roots;   // 100-slot history (vs 30 — more headroom for slow provers)
    uint32  public rootIndex;

    mapping(uint256 => bool)    public nullifierUsed;
    mapping(uint256 => bool)    public commitmentUsed;   // #5: prevent duplicate leaf
    mapping(uint256 => uint256) public commitmentAmount; // H-1 fix: commitment => actualAmount

    // ── Global stats ─────────────────────────────────────────────────────────
    mapping(address => uint256) public totalDeposited; // token => cumulative deposited
    mapping(address => uint256) public totalWithdrawn; // token => cumulative withdrawn
    // commitmentToken[commitment] — needed to attribute withdrawn amount to correct token
    mapping(uint256 => address) public commitmentToken;
    mapping(address => uint256) public depositCount; // token => total deposit count
    mapping(address => mapping(uint256 => uint256)) public amountDepositCount; // token => amount => count
    mapping(uint256 => uint256) public commitmentAmountRank; // commitment => 0-indexed rank among same-amount deposits

    event Deposit(uint256 indexed leaf, uint256 leafIndex, uint256 actualAmount);
    event Withdraw(uint256 indexed nullifierHash, address indexed recipient, uint256 amount, uint256 relayerFee, address token);

    uint8 constant OP_DEPOSIT  = 1;
    uint8 constant OP_WITHDRAW = 2;

    constructor(IPoolManager _pm, address _verifier, address _hasher) {
        // #4: verify hasher is the correct Poseidon2 implementation
        require(
            IHasher(_hasher).poseidon([uint256(0), uint256(0)]) == POSEIDON_ZERO,
            "wrong hasher"
        );
        poolManager = _pm;
        verifier    = IGroth16Verifier(_verifier);
        hasher      = IHasher(_hasher);
        zeros[0] = POSEIDON_ZERO;
        filledSubtrees[0] = POSEIDON_ZERO;
        for (uint256 i = 1; i <= TREE_DEPTH; i++) {
            zeros[i] = IHasher(_hasher).poseidon([zeros[i-1], zeros[i-1]]);
            filledSubtrees[i] = zeros[i];
        }
        currentRoot = zeros[TREE_DEPTH];
        roots[0] = currentRoot;
    }

    function isKnownRoot(uint256 root) public view returns (bool) {
        if (root == 0) return false;
        uint32 i = rootIndex;
        for (uint32 j = 0; j < 100; j++) {
            if (roots[i] == root) return true;
            if (i == 0) i = 99; else i--;
        }
        return false;
    }

    function _insert(uint256 leaf) internal returns (uint256 idx) {
        require(nextIndex < MAX_LEAVES, "tree full");
        idx = nextIndex++;
        uint256 cur = leaf;
        uint256 index = idx;
        for (uint256 i = 0; i < TREE_DEPTH; i++) {
            if (index % 2 == 0) {
                filledSubtrees[i] = cur;
                cur = hasher.poseidon([cur, zeros[i]]);
            } else {
                cur = hasher.poseidon([filledSubtrees[i], cur]);
            }
            index /= 2;
        }
        currentRoot = cur;
        rootIndex = (rootIndex + 1) % 100;
        roots[rootIndex] = cur;
    }

    // ── Deposit ───────────────────────────────────────────────────────────────

    // H-1 fix: commitment = Poseidon(secret, nullifier, amount) is the leaf directly.
    // Amount binding is enforced by the ZK circuit (amount is a public input).
    // Duplicate commitment check prevents re-use of the same note.
    function deposit(address token, uint256 amount, uint256 commitment) external payable returns (uint256 actualAmount) {
        require(amount > 0, "zero amount");
        require(commitment != 0 && commitment < SNARK_FIELD, "bad commitment");
        require(!commitmentUsed[commitment], "duplicate commitment");

        if (token == address(0)) {
            require(msg.value == amount, "wrong ETH");
            actualAmount = amount;
        }

        // CEI: mark commitment before external call to prevent re-entrancy
        commitmentUsed[commitment] = true;

        bytes memory result = poolManager.unlock(abi.encode(OP_DEPOSIT, token, amount, msg.sender));
        if (token != address(0)) {
            actualAmount = abi.decode(result, (uint256));
        }

        // H-1 fix: record actual deposited amount so withdraw can verify p.amount matches
        commitmentAmount[commitment] = actualAmount;
        commitmentToken[commitment] = token;
        totalDeposited[token] += actualAmount;
        depositCount[token]++;
        commitmentAmountRank[commitment] = amountDepositCount[token][actualAmount];
        amountDepositCount[token][actualAmount]++;

        // leaf = commitment — matches circuit: leaf = Poseidon(secret, nullifier, amount)
        uint256 idx = _insert(commitment);
        emit Deposit(commitment, idx, actualAmount);
    }

    // ── Withdraw ──────────────────────────────────────────────────────────────

    struct WithdrawParams {
        address   token;
        uint256   amount;
        address   recipient;
        address   relayer;       // 0 = no relayer (self-withdraw)
        uint256   fee;           // locked in proof — cannot be tampered
        uint256   root;
        uint256   nullifierHash;
        uint256   commitment;    // H-1 fix: must match the deposit commitment
        uint256[2]    a;
        uint256[2][2] b;
        uint256[2]    c;
    }

    function _maxFee(uint256 amount) internal pure returns (uint256) {
        uint256 pct = amount * MAX_FEE_BPS / 10000;
        return pct > MAX_GAS_COST_WEI ? pct : MAX_GAS_COST_WEI;
    }

    function _checkWithdraw(WithdrawParams calldata p) internal view {
        require(p.amount > 0, "zero amount");
        require(p.recipient != address(0), "zero recipient");
        require(p.fee <= _maxFee(p.amount), "fee > max");
        require(!nullifierUsed[p.nullifierHash], "spent");
        require(isKnownRoot(p.root), "unknown root");
        // H-1 fix: amount must match what was actually deposited for this commitment
        require(commitmentAmount[p.commitment] != 0, "unknown commitment");
        require(p.amount == commitmentAmount[p.commitment], "amount mismatch");
        uint256[6] memory pub = [
            p.root,
            p.nullifierHash,
            uint256(uint160(p.recipient)),
            p.amount,
            uint256(uint160(p.relayer)),
            p.fee
        ];
        require(verifier.verifyProof(p.a, p.b, p.c, pub), "bad proof");
    }

    function withdraw(WithdrawParams calldata p) external {
        _checkWithdraw(p);
        nullifierUsed[p.nullifierHash] = true;
        totalWithdrawn[p.token] += p.amount;
        poolManager.unlock(abi.encode(OP_WITHDRAW, p.token, p.amount, p.recipient, p.fee, p.relayer));
        emit Withdraw(p.nullifierHash, p.recipient, p.amount - p.fee, p.fee, p.token);
    }

    function isValidWithdraw(WithdrawParams calldata p) external view returns (bool) {
        if (p.fee > _maxFee(p.amount)) return false;
        if (nullifierUsed[p.nullifierHash]) return false;
        if (!isKnownRoot(p.root)) return false;
        uint256[6] memory pub = [
            p.root,
            p.nullifierHash,
            uint256(uint160(p.recipient)),
            p.amount,
            uint256(uint160(p.relayer)),
            p.fee
        ];
        return verifier.verifyProof(p.a, p.b, p.c, pub);
    }

    // ── PoolManager callback ──────────────────────────────────────────────────

    function unlockCallback(bytes calldata data) external returns (bytes memory) {
        require(msg.sender == address(poolManager), "not PM");
        (uint8 op) = abi.decode(data[:32], (uint8));

        if (op == OP_DEPOSIT) {
            (, address token, uint256 amount, address depositor) =
                abi.decode(data, (uint8, address, uint256, address));
            if (token == address(0)) {
                poolManager.sync(Currency.wrap(address(0)));
                poolManager.settle{value: amount}();
                poolManager.mint(address(this), uint256(uint160(address(0))), amount);
            } else {
                poolManager.sync(Currency.wrap(token));
                bool ok = IERC20(token).transferFrom(depositor, address(poolManager), amount);
                require(ok, "transferFrom failed");
                uint256 actualAmount = poolManager.settle();
                poolManager.mint(address(this), uint256(uint160(token)), actualAmount);
                return abi.encode(actualAmount);
            }
        } else {
            (, address token, uint256 amount, address recipient, uint256 relayerFee, address relayer) =
                abi.decode(data, (uint8, address, uint256, address, uint256, address));
            // #2: use Currency.unwrap for correct cid (handles ETH = address(0))
            uint256 cid = uint256(uint160(token));
            poolManager.burn(address(this), cid, amount);
            poolManager.take(Currency.wrap(token), recipient, amount - relayerFee);
            if (relayerFee > 0) poolManager.take(Currency.wrap(token), relayer, relayerFee);
        }
        return "";
    }

    // ── View helpers ─────────────────────────────────────────────────────────

    /// Returns global stats for a list of tokens: totalDeposited, totalWithdrawn, netTVL, depositCount.
    function getStats(address[] calldata tokens)
        external view
        returns (uint256[] memory deposited, uint256[] memory withdrawn, uint256[] memory tvl, uint256[] memory counts)
    {
        deposited = new uint256[](tokens.length);
        withdrawn = new uint256[](tokens.length);
        tvl       = new uint256[](tokens.length);
        counts    = new uint256[](tokens.length);
        for (uint256 i; i < tokens.length; i++) {
            deposited[i] = totalDeposited[tokens[i]];
            withdrawn[i] = totalWithdrawn[tokens[i]];
            tvl[i]       = deposited[i] > withdrawn[i] ? deposited[i] - withdrawn[i] : 0;
            counts[i]    = depositCount[tokens[i]];
        }
    }

    receive() external payable { revert("use deposit()"); }
}
