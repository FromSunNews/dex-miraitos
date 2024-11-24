# Transaction Flow Demo

A React + TypeScript application built with Vite, demonstrating transaction flows on the Aptos blockchain.

## Features

- Aptos Wallet Connection
- Multiple Transaction Types Support:
  - Single Signer Transactions
  - Multi Agent Transactions 
  - Sponsored Transactions
- User-friendly Interface with Breadcrumb and Sidebar
- Mainnet Warning Alerts
- Network Switching Support

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm package manager

### Installation

```bash
# Install dependencies
# Need install with pnpm
pnpm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Aptos Wallet Adapter
- Shadcn UI Components

## Development Notes

- Transaction flows are for demonstration purposes only and are disabled on Mainnet
- Requires a supported Aptos wallet to interact with the application
- Hot Module Replacement (HMR) enabled for fast development
- ESLint configured for type-aware linting

## ESLint Configuration

For production applications, enable type-aware lint rules by:

1. Configuring parserOptions
2. Using recommended type-checked configs
3. Installing and configuring eslint-plugin-react

See the ESLint section in the code for detailed configuration.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.