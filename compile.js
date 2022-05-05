// Javascript file to implement
// the above approach
const path = require("path");
const fs = require("fs");
const solc = require("solc");
 
// remember to change line 8 to your
// own file path. Make sure you have your
// own file name or contract name in line
// 13, 28 and 30 as well.
 
const contractPath = path.resolve(__dirname, "contracts", "FiDo.sol");

const source = fs.readFileSync(contractPath, "utf-8");

var input = {
    language: 'Solidity',
    sources: {
        'FiDo.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};
 
var output = JSON.parse(solc.compile(JSON.stringify(input)));

var interface = output.contracts["FiDo.sol"]["FiDo"].abi;
 
var bytecode = output.contracts['FiDo.sol']["FiDo"].evm.bytecode.object;
 
module.exports = { interface, bytecode };