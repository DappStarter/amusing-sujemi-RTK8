require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note soccer pull grace hero equal gas'; 
let testAccounts = [
"0x2707c9e742e8f97b31afa01c5dc94583e8e50b3374ea6007018af8f3a6774305",
"0x0c81915c2ed73b3be6d664ae734ea9d15a07cd7b98ceff77b725a1238ed3c7d4",
"0xf9cf3858e9896661bd0327f4442bfcac1eba057129111fdae647cbef2df62ed9",
"0x978622a1e6e29cf965a62d25abbb11d8bc1d393a28db52d9e5f5d14bc4cc92b7",
"0x10dc6860b55f7b9195c4a5c0a24e2bb419036eee13f7a784c7e3593d6445bbc0",
"0xf93e2cea2a3f9c07b301f2c5e101c550ad2babe396d4b3b96a81f307aa6b0c4b",
"0xf41259d65bec188e687a57db8ff2f138480f4272619870a01ef1d8fb6500ab1f",
"0x754a78ecd9eddbbd57fa075cdc0d2f141cd0f88c5ac488038b4516b6a400db53",
"0x810776be0fa865c8ceec4bf4f426e41d3c2812e8c240e58653a0bb3574d9bfa0",
"0x46d248f07c18a827ad9c5f6a6488312c068eb2da59683dc9beaa32f681fae4b3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

