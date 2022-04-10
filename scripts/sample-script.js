// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const hub = "0x4BF0c7AD32Fd2d32089790a54485e23f5C7736C0";
  const Bounty = await hre.ethers.getContractFactory("Bounty");
  const _bounty = await Bounty.deploy();

  await _bounty.deployed();

  console.log("Bounty deployed to:", _bounty.address);

  const DAOCollect = await hre.ethers.getContractFactory("DAOCollectModule");
  const _daoCollect = await DAOCollect.deploy(hub, _bounty.address);

  await _daoCollect.deployed();

  console.log("DAOCollectModule deployed to:", _daoCollect.address);

  const DAOComment = await hre.ethers.getContractFactory("DAOCommentModule");
  const _daoComment = await DAOComment.deploy(hub, _bounty.address);

  await _daoComment.deployed();

  console.log("DAOCommentModule deployed to:", _daoComment.address);

  const Router = await hre.ethers.getContractFactory("BountyRouter");
  const _router = await Router.deploy(_bounty.address, hub);

  await _router.deployed();

  console.log("Bounty deployed to:", _router.address);

  await hre.run("verify:verify", {
    address: _bounty.address
  });

  await hre.run("verify:verify", {
    address: _daoCollect.address,
    constructorArguments: [
      hub, _bounty.address
    ],
  });

  await hre.run("verify:verify", {
    address: _daoComment.address,
    constructorArguments: [
      hub, _bounty.address
    ],
  });

  await hre.run("verify:verify", {
    address: _router.address,
    constructorArguments: [
      _bounty.address, hub 
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
