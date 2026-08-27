# CloakCash

Privacy-preserving cryptocurrency transactions using zero-knowledge proofs on Uniswap v4.

🔗 **Live**: [cloakcash.fun](https://cloakcash.fun)

## Features

- 🔒 **Zero-Knowledge Privacy** - Break on-chain links between deposit and withdrawal
- 💰 **Multi-Token Support** - ETH and ERC-20 tokens
- 🔐 **Password-Protected Vaults** - Optional password-derived guardian for recovery
- 🌐 **Decentralized Relayers** - No wallet needed for withdrawals
- ⚡ **Built on Uniswap v4** - Leveraging battle-tested DeFi infrastructure

## Architecture

### Smart Contracts
- **CloakCashVault** - Main privacy vault with ZK proof verification
- **CloakCashSafe** - Optional password-protected vault with recovery guardian
- Deployed on Robinhood Chain (4663)

### Zero-Knowledge Proofs
- Noir circuit for withdrawal verification
- Groth16 proof system
- Merkle tree commitment scheme
- Nullifier tracking to prevent double-spending

### Relayer Network
- **Official Relayer**: Maintained by CloakCash team
- **Custom Relayers**: Anyone can run their own relayer and earn fees
- **Decentralized**: No single point of failure

## Run Your Own Relayer

Want to earn fees by providing relayer services? It's easy!

### Quick Start
```bash
# Clone the relayer repository
git clone https://github.com/CloakCashVault/relayer
cd relayer

# Configure
cp .env.example .env
nano .env  # Set your RELAYER_PRIVATE_KEY

# Deploy (choose one)
./start.sh                    # Script
docker-compose up -d          # Docker
npm install && node index.js  # Direct
```

### Revenue Model
- **Service Fee**: 0.2% of withdrawal amount (configurable)
- **Gas Compensation**: Actual gas cost reimbursement
- **Example**: 1 ETH withdrawal ≈ 0.0195 ETH (~$50 USD) revenue

### Configuration
Customize your relayer:
```env
RELAYER_NAME=My Fast Relayer
RELAYER_DESCRIPTION=Lightning fast privacy transactions
CONTACT_INFO=contact@example.com
RELAYER_FEE_BPS=20  # 0.2% fee
```

### Documentation
- 📖 [Relayer Repository](https://github.com/CloakCashVault/relayer)
- 🚀 [Quick Start Guide](https://github.com/CloakCashVault/relayer/blob/main/QUICKSTART.md)
- ⚙️ [Configuration Reference](https://github.com/CloakCashVault/relayer/blob/main/CONFIG.md)

### User Experience
Users can add your relayer in the CloakCash frontend:
1. Go to Withdraw → Relayer mode
2. Click "Change"
3. Enter your relayer URL: `https://your-relayer.com:3001`
4. Save and use

Your relayer will show up with real-time latency:
```
Relayer: My Fast Relayer (25ms)  [Change]
```

## Project Structure

```
CloakCash/
├── contracts/          # Solidity smart contracts
│   ├── CloakCashVault.sol
│   └── CloakCashSafe.sol
├── circuits/           # Noir ZK circuits
│   └── withdraw/
├── frontend/           # Pre-built static website (ready to serve)
│   ├── index.html
│   ├── assets/
│   └── zk/            # ZK proving files
├── scripts/            # Deployment and testing scripts
└── test/               # Smart contract tests
```

## Technology Stack

- **Smart Contracts**: Solidity, Foundry
- **Zero-Knowledge**: Noir, Groth16
- **Frontend**: Pre-built React app (no build required)
- **Blockchain**: Robinhood Chain, Uniswap v4
- **Relayer**: Node.js, Express, Viem

## Development

### Prerequisites
- Foundry (for smart contracts)
- Noir (for ZK circuits, if modifying)

### Smart Contract Development
```bash
# Clone repository
git clone https://github.com/CloakCashVault/CloakCash
cd CloakCash

# Compile contracts
forge build

# Run tests
forge test
```

### Circuit Development
```bash
# Compile circuits (if modifying)
cd circuits/withdraw
nargo compile
```

### Local Testing
Serve the pre-built frontend locally:
```bash
cd frontend
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Deployment

### Frontend
The frontend is **pre-built and ready to serve** - no build step required:
```bash
# Serve locally with any static file server
cd frontend
python3 -m http.server 8000
# or
npx serve .

# Or deploy to any static hosting:
# - Vercel, Netlify, Cloudflare Pages
# - GitHub Pages
# - Any web server (Nginx, Apache, etc.)
```

Visit http://localhost:8000 to use the app.

### Smart Contracts
```bash
# Deploy to Robinhood Chain
forge script script/DeployRobinhood.s.sol --rpc-url robinhood --broadcast
```

### Relayer
Want to run your own relayer? See the dedicated repository:
- 📦 **Repository**: [github.com/CloakCashVault/relayer](https://github.com/CloakCashVault/relayer)
- 🚀 **Quick Start**: [Deployment Guide](https://github.com/CloakCashVault/relayer#readme)
- ⚙️ **Configuration**: [Config Reference](https://github.com/CloakCashVault/relayer/blob/main/CONFIG.md)

## Security

### Audits
- ⏳ Security audit in progress

### Bug Bounty
- Report vulnerabilities to: security@cloakcash.fun

### Best Practices
- ✅ Use official frontend or verify source code
- ✅ Verify smart contract addresses
- ✅ Test with small amounts first
- ✅ Keep your ticket safe (it's your withdrawal key)
- ✅ Only use trusted relayers

## Community & Support

- 🌐 Website: [cloakcash.fun](https://cloakcash.fun)
- 📧 Email: contact@cloakcash.fun
- 🐦 Twitter: [@CloakCash](https://twitter.com/CloakCash)
- 💬 Discord: [Join our community](https://discord.gg/cloakcash)

## Ecosystem

### Official Services
- **Website**: [cloakcash.fun](https://cloakcash.fun)
- **Official Relayer**: Maintained by CloakCash team
- **Documentation**: Complete guides and API docs

### Community Services
- **Custom Relayers**: Run by community members
- **Third-party Integrations**: Build on CloakCash protocol
- **Open Source Tools**: Contribute to the ecosystem

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Areas for Contribution
- 🔧 Protocol improvements
- 📝 Documentation
- 🌐 Frontend enhancements
- 🔒 Security reviews
- 🚀 Relayer optimizations

## Roadmap

- ✅ Mainnet launch on Robinhood Chain
- ✅ Multi-token support
- ✅ Password-protected vaults
- ✅ Decentralized relayer network
- 🔄 Multi-chain expansion (Base, Ethereum, etc.)
- 🔄 Mobile app
- 🔄 Enhanced privacy features
- 🔄 DAO governance

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

- [Uniswap v4](https://uniswap.org/) - DeFi infrastructure
- [Noir](https://noir-lang.org/) - Zero-knowledge proof framework
- [Foundry](https://getfoundry.sh/) - Smart contract development
- [Robinhood Chain](https://robinhood.com/crypto) - Layer 2 blockchain

---

**Built with ❤️ by the CloakCash team**

*Making DeFi private, one transaction at a time.*
