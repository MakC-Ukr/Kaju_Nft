// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './contracts/ERC721.sol';
import './contracts/ERC721Enumerable.sol';

contract Kaju is ERC721Enumerable
{
    uint private MAX_QTY_PER_ADDRESS = 20;
    uint public MAX_TOTAL_CONTRACT_SUPPLY = 999;
    mapping  (address => uint) public publicSalesMinterToTokenQty ;
    // mint price : 0.01 ETH
    uint private PRICE_FOR_MINTING = 10000000000000000; 
    uint public totalMinted = 1;

    // Kaju_ltd, KJU
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        totalMinted++;
        _safeMint(msg.sender, totalMinted-1);
    }


    function publicMintingFunction(uint _mintQty) public payable  // 
    {
        require(publicSalesMinterToTokenQty[msg.sender] + _mintQty <= MAX_QTY_PER_ADDRESS, "Exceed max mint per minter" );
        require(msg.value >= _mintQty * PRICE_FOR_MINTING, "Insufficient ETH");
        require(tx.origin == msg.sender, "Contracts not allowed");

        publicSalesMinterToTokenQty[msg.sender] += _mintQty;

        for (uint256 i = 0; i < _mintQty; i++) {
            totalMinted++;
            _safeMint(msg.sender, totalMinted-1);
        }
    }




}