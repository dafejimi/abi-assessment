const { network, ethers } = require("hardhat")
const {
  VERIFICATION_BLOCK_CONFIRMATIONS
} = require("../helper-hardhat-config")

const deployTokenContract = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments
  const { deployer } = await getNamedAccounts()
  // const chainId = network.config.chainId
  
  log("----------------------------------------------------")
  log("Deploying Token Contract and waiting for confirmations...")

  const args = [
    "MyToken",
    "MT",
    1000000
  ]

  const myTokenContract = await deploy("MyToken", {
    from: deployer,
    args: args, 
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: VERIFICATION_BLOCK_CONFIRMATIONS || 1,
  })

  log(`Token contract is at ${myTokenContract.address}`)

  //if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
  //    await verify(aliasContract.address, args)
  //}
}

module.exports = deployTokenContract

