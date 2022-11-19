async function main() {
    const BlockchainDeveloperNFT = await ethers.getContractFactory("BlockchainDeveloperNFT");
 
    // Start deployment, returning a promise that resolves to a contract object
    const blockchain_dev_nft = await BlockchainDeveloperNFT.deploy();   
    console.log("Contract deployed to address:", blockchain_dev_nft.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
