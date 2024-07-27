import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "dotenv/config"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomiclabs/hardhat-waffle"
import "hardhat-contract-sizer"

const config: HardhatUserConfig = {
  solidity: "0.8.7",
};

export default config;
