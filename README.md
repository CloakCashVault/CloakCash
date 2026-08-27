Brief technical overview:
CloakCash contracts are fully open source. The core is a ZK-SNARK verifier (Groth16) paired with a Merkle tree deposit registry. Users deposit into the Uniswap v4 PoolManager as ERC-6909 balances; withdrawals require a valid zero-knowledge proof of deposit ownership without revealing which deposit. The nullifier registry prevents double-spends. No admin keys, no upgradeability—just immutable math.

Developer-focused (slightly longer):
All contracts are open source on GitHub. The architecture: deposits create Merkle tree leaves (Poseidon hash of secret + nullifier + amount), stored on-chain. Withdrawals submit a Groth16 proof verifying "I know a secret corresponding to a leaf in this tree" without revealing which leaf. The contract checks the proof, marks the nullifier as spent, and releases funds from the PoolManager. Password-protected Safe Vault adds an Argon2id-derived guardian signature layer on top of ERC-6909 balances.

One-liner:
Fully open-source contracts: Groth16 ZK proofs + Poseidon Merkle tree + Uniswap v4 PoolManager integration—no admin keys, immutable deployment.

Technical bullet points:
- ZK Circuit: Groth16 proof system (snarkjs + circom), Poseidon hash, 20-depth Merkle tree
- On-chain verification: Solidity verifier checks proof + root validity, nullifier uniqueness
- Funds custody: Uniswap v4 PoolManager (ERC-6909 internal balances), not a separate pool
- Anonymity set: All deposits of the same token/amount share one Merkle tree
- Immutable: No Ownable, no proxy, no pause—deploy once, run forever
- Relayer support: Optional gas-free withdrawals (relayer submits tx, deducts fee from withdrawal)
