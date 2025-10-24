# Solana Hello World with Anchor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solana](https://img.shields.io/badge/Solana-Mainnet-blueviolet)](https://solana.com/)
[![Built with Anchor](https://img.shields.io/badge/Built%20with-Anchor-orange)](https://www.anchor-lang.com/)
[![Rust](https://img.shields.io/badge/Language-Rust-informational)](https://www.rust-lang.org/)
[![Terminal Visionaries Only](https://img.shields.io/badge/Mode-Terminal%20Visionaries-black)](#)
![Status](https://img.shields.io/badge/Status-In%20Progress-orange.svg)


A minimal Solana program built with **Anchor**, logging `Hello, Solana!` on-chain.  
Fast, local, verifiable — perfect for first-contact with Anchor.

## 🧩 Stack
- **Rust** (smart contracts)
- **Anchor Framework** (program + Mocha tests)
- **Solana CLI**
- **Node.js** + Yarn/NPM
- **Local validator / Devnet** setup


## ⚙️ Quickstart

## Build
```bash
anchor build
```

## Test
```bash
anchor test
```
You’ll see output like:
```bash
Program log: Hello, Solana!
```
That’s your program running successfully inside Anchor’s local test validator.

🌍 Optional: Deploy to Devnet
```bash
solana config set --url https://api.devnet.solana.com
solana airdrop 2
anchor build
anchor deploy
```
Copy your Program Id from the deploy output and ensure it matches:
Anchor.toml → [programs.devnet]
programs/solana-hello/src/lib.rs → inside declare_id!()

## Project Structure
- `programs/` – Rust smart contracts
- `tests/` – JS/TS test scripts
- `Anchor.toml` – project configuration
- `target/idl` - Generated IDL after build 

Hello, Solana! logged via Anchor.

🧪 Example Test
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaHello } from "../target/types/solana_hello";

describe("solana-hello", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.SolanaHello as Program<SolanaHello>;

  it("Says Hello, Solana!", async () => {
    const tx = await program.methods.initialize().rpc();
    console.log("Transaction Signature:", tx);
  });
});

💬 Credits
Decentralized and minimal. 🛠️
Built by CryptoMachineGene. 🚀
Tracked on-chain. 📡
Logged with love. 💙
Signal only. 📶
Web3 dev mode: ON. 🔧
Push it. Like a dev god. ⚡
Terminal visionaries only. 🧠
Solana supremacy. ☀️

Built. Committed. Anchored. ⛓️
See you in mainnet. 🌐
Goodbye test validator. 👋

📜 License
MIT
