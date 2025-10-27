import { Connection } from "@solana/web3.js";

async function main() {
  const sig = process.argv[2];
  if (!sig) {
    console.error("Usage: npx ts-node frontend/get-tx-logs.ts <SIGNATURE>");
    process.exit(1);
  }
  const rpc = process.env.SOLANA_RPC || "https://api.devnet.solana.com";
  const connection = new Connection(rpc, "confirmed");
  const tx = await connection.getTransaction(sig, {
    maxSupportedTransactionVersion: 0
  });
  if (!tx) {
    console.error("Transaction not found (yet). Try again in a few seconds.");
    process.exit(2);
  }
  console.log("Slot:", tx.slot);
  console.log("Logs:\n" + (tx.meta?.logMessages ?? []).join("\n"));
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
