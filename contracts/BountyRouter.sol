// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IBounty.sol";
import "./interfaces/ILensHub.sol";
import "./libraries/DataTypes.sol";

contract BountyRouter is Ownable {
    IBounty public bounty;
    ILensHub public lensHub;

    constructor(IBounty _bounty, ILensHub _lensHub){
        bounty = _bounty;
        lensHub = _lensHub;
    }

    function setBountyContract(IBounty _bounty) external onlyOwner {
        bounty = _bounty;
    }

    function setLensContract(ILensHub _lensHub) external onlyOwner {
        lensHub = _lensHub;
    }

    function createBounty(DataTypes.PostData calldata vars, IERC20 _token) external {
        uint256 _bountyId = lensHub.post(vars);
        bounty.createBounty(msg.sender, _bountyId, _token);
    }

}
