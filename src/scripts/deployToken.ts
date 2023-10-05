import { ethers } from 'hardhat';

// MyToken contract deployed at: 0xD4C42e502669947139D736b693C97b82D4d01F48
async function main() {
  const MyToken = await ethers.deployContract('MyToken', []);

  await MyToken.waitForDeployment();

  console.log(`MyToken deployed to ${MyToken.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
