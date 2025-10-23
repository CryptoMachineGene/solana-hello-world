#!/usr/bin/env bash
set -euo pipefail

# Simple devnet deploy helper for Anchor "Hello World"
# Usage: ./scripts/devnet-deploy.sh

echo "→ Setting Solana config to devnet…"
solana config set --url https://api.devnet.solana.com >/dev/null

echo "→ Current keypair: $(solana address)"
echo "→ Requesting 2 SOL airdrop on devnet (this may take a moment)…"
solana airdrop 2 >/dev/null || true

echo "→ Anchor build…"
anchor build

echo "→ Anchor deploy…"
anchor deploy

echo "✓ Done. Program(s) in target/deploy"
