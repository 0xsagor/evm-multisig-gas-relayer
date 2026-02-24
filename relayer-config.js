// RELAYER CONFIGURATION
module.exports = {
    // Target Network (e.g., Polygon, Base, Arbitrum)
    RPC_URL: "https://polygon-rpc.com",
    
    // The account that will pay the gas fees
    RELAYER_PRIVATE_KEY: "0xYOUR_RELAYER_PRIVATE_KEY",
    
    // The address of the Smart Contract supporting meta-txs
    TARGET_CONTRACT_ADDRESS: "0x...",
    
    // Server Port
    PORT: 3000
};
