# Solana Transactions and Instructions

## Overview

On Solana, all modifications to on-chain data occur through transactions. Transactions are primarily sets of instructions that invoke Solana programs.

## Transactions and Instructions

### Transactions

- Transactions on Solana consist of one or more instructions.
- These instructions define the steps to be executed within a transaction.

### Instructions

Each instruction within a transaction includes:
1. **Accounts Array**: An array of accounts to be read from and/or written to. Solana's ability to process transactions that affect different accounts simultaneously contributes to its high performance.
2. **Program Public Key**: The public key of the program to be invoked by the instruction.
3. **Data**: A byte array containing the data to be passed to the program being invoked.

## SystemProgram.transfer()

One common operation on the Solana network is transferring SOL using the `SystemProgram.transfer()` function provided by the `@solana/web3.js` library. This function creates an instruction for transferring SOL.

### Requirements for SystemProgram.transfer()

- **Sender's Public Key**: The public key corresponding to the sender's account.
- **Recipient's Public Key**: The public key corresponding to the recipient's account.
- **Amount**: The amount of SOL to send, specified in lamports (1 SOL = 1,000,000,000 lamports).

