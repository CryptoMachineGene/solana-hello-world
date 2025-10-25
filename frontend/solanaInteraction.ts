import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { Program, AnchorProvider, web3 } from '@project-serum/anchor';

const connection = new Connection("https://api.devnet.solana.com");
const wallet = Keypair.fromSecretKey(Uint8Array.from([/* Your secret key array */]));
const provider = new AnchorProvider(connection, wallet, { commitment: "processed" });

// Program ID (Replace with your program's public key)
const programId = new PublicKey("YOUR_PROGRAM_ID_HERE");

// Define your program (the Anchor IDL will be needed here)
const program = new Program(IDL, programId, provider);

async function initialize() {
    try {
        const tx = await program.rpc.initialize({
            accounts: {
                user: wallet.publicKey,
                systemProgram: web3.SystemProgram.programId,
            },
        });
        console.log("Transaction successful:", tx);
    } catch (err) {
        console.error("Error:", err);
    }
}

// Call the initialize function
initialize();
