import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaHelloWorld } from "../target/types/solana_hello_world";

describe("solana-hello-world", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SolanaHelloWorld as Program<SolanaHelloWorld>;

  it("Calls the hello method", async () => {
    const tx = await program.methods.hello().rpc();
    console.log("Transaction signature:", tx);
  });
});
