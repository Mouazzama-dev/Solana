//This Associated Token Account could be for our wallet (if we, as the token mint authority, want to mint tokens to our address) or anyone else we know with a devnet wallet!

import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
require('dotenv').config();
import { getExplorerLink,getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const user = getKeypairFromEnvironment("SECRET_KEY")

console.log(`Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`);

const tokenMintAccount = new PublicKey("Gm8jeTm3qDncpdc5AvVxmv5LXwSLDfzD34CyozPPtvrg");


// Here we are making an associated token account for our own address, but we can 
// make an ATA on any other wallet in devnet!
// const recipient = new PublicKey("SOMEONE_ELSES_DEVNET_ADDRESS");
const recipient = user.publicKey;

const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, user,tokenMintAccount,recipient);

console.log(`Token Account: ${tokenAccount.address.toBase58()}`);

const link = getExplorerLink(
  "address",
  tokenAccount.address.toBase58(),
  "devnet"
);

console.log(`✅ Created token Account: ${link}`);