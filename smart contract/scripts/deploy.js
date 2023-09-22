const main = async () => {
  const crowdfundingFactory = await hre.ethers.getContractFactory("Crowdfunding");
  const crowdfundingContract = await crowdfundingFactory.deploy(200,200);

  await crowdfundingContract.deployed();

  console.log("crowdfunding address: ", crowdfundingContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();