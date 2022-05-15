require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.4",
  paths: {
    sources: "./contracts",
  },
};

// 0x9d4f99cde70f058b1a9cb34870317bdb828e9c814de62ea727f46a0cfe6e3351
