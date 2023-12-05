import hre from 'hardhat'
import { error } from "console";
import ethers from "hardhat";

async function  main() {
    const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();
    console.log("deploy: ",nftMarket.address);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});