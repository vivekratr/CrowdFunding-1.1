// 0x865E12a0cDF8E9604A7C954623F7466Dc40A3239

require("@nomiclabs/hardhat-waffle");

module.exports = {
  
    gasPrice: 100,
  
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/QutxXX8igHMDOr_sZsEQ57NSeQDO4tU3",
      accounts:['e4f81625dfdf5df8e155cb98f8e17d568bdfa0c66ada3f317c1c8addaa12bb7c']
    }}
}