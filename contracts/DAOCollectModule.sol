//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./core/modules/ModuleBase.sol";
import "./interfaces/ICollectModule.sol";
import "./IBounty.sol";

contract DAOCollectModule is ICollectModule, ModuleBase {
    IBounty immutable public bounty;

    constructor(address hub, IBounty _bounty) ModuleBase(hub) { bounty = _bounty; }

    function initializePublicationCollectModule(
        uint256 profileId,
        uint256 pubId,
        bytes calldata data
    ) external returns (bytes memory) {

    }

    function processCollect(
        uint256 referrerProfileId,
        address collector,
        uint256 profileId,
        uint256 pubId,
        bytes calldata data
    ) external {
        bounty.join(collector, pubId);
    }
}