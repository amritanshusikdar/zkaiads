const hre = require("hardhat");

async function main() {
  const deployedContract = await hre.ethers.deployContract("ZKAIToken");
  await deployedContract.waitForDeployment();
  console.log(
    `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${deployedContract.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
