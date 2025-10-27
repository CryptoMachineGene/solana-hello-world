import * as anchor from "@coral-xyz/anchor";
import { Connection, Keypair, clusterApiUrl } from "@solana/web3.js";
import fs from "fs";
import path from "path";
import { Program } from "@coral-xyz/anchor";
import { SolanaHelloWorld } from "../target/types/solana_hello_world";

async function main() {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const walletPath = path.join(process.env.HOME || "", ".config/solana/id.json");
  const secret = Uint8Array.from(JSON.parse(fs.readFileSync(walletPath, "utf8")));
  const wallet = new anchor.Wallet(Keypair.fromSecretKey(secret));

  const provider = new anchor.AnchorProvider(connection, wallet, { commitment: "confirmed" });
  anchor.setProvider(provider);

  const program = anchor.workspace.SolanaHelloWorld as Program<SolanaHelloWorld>;

  const sig = await program.methods.hello().rpc();
  console.log("✅ hello() sent. Tx:", sig);
  console.log(`Explorer: https://explorer.solana.com/tx/${sig}?cluster=devnet`);
}

main().catch((e) => { console.error(e); process.exit(1); });
