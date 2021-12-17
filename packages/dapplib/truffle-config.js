require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike rival magic huge good another army ghost'; 
let testAccounts = [
"0x0a5c03acdc220250691a75625be9601a568c2b8fb7914cc885826ae6582ea308",
"0x5469d97d620de29066679d4c9d61eb8fd03f8745dcb0438eca548e4135283225",
"0x35471f8a6179bd3b759395d2450095da3e33f0356b70b6cd8286ed2498781d40",
"0xaec7f9120f11d98a94799e0a9f2cd592cbff7293431d290fb4b528d9a19167e3",
"0xec2c1ab90355a315875c1b738972eabb9183175eb606a120b8219c16b6a43421",
"0xe19e1edab891f684a75c52b763fc41c4a2b1d47890601eb9127bfcbeac1fe69f",
"0x8b0dc8f3f75853d53f47c112bd3e6ca6d430681081ea4099cdbd91970f9beb7f",
"0x4a20ae0c472a7aa73b699076c2230e78f6a033329d3a99302ac0806cc66c2746",
"0x33296cb20154cdab801c8df198bdcf5a9c9941f98471552284483acb84c3e5c3",
"0x5c56fd7a817d2ad7cd92d49297d4d5d5f36f756c5eda69720dbb69d04bc39f2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

