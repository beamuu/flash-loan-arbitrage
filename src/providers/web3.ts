import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_ENDPOINT));
export default web3;