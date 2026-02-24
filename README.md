# EVM Multisig Gas Relayer

A robust backend service for Web3 applications that implement "Gasless" transactions. This relayer listens for signed messages (EIP-712) and submits them to the network, covering the gas costs for the end-user.

## Features
* **EIP-712 Support:** Securely handles typed data signing and verification.
* **Nonce Management:** Automatic tracking of account nonces to prevent transaction collisions.
* **Dynamic Gas Estimation:** Real-time fetching of priority fees to ensure fast inclusion on chains like Polygon, Arbitrum, and Base.
* **Provider Failover:** Simple logic to switch between multiple RPC providers if one goes down.

## Prerequisites
* Node.js (v18+)
* An EOA (Externally Owned Account) with native tokens to act as the "Relayer"
* An Alchemy or Infura API Key

## Setup
1. `npm install`
2. Update `relayer-config.js` with your RPC URL and Relayer Private Key.
3. Start the service: `node relayer.js`
