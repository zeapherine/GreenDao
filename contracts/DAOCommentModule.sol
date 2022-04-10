//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./core/modules/ModuleBase.sol";
import "./interfaces/IReferenceModule.sol";
import "./IBounty.sol";

contract DAOCommentModule is IReferenceModule, ModuleBase {
    IBounty immutable public bounty;

    constructor(address hub, IBounty _bounty) ModuleBase(hub) { bounty = _bounty; }

    function initializeReferenceModule(
        uint256 profileId,
        uint256 pubId,
        bytes calldata data
    ) external returns (bytes memory) {}

   function processComment(
        uint256 profileId,
        uint256 profileIdPointed,
        uint256 pubIdPointed,
        bytes calldata data
    ) external {
        bounty.participate(pubIdPointed, msg.sender);
    }

    
    function processMirror(
        uint256 profileId,
        uint256 profileIdPointed,
        uint256 pubIdPointed,
        bytes calldata data
    ) external {}
}