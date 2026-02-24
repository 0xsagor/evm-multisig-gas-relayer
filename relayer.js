const express = require('express');
const { ethers } = require('ethers');
const cors = require('cors');
const config = require('./relayer-config');

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Provider and Wallet
const provider = new ethers.JsonRpcProvider(config.RPC_URL);
const relayerWallet = new ethers.Wallet(config.RELAYER_PRIVATE_KEY, provider);

app.post('/relay', async (req, res) => {
    try {
        const { userAddress, signature, functionData, nonce } = req.body;

        console.log(`Relaying tx for: ${userAddress}`);

        // Define the contract interface (Example: Simple Meta-Tx handler)
        const contract = new ethers.Contract(
            config.TARGET_CONTRACT_ADDRESS,
            ["function executeMetaTx(address user, bytes data, bytes signature, uint256 nonce)"],
            relayerWallet
        );

        // Send the transaction
        const tx = await contract.executeMetaTx(userAddress, functionData, signature, nonce, {
            gasLimit: 500000 // Adjust based on contract complexity
        });

        const receipt = await tx.wait();
        
        res.status(200).json({
            success: true,
            hash: receipt.hash
        });
    } catch (error) {
        console.error("Relay error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(config.PORT, () => {
    console.log(`Relayer service active on port ${config.PORT}`);
});
