const { ethers, network } = require("hardhat")
const { moveBlocks } = require("../utils/moveBlock")

const contractAddress = '0xa3Ddb185b94881C2829f197053040787C0899b25'
const spender = '0x54ace1642bA1d96A24477a67379B9c189f0a62bA'

async function approve() {
    const tokenContract = await ethers.getContractAt("MyToken", contractAddress)
    const tx = await tokenContract._approve(spender, 1)
    const txReceipt = await tx.wait(1)

    console.log("Approval complete")
    console.log(txReceipt)

    if ((network.config.chainId == "31337")) {
        await moveBlocks(2, (sleepAmount = 1000))
    }
}

approve()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })