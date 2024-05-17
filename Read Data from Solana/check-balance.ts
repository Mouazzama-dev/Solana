import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("BmtawNKLpRKe7LR9FmGhwy6i4fpth5F5KQdK6WNmebRA");
const connection = new Connection("https://api.devnet.solana.com", "confirmed")
const balanceInLamports = await connection.getBalance(publicKey);
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}`)
