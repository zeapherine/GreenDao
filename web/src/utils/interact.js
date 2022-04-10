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
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

// Contract
const bountyContract = new web3.eth.Contract("0x4CfE99348fd5e4B05CEA371d94601770cf7B0D81", bounty, signer);
const routerContract = new web3.eth.Contract("0xF7e5D0c6Dfab3C102da149e896967e270B94c9a6", router, signer);

export const createBounty = async (id, uri) => {
    if (!window.ethereum || address === null) {
        return {
          status:
            "💡 Connect your Metamask wallet to update the message on the blockchain.",
        };
      }
    
      if (message.trim() === "") {
        return {
          status: "❌ Your message cannot be an empty string.",
        };
      }

    const transactionParameters = {
        to: 0x4CfE99348fd5e4B05CEA371d94601770cf7B0D81, // Required except during contract publications.
        from: address, // must match user's active address.
        data: routerContract.methods.createBounty({
            profileId: id,
            contentURI:
            uri,
            collectModule: "0xbB0e09094109149471c9d5D5C51c4D6d9fD20D49",
            collectModuleData: [],
            referenceModule: "0xf4a2D1AFD955A36f2ec4555814220b2B4E269A0b",
            referenceModuleData: [],
        }).encodeABI(),
      };

    const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      return txHash
}

export const declareWinner = async (amount, id, winner) => {
    if (!window.ethereum || address === null) {
        return {
          status:
            "💡 Connect your Metamask wallet to update the message on the blockchain.",
        };
      }
    
      if (message.trim() === "") {
        return {
          status: "❌ Your message cannot be an empty string.",
        };
      }

    const transactionParameters = {
        to: 0x4CfE99348fd5e4B05CEA371d94601770cf7B0D81, // Required except during contract publications.
        from: address, // must match user's active address.
        data: bountyContract.methods.payoutWinner(amount, id, winner).encodeABI(),
      };

    const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });

      return txHash;
}