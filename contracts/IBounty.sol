// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
interface IBounty {

    function createBounty(address _creator, uint256 _bountyId, IERC20 _token) external;
   
    function join(address _AddressToJoin, uint256 _bountyId) external;

  
    function participate(uint256 _bountyId, address _participant) external;

  
    function payoutWinner(uint256 _amount, uint256 _bountyId, address _winner) external;
}
