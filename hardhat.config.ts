import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

// 환경 변수 로드
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "kairos",

  networks: {
    kairos: {
      url: process.env.KAIROS_TESTNET_URL || "https://public-en-kairos.node.kaia.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  
};

export default config;
