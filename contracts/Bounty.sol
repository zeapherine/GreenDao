//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "./IBounty.sol";

contract Bounty is IBounty {
    mapping(uint256 => address[]) public sponsors;
    mapping(uint256 => mapping(address => bool)) public isSponsor;
    mapping(uint256=> uint256) public bounty;
    mapping(uint256 => mapping(address => bool)) isParticipating;
    mapping(uint256 => IERC20) public token;

    function createBounty(address _creator, uint256 _bountyId, IERC20 _token) external {
        token[_bountyId] = _token;
        uint256 _joinAmount = _token.allowance(_creator, address(this));
        sponsors[_bountyId].push(_creator);
        bounty[_bountyId] += _joinAmount;
        _token.transferFrom(_creator, address(this), _joinAmount);
    }

    function join(address _AddressToJoin, uint256 _bountyId) external {
        uint256 _joinAmount = token[_bountyId].allowance(_AddressToJoin, address(this));
        sponsors[_bountyId].push(_AddressToJoin);
        bounty[_bountyId] += _joinAmount;
        token[_bountyId].transferFrom(_AddressToJoin, address(this), _joinAmount);
    }

    function participate(uint256 _bountyId, address _participant) external {
        isParticipating[_bountyId][_participant] = true;
    }

    function payoutWinner(uint256 _amount, uint256 _bountyId, address _winner) external {
        token[_bountyId].transfer(_winner, _amount);
    }
}
