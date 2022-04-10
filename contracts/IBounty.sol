// SPDX-License-Identifier: AGPL-3.0-only

pragma solidity 0.8.10;

interface IBounty {
   
    function join(address _AddressToJoin, uint256 _bountyId) external;

  
    function participate(uint256 _bountyId, address _participant) external;

  
    function payoutWinner(uint256 _amount, uint256 _bountyId, address _winner) external;
}
