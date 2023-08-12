// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract ZKAIToken is ERC20, ERC20Burnable, Ownable {
    mapping(bytes32 => bool) public whitelist;
    mapping(bytes32 => string) public adKeys;
    uint256 public tokenPool = 1000000 * 10 ** decimals();

    constructor() ERC20("ZKAIToken", "ZKAI") {
        _mint(msg.sender, tokenPool);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Ad Targeting logic
    function adTargeting(bytes32 hashedID) public view returns (string memory) {
        console.log("Receiving hashed ID");
        // check if ID is in the list of whitelisted IDS
        if (whitelist[hashedID]) {
            console.log("ID is in whitelist, returning true");
        } else {
            console.log("ID is not in whitelist, returning false");
            return "";
        }
        // Pass ID into a hash map to retrieve ad targeting key
        string memory adKey = adKeys[hashedID];
        console.log("Returning ad targeting key", adKey);
        // return ad targeting key
        return adKey;
    }

    // Pay ad user with token when ad is swiped on phone app
    function payUserForAdSwipe(address user, bool swipedRight) public onlyOwner {
        console.log("Receiving event that target ad was swiped");
        // track whether user swiped right or left
        if (swipedRight) {
            console.log("User swiped right");
        } else {
            console.log("User swiped left");
        }
        // send token to user from existing token pool
        uint256 paymentAmount = 100 * 10 ** decimals(); // Example amount
        _transfer(address(this), user, paymentAmount);
        console.log("Sent token to user", paymentAmount);
        // update token pool
        tokenPool -= paymentAmount;
        console.log("Updated token pool", tokenPool);
        // update user token balance
        console.log("Updated user token balance", balanceOf(user));
        // update ad token balance
        console.log("Updated ad token balance", balanceOf(address(this)));
    }

    function addToWhitelist(bytes32 hashedID) public onlyOwner {
        whitelist[hashedID] = true;
    }

    function addAdKey(bytes32 hashedID, string memory adKey) public onlyOwner {
        adKeys[hashedID] = adKey;
    }
}
