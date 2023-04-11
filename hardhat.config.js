require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.12",
  networks: {
    mainnet: {
      url: `${process.env.WEB3_PROVIDER}`,
      accounts,
      gasPrice: 120 * 1000000000,
      chainId: 1,
    },
    goerli: {
      url: `${process.env.WEB3_PROVIDER}`,
      accounts,
      chainId: 5,
      live: true,
      saveDeployments: true,
      gasPrice: 50000000000,
      gasMultiplier: 2,

    },
    sepolia: {
      url: `${process.env.WEB3_PROVIDER}`,
      accounts,
      chainId: 11155111,
      live: true,
      saveDeployments: true,
      gasPrice: 2000000000,
      gasMultiplier: 2,

    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 10000000000,
      blockGasLimit: 1000000,
      accounts
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org/",
  
      gasPrice: 5100000000,
      blockGasLimit: 1000000,
      accounts
    }

  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },

};
