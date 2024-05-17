### MY TOKEN
Here we have a simple token implementation written in solidity that impelements the ERC-20 token standard.

### Design Choices Explained

1. **Token Name and Symbol**:
   - Hardcoded in the constructor as `"MyToken"` and `"MT"` respectively, ensuring the contract initializes with these values.

2. **Initial Total Supply**:
   - 1,000,000 tokens are minted to the deployer’s address during contract deployment using the `_mint` function within the constructor.

3. **ERC-20 Standard Functions**:
   - **_approve**: Facilitates the `approve` functionality, allowing an owner to approve a spender to use a certain amount of tokens.
   - **_transfer**: A non-reentrant wrapper for the `transfer` function to send tokens to another address.
   - **_transferFrom**: A non-reentrant wrapper for the `transferFrom` function to transfer tokens on behalf of another address given sufficient allowance.
   - **_balanceOf**: Provides the balance of a given account by calling the `balanceOf` function.
   - **_name** and **_symbol**: These functions return the token’s name and symbol respectively, using the inherited `name` and `symbol` functions from the ERC20 contract.

4. **Non-Reentrancy**:
   - The `nonReentrant` modifier from the `ReentrancyGuard` contract is used in the `transferTokens` and `transferFromAccount` functions to prevent reentrancy attacks.

### Detailed Breakdown

- **Pragma Directive**:
  ```solidity
  pragma solidity ^0.8.24;
  ```
  This specifies the Solidity compiler version, ensuring compatibility with the contract’s syntax and features.

- **Import Statements**:
  ```solidity
  import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
  import { ReentrancyGuard } from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
  ```
  These import the ERC-20 standard contract and the reentrancy guard from the OpenZeppelin library.

- **Constructor**:
  ```solidity
  constructor() ERC20("MyToken", "MT") {
      _mint(msg.sender, 1000000 * 10 ** decimals());
  }
  ```
  The constructor initializes the token with the name "MyToken" and the symbol "MT", and mints the initial total supply to the deployer’s address.

- **Token Functions**:
  - `_approve`, `_transfer`, `_transferFrom`: Custom functions wrapping standard ERC-20 functions with non-reentrant protection where applicable.
  - `_balanceOf`, `_name`, `_symbol`: Utility functions to fetch token details and balances.

This contract provides a secure and standard-compliant implementation of an ERC-20 token with the specified features and initial setup.

### Deployment
- provide environment variables(sepolia rpc url and private key)
- run
    ``` bash
    npx hardhat deploy --network [network name]
    ```

### Running Scripts
- run
  ```
  npx hardhat run scripts/[script name]
  ```
