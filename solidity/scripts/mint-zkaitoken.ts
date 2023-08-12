import { ethers } from "hardhat";
import { MyToken, MyToken__factory } from "../typechain-types";

async function main() {
  const tokenContractAddress = "0xb537DCfba91cEf9E9d6d77F16CF60F7780aA3a69";
  const adCustomerAddress = "0xb537DCfba91cEf9E9d6d77F16CF60F7780aA3a69";
  const mintAmount = ethers.parseUnits("10");

  const provider = new ethers.JsonRpcProvider(
    `https://rpc.public.zkevm-test.net/`
  );
  const wallet = new ethers.Wallet(
    process.env.ACCOUNT_PRIVATE_KEY ?? "",
    provider
  );

  const contractFactory = new MyToken__factory(wallet);
  const contract = contractFactory.attach(tokenContractAddress) as MyToken;
  console.log(
    `Attached to the contract at address ${await contract.getAddress()}`
  );

  console.log(
    `Minting ${ethers.formatUnits(
      mintAmount
    )} tokens to the address ${adCustomerAddress}`
  );
  const mintTx = await contract.mint(adCustomerAddress, mintAmount);
  const mintTxReceipt = await mintTx.wait();
  console.log(
    `The transaction hash is ${mintTxReceipt?.hash} included in the block ${mintTxReceipt?.blockNumber}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
