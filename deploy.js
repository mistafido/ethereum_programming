const HDWalletProvider = require("truffle-hdwallet-provider");

// Web3 constructor function.
const Web3 = require("web3");

// Get bytecode and ABI after compiling
// solidity code.
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
"mnenomic phrase",
// eth wallet phrase!
"https://mainnet.infura.io/v3/99477313cdc44e5f84367320bd7eb33e"
// endpoint!
);

const web3 = new Web3(provider);

const deploy = async () => {
// Get access to all accounts linked to mnemonic
// Make sure you have metamask installed.
const accounts = await web3.eth.getAccounts();

console.log("Attempting to deploy from account", accounts[0]);

// Pass initial gas and account to use in the send function
const result = await new web3.eth.Contract(interface)
	.deploy({ data: bytecode })
	.send({ gas: "1000000", from: accounts[0]});

console.log("Contract deployed to", result.options.address);
};

deploy();

