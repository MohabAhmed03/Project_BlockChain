// src/contract.js
import Web3 from 'web3';
import { contractAbi, contractAddress } from './constant';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
const contract = new web3.eth.Contract(contractAbi, contractAddress);

export default contract;
