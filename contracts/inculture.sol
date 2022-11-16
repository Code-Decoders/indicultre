// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract INDICultre is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("INDICultre", "ART") {}

    function mint(string memory tokenURI)
        onlyOwner
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(address(this), newItemId);
        _setTokenURI(newItemId, tokenURI);
        _tokenIds.increment();
        return newItemId;
    }

    struct Auction {
        uint32 tokenId;
        address seller;
        address bidder;
        uint256 bidAmount;
        uint256 endTimestamp; 
    }

    mapping(uint256 => Auction) public auctions;

    uint public constant MINIMUM_BIDDING_PRICE = 0.1 ether;

    function startAuction(uint32 tokenId) public onlyOwner{
        Auction memory auction = Auction(
            tokenId,
            msg.sender,
            address(0),
            MINIMUM_BIDDING_PRICE,
            block.timestamp + 2 minutes
        );
        auctions[tokenId] = auction;
    }

    function bid(uint32 tokenId) external payable {
        require(block.timestamp < auctions[tokenId].endTimestamp, "Auction has been ended");
        require(msg.value > auctions[tokenId].bidAmount, "Value sent is less than current bid");

        if(auctions[tokenId].bidder != address(0)){
            bool sent = payable(auctions[tokenId].bidder).send(auctions[tokenId].bidAmount);
            require(sent, "Failed to send Ether");
        }

        auctions[tokenId].bidder = msg.sender;
        auctions[tokenId].bidAmount = msg.value;
    }

    function collect(uint32 tokenId) external {
        require(msg.sender == auctions[tokenId].bidder, "Not highest bidder");
        require(block.timestamp > auctions[tokenId].endTimestamp, "Auction is not over yet");

        _transfer(address(this), msg.sender, tokenId);
    }
}