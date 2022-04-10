/**
 * Bounty deployed to: 0x4CfE99348fd5e4B05CEA371d94601770cf7B0D81
DAOCollectModule deployed to: 0xbB0e09094109149471c9d5D5C51c4D6d9fD20D49
DAOCommentModule deployed to: 0xf4a2D1AFD955A36f2ec4555814220b2B4E269A0b
Bounty deployed to: 0xF7e5D0c6Dfab3C102da149e896967e270B94c9a6
 */
import bounty from "../../abi/Bounty.json";
import router from "../../abi/BountyRouter.json";
import erc20 from "../../abi/Erc20.json";
// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="mumbai", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const bountyContract = new ethers.Contract("0x4CfE99348fd5e4B05CEA371d94601770cf7B0D81", bounty, signer);
const routerContract = new ethers.Contract("0xF7e5D0c6Dfab3C102da149e896967e270B94c9a6", router, signer);

export const createBounty = async (id, uri) => {
    const tx = await routerContract.createBounty({
        profileId: id,
        contentURI:
        uri,
        collectModule: "0xbB0e09094109149471c9d5D5C51c4D6d9fD20D49",
        collectModuleData: [],
        referenceModule: "0xf4a2D1AFD955A36f2ec4555814220b2B4E269A0b",
        referenceModuleData: [],
    });
    await tx.wait();
}

export const declareWinner = async (amount, id, winner) => {
    const tx = await bountyContract.payoutWinner(amount, id, winner)
    await tx.wait();
}