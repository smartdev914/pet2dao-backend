require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("solidity-coverage");

module.exports = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      blockGasLimit: 12500000,
      gasPrice: 8000000000
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygon: {
      url: process.env.POLYGON_URL,
      accounts:
      process.env.POLYGON_PRIVATE_KEY !== undefined ? [process.env.POLYGON_PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: {
      polygon: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.ETHERSCAN_API_KEY
    }
  } 
};
