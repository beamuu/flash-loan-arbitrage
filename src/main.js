const Web3 = require("web3");
const ethers  = require("ethers");
require("dotenv").config();

const web3 = new Web3(process.env.INFURA_ENDPOINT);