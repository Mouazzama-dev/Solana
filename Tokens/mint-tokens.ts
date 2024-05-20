import {MintCloseAuthorityLayout, mintTo} from "@solana/spl-token";
require('dotenv').config();
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10,2);

const user = getKeypairFromEnvironment("SECRET_KEY");

const tokenMintAccount = new PublicKey("Gm8jeTm3qDncpdc5AvVxmv5LXwSLDfzD34CyozPPtvrg");

const recipientAssociatedTokenAccount = new PublicKey("DQSZvbW8hktCeqa96mHTeAAGQHLveMm5gwRJ2TEmymT3");

const transactionSignature = await mintTo(connection,user,tokenMintAccount, recipientAssociatedTokenAccount, user, 10*MINOR_UNITS_PER_MAJOR_UNITS);

const link = getExplorerLink("transaction", transactionSignature, "devnet");

console.log(`✅ Success! Mint Token Transaction: ${link}`);