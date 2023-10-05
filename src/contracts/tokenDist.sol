// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenDistributor {
    address public owner;
    IERC20 public token; // ERC20 token contract

    struct User {
        bytes32 merkleRoot;
        bool isEligible;
    }

    mapping(address => User) public users;

    error OnlyOwnerError();
    error InvalidProofError();
    error UserNotEligibleError();
    error TokenTransferError();

    constructor(address _tokenAddress) {
        owner = msg.sender;
        token = IERC20(_tokenAddress);
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert OnlyOwnerError();
        _;
    }

    function addUser(address user, bytes32 merkleRoot) external onlyOwner {
        users[user].merkleRoot = merkleRoot;
        users[user].isEligible = true;
    }

    function removeUser(address user) external onlyOwner {
        users[user].isEligible = false;
    }

    function distributeTokens(
        address user,
        uint256 amount,
        bytes32[] calldata proof
    ) external {
        User storage userData = users[user];
        if (!userData.isEligible) revert UserNotEligibleError();
        if (!verifyProof(user, amount, proof, userData.merkleRoot)) revert InvalidProofError();
        if (!token.transfer(user, amount)) revert TokenTransferError();
    }

    function verifyProof(
        address user,
        uint256 amount,
        bytes32[] calldata proof,
        bytes32 userMerkleRoot
    ) internal pure returns (bool) {
        bytes32 node = keccak256(abi.encodePacked(user, amount));
        bytes32 computedHash = node;

        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];

            if (computedHash < proofElement) {
                computedHash = keccak256(abi.encodePacked(computedHash, proofElement));
            } else {
                computedHash = keccak256(abi.encodePacked(proofElement, computedHash));
            }
        }

        return computedHash == userMerkleRoot;
    }
}
