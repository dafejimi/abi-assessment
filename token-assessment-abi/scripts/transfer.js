const { ethers, network } = require("hardhat")
const { moveBlocks } = require("../utils/moveBlocks")

const contractAddress = '0xa3Ddb185b94881C2829f197053040787C0899b25'
const to = '0x7046095dCd034f4A1c5b29901B330f8094B444bE'

async function transfer() {
    const tokenContract = await ethers.getContractAt("MyToken", contractAddress)
    const tx = await tokenContract._transfer(to, 1)
    const txReceipt = await tx.wait(1)

    console.log("Transfer complete")
    console.log(txReceipt)

    if ((network.config.chainId == "31337")) {
        await moveBlocks(2, (sleepAmount = 1000))
    }
}

transfer()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })