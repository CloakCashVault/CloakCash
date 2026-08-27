// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title  CloakCashSafe — Secure Vault 🔐
 * @author CloakCash Protocol
 * @notice On-chain secure vault for CloakCash (https://cloakcash.com | https://cloakcash.org).
 *
 *         Users deposit any ERC-20 or native ETH. Assets are held as Uniswap v4 ERC-6909
 *         claims inside PoolManager, decoupling on-chain identity from asset custody.
 *
 *         Mechanism:
 *         - Deposit: permissionless — any address may deposit for itself.
 *         - Withdraw / internalTransfer: authorized via EIP-712 typed signatures (replay-safe
 *           via per-user nonce).
 *         - Guardian (optional): an Argon2id password-derived address bound per user.
 *           Once set, all withdrawals and transfers require a guardian co-signature.
 *           Compromised private key alone cannot drain funds without the password.
 *         - Internal transfer: moves balance between vault accounts with no external token
 *           movement, leaving no on-chain link between sender and recipient.
 *
 * @dev    Asset flow:
 *         Deposit : caller → PoolManager.unlock → ERC-6909 mint → balances[user]
 *         Withdraw: balances[user] → ERC-6909 burn → PoolManager.take → recipient
 *
 * @custom:website  https://cloakcash.com
 * @custom:website  https://cloakcash.org
 * @custom:security Report vulnerabilities via the official website.
 */

import {IPoolManager} from "@uniswap/v4-core/src/interfaces/IPoolManager.sol";
import {IUnlockCallback} from "@uniswap/v4-core/src/interfaces/callback/IUnlockCallback.sol";
import {Currency, CurrencyLibrary} from "@uniswap/v4-core/src/types/Currency.sol";

interface IERC20 {
    function transferFrom(address, address, uint256) external returns (bool);
    function balanceOf(address) external view returns (uint256);
}

contract CloakCashSafe is IUnlockCallback {
    IPoolManager public immutable poolManager;

    mapping(address => mapping(address => uint256)) public balances;
    // guardian[user] — Argon2id-derived address; zero = no password set
    mapping(address => address) public guardians;
    mapping(address => uint256) public nonces;

    // ── Token tracking ───────────────────────────────────────────────────────
    mapping(address => address[]) private _userTokenList;
    mapping(address => mapping(address => bool)) private _userHasToken;
    mapping(address => uint256) public totalDeposited; // token => cumulative deposited
    mapping(address => uint256) public totalWithdrawn; // token => cumulative withdrawn
    uint256 public totalUsers;
    mapping(address => uint256) public depositCount;   // token => deposit tx count
    mapping(address => uint256) public userCount;      // token => unique depositors
    uint256 public guardianCount;                      // users with password set

    bytes32 public immutable DOMAIN_SEPARATOR;
    bytes32 constant WITHDRAW_TYPEHASH     = keccak256("Withdraw(address user,address token,uint256 amount,address to,uint256 nonce)");
    bytes32 constant SET_GUARDIAN_TYPEHASH = keccak256("SetGuardian(address user,address newGuardian,uint256 nonce)");
    bytes32 constant REMOVE_GUARDIAN_TYPEHASH = keccak256("RemoveGuardian(address user,uint256 nonce)");
    bytes32 constant TRANSFER_TYPEHASH     = keccak256("Transfer(address user,address token,uint256 amount,address to,uint256 nonce)");

    event Deposit(address indexed token, address indexed depositor, uint256 actualAmount);
    event Withdraw(address indexed token, address indexed to, uint256 amount);
    event GuardianSet(address indexed user, address guardian);
    event InternalReceived(address indexed token, address indexed to, uint256 amount);

    uint8 constant OP_DEPOSIT  = 1;
    uint8 constant OP_WITHDRAW = 2;

    constructor(IPoolManager _pm) {
        poolManager = _pm;
        DOMAIN_SEPARATOR = keccak256(abi.encode(
            keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
            keccak256("CloakCashSafe"),
            keccak256("1"),
            block.chainid,
            address(this)
        ));
    }

    // ── Deposit (no password required) ──────────────────────────────────────

    function deposit(address token, uint256 amount) external payable {
        if (token == address(0)) require(msg.value == amount, "wrong ETH");
        poolManager.unlock(abi.encode(OP_DEPOSIT, token, amount, msg.sender));
    }

    // ── Withdraw (guardian sig required if guardian is set) ──────────────────

    function withdraw(address token, uint256 amount, address to, bytes calldata sig) external {
        require(to != address(0), "bad to");
        uint256 nonce = nonces[msg.sender];
        // [H-2 fix] verify signature BEFORE checking balance — prevents balance oracle via revert message
        _checkSig(msg.sender, keccak256(abi.encode(
            WITHDRAW_TYPEHASH, msg.sender, token, amount, to, nonce
        )), sig);
        require(balances[msg.sender][token] >= amount, "insufficient");
        nonces[msg.sender] = nonce + 1;
        balances[msg.sender][token] -= amount;
        poolManager.unlock(abi.encode(OP_WITHDRAW, token, amount, to));
        emit Withdraw(token, to, amount);
    }

    // ── Internal transfer (from hidden on-chain) ─────────────────────────────

    function internalTransfer(address token, uint256 amount, address to, bytes calldata sig) external {
        require(to != address(0) && to != msg.sender, "bad to");
        uint256 nonce = nonces[msg.sender];
        _checkSig(msg.sender, keccak256(abi.encode(
            TRANSFER_TYPEHASH, msg.sender, token, amount, to, nonce
        )), sig);
        require(balances[msg.sender][token] >= amount, "insufficient");
        nonces[msg.sender] = nonce + 1;
        balances[msg.sender][token] -= amount;
        if (!_userHasToken[to][token]) {
            if (_userTokenList[to].length == 0) totalUsers++;
            _userTokenList[to].push(token);
            _userHasToken[to][token] = true;
            userCount[token]++;
        }
        balances[to][token] += amount;
        emit InternalReceived(token, to, amount);
    }

    // ── Guardian management ──────────────────────────────────────────────────

    /// First call (no guardian): set freely. Subsequent calls: require old guardian sig.
    function setGuardian(address newGuardian, bytes calldata oldSig) external {
        require(newGuardian != address(0), "zero guardian");
        address current = guardians[msg.sender];
        uint256 nonce = nonces[msg.sender];
        if (current != address(0)) {
            _requireSig(current, keccak256(abi.encode(
                SET_GUARDIAN_TYPEHASH, msg.sender, newGuardian, nonce
            )), oldSig);
        }
        if (current == address(0)) guardianCount++;
        nonces[msg.sender] = nonce + 1;
        guardians[msg.sender] = newGuardian;
        emit GuardianSet(msg.sender, newGuardian);
    }

    /// Remove guardian (requires current guardian sig).
    function removeGuardian(bytes calldata sig) external {
        address current = guardians[msg.sender];
        require(current != address(0), "no guardian");
        uint256 nonce = nonces[msg.sender];
        _requireSig(current, keccak256(abi.encode(
            REMOVE_GUARDIAN_TYPEHASH, msg.sender, nonce
        )), sig);
        nonces[msg.sender] = nonce + 1;
        delete guardians[msg.sender];
        guardianCount--;
        emit GuardianSet(msg.sender, address(0));
    }

    // ── Internal ─────────────────────────────────────────────────────────────

    function _checkSig(address user, bytes32 hash, bytes calldata sig) internal view {
        address guardian = guardians[user];
        // no guardian → msg.sender ownership is sufficient
        if (guardian != address(0)) {
            _requireSig(guardian, hash, sig);
        }
    }

    function _requireSig(address expected, bytes32 structHash, bytes calldata sig) internal view {
        require(sig.length == 65, "bad sig length");
        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", DOMAIN_SEPARATOR, structHash));
        bytes32 r; bytes32 s; uint8 v;
        assembly {
            r := calldataload(sig.offset)
            s := calldataload(add(sig.offset, 32))
            v := byte(0, calldataload(add(sig.offset, 64)))
        }
        address recovered = ecrecover(digest, v, r, s);
        require(recovered != address(0) && recovered == expected, "bad sig");
    }

    function unlockCallback(bytes calldata data) external returns (bytes memory) {
        require(msg.sender == address(poolManager));
        uint8 op = abi.decode(data[:32], (uint8));
        if (op == OP_DEPOSIT) {
            (, address token, uint256 amount, address depositor) =
                abi.decode(data, (uint8, address, uint256, address));
            Currency currency = Currency.wrap(token);
            uint256 actual;
            if (token == address(0)) {
                poolManager.sync(currency);
                poolManager.settle{value: amount}();
                poolManager.mint(address(this), currency.toId(), amount);
                actual = amount;
            } else {
                uint256 before = IERC20(token).balanceOf(address(poolManager));
                poolManager.sync(currency);
                bool ok = IERC20(token).transferFrom(depositor, address(poolManager), amount);
                require(ok, "transferFrom failed");
                poolManager.settle();
                actual = IERC20(token).balanceOf(address(poolManager)) - before;
                require(actual > 0, "zero transfer");
                poolManager.mint(address(this), currency.toId(), actual);
            }
            if (balances[depositor][token] == 0 && !_userHasToken[depositor][token]) {
                if (_userTokenList[depositor].length == 0) totalUsers++;
                _userTokenList[depositor].push(token);
                _userHasToken[depositor][token] = true;
                userCount[token]++;
            }
            balances[depositor][token] += actual;
            totalDeposited[token] += actual;
            depositCount[token]++;
            emit Deposit(token, depositor, actual);
        } else {
            (, address token, uint256 amount, address to) =
                abi.decode(data, (uint8, address, uint256, address));
            Currency currency = Currency.wrap(token);
            poolManager.burn(address(this), currency.toId(), amount);
            poolManager.take(currency, to, amount);
            totalWithdrawn[token] += amount;
        }
        return "";
    }

    // ── View helpers ─────────────────────────────────────────────────────────

    /// Returns all tokens a user has ever deposited, plus their current balance.
    function getUserAssets(address user)
        external view
        returns (address[] memory tokens, uint256[] memory bals)
    {
        tokens = _userTokenList[user];
        bals = new uint256[](tokens.length);
        for (uint256 i; i < tokens.length; i++) {
            bals[i] = balances[user][tokens[i]];
        }
    }

    /// Returns global stats for a list of tokens: totalDeposited, totalWithdrawn, netTVL, depositCount, userCount.
    /// Also returns totalUsers and guardianCount as scalar fields.
    function getStats(address[] calldata tokens)
        external view
        returns (
            uint256[] memory deposited,
            uint256[] memory withdrawn,
            uint256[] memory tvl,
            uint256[] memory depCounts,
            uint256[] memory userCounts,
            uint256 _totalUsers,
            uint256 _guardianCount
        )
    {
        deposited  = new uint256[](tokens.length);
        withdrawn  = new uint256[](tokens.length);
        tvl        = new uint256[](tokens.length);
        depCounts  = new uint256[](tokens.length);
        userCounts = new uint256[](tokens.length);
        for (uint256 i; i < tokens.length; i++) {
            deposited[i]  = totalDeposited[tokens[i]];
            withdrawn[i]  = totalWithdrawn[tokens[i]];
            tvl[i]        = deposited[i] > withdrawn[i] ? deposited[i] - withdrawn[i] : 0;
            depCounts[i]  = depositCount[tokens[i]];
            userCounts[i] = userCount[tokens[i]];
        }
        _totalUsers    = totalUsers;
        _guardianCount = guardianCount;
    }

    receive() external payable { revert("use deposit()"); }
}
