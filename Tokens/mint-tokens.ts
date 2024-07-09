import { MintCloseAuthorityLayout, mintTo, getMint, getAccount, createAssociatedTokenAccount, createMint } from "@solana/spl-token";
require('dotenv').config();
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const user = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintAccount = new PublicKey("toks9nV77o8tjKFyko5Az1AYtyrE1uYFiMUjJgBdeD4");
const recipientAssociatedTokenAccount = new PublicKey("E2pyeAscK8YwNgMtB1ofqfoe4SRLRqEUa5sb77ovEGip");

async function main() {
  try {
    // Verify that the token mint account is a valid mint
    const mintInfo = await getMint(connection, tokenMintAccount);
    console.log('Mint info:', mintInfo);

    // Verify that the recipient associated token account is valid
    const accountInfo = await getAccount(connection, recipientAssociatedTokenAccount);
    console.log('Account info:', accountInfo);

    const transactionSignature = await mintTo(
      connection,
      user,
      tokenMintAccount,
      recipientAssociatedTokenAccount,
      user,
      10 * MINOR_UNITS_PER_MAJOR_UNITS
    );

    const link = getExplorerLink("transaction", transactionSignature, "devnet");
    console.log(`✅ Success! Mint Token Transaction: ${link}`);
  } catch (error) {
    console.error(`❌ Error: ${error}`);
  }
}

main();
