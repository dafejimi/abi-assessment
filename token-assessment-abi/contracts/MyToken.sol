// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { ReentrancyGuard } from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract MyToken is ERC20, ReentrancyGuard {
    // uint256 public _totalSupply;
    
    // string private _name;
    // string private _symbol;

    // mapping(address account => uint256) private _balances; 

    constructor(string memory _name_, string memory _symbol_,uint256 _totalSupply_) ERC20(_name_, _symbol_) {
        _mint(msg.sender, _totalSupply_);
    }

    function _approve(address spender, uint256 value) public {
        approve(spender, value);
    }

    function _transfer(address account, uint256 amount) public nonReentrant {
        transfer(account, amount);
    }
    
    function _transferFrom(address from, address to, uint256 value) public nonReentrant {
        transferFrom(from, to, value);
    }

    function _balanceOf(address account) public view returns (uint256) {
        return balanceOf(account);
    }

    function _name() public view returns (string memory) {
        return name();
    }
    
    function _symbol() public view returns (string memory) {
        return symbol();
    }
}
