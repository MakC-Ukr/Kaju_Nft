import React, { Component } from "react";
import "./App.css";
import { ethers } from "ethers";
// abi copied directly from Remix

const abi=[{
  inputs: [
    {
      internalType: "string",
      name: "_name",
      type: "string",
    },
    {
      internalType: "string",
      name: "_symbol",
      type: "string",
    },
  ],
  stateMutability: "nonpayable",
  type: "constructor",
},
{
  anonymous: false,
  inputs: [
    {
      indexed: true,
      internalType: "address",
      name: "owner",
      type: "address",
    },
    {
      indexed: true,
      internalType: "address",
      name: "approved",
      type: "address",
    },
    {
      indexed: true,
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "Approval",
  type: "event",
},
{
  anonymous: false,
  inputs: [
    {
      indexed: true,
      internalType: "address",
      name: "owner",
      type: "address",
    },
    {
      indexed: true,
      internalType: "address",
      name: "operator",
      type: "address",
    },
    {
      indexed: false,
      internalType: "bool",
      name: "approved",
      type: "bool",
    },
  ],
  name: "ApprovalForAll",
  type: "event",
},
{
  anonymous: false,
  inputs: [
    {
      indexed: true,
      internalType: "address",
      name: "from",
      type: "address",
    },
    {
      indexed: true,
      internalType: "address",
      name: "to",
      type: "address",
    },
    {
      indexed: true,
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "Transfer",
  type: "event",
},
{
  inputs: [],
  name: "MAX_TOTAL_CONTRACT_SUPPLY",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "to",
      type: "address",
    },
    {
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "approve",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "owner",
      type: "address",
    },
  ],
  name: "balanceOf",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "getApproved",
  outputs: [
    {
      internalType: "address",
      name: "",
      type: "address",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "owner",
      type: "address",
    },
    {
      internalType: "address",
      name: "operator",
      type: "address",
    },
  ],
  name: "isApprovedForAll",
  outputs: [
    {
      internalType: "bool",
      name: "",
      type: "bool",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [],
  name: "name",
  outputs: [
    {
      internalType: "string",
      name: "",
      type: "string",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "ownerOf",
  outputs: [
    {
      internalType: "address",
      name: "",
      type: "address",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "uint256",
      name: "_mintQty",
      type: "uint256",
    },
  ],
  name: "publicMintingFunction",
  outputs: [],
  stateMutability: "payable",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "",
      type: "address",
    },
  ],
  name: "publicSalesMinterToTokenQty",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "from",
      type: "address",
    },
    {
      internalType: "address",
      name: "to",
      type: "address",
    },
    {
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "safeTransferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "from",
      type: "address",
    },
    {
      internalType: "address",
      name: "to",
      type: "address",
    },
    {
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
    {
      internalType: "bytes",
      name: "_data",
      type: "bytes",
    },
  ],
  name: "safeTransferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "operator",
      type: "address",
    },
    {
      internalType: "bool",
      name: "approved",
      type: "bool",
    },
  ],
  name: "setApprovalForAll",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
},
{
  inputs: [
    {
      internalType: "bytes4",
      name: "interfaceId",
      type: "bytes4",
    },
  ],
  name: "supportsInterface",
  outputs: [
    {
      internalType: "bool",
      name: "",
      type: "bool",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [],
  name: "symbol",
  outputs: [
    {
      internalType: "string",
      name: "",
      type: "string",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "uint256",
      name: "index",
      type: "uint256",
    },
  ],
  name: "tokenByIndex",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "owner",
      type: "address",
    },
    {
      internalType: "uint256",
      name: "index",
      type: "uint256",
    },
  ],
  name: "tokenOfOwnerByIndex",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "tokenURI",
  outputs: [
    {
      internalType: "string",
      name: "",
      type: "string",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [],
  name: "totalMinted",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [],
  name: "totalSupply",
  outputs: [
    {
      internalType: "uint256",
      name: "",
      type: "uint256",
    },
  ],
  stateMutability: "view",
  type: "function",
},
{
  inputs: [
    {
      internalType: "address",
      name: "from",
      type: "address",
    },
    {
      internalType: "address",
      name: "to",
      type: "address",
    },
    {
      internalType: "uint256",
      name: "tokenId",
      type: "uint256",
    },
  ],
  name: "transferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
},
];
const contractAddress = '0x5A2d802ebA5ECeAD46ee7514AD9454F1e515F1bF';

class App extends Component {
  constructor(props) {
    super(props);
    const ls = [
      {
        id: 1,
        name: "Dog1",
        description:
          "Collection of cute photos of a man's best friend - doggo xD.",
        image:
          "https://gateway.pinata.cloud/ipfs/QmUFbD7x4L74xDa1jDKaKtnEcXKSCDdqsMS5RRbp8Z7KMG/1.jpg",
      },
      {
        id: 2,
        name: "Dog2",
        description:
          "Collection of cute photos of a man's best friend - doggo xD.",
        image:
          "https://gateway.pinata.cloud/ipfs/QmUFbD7x4L74xDa1jDKaKtnEcXKSCDdqsMS5RRbp8Z7KMG/2.jpg",
      },
      {
        id: 3,
        name: "Dog3",
        description:
          "Collection of cute photos of a man's best friend - doggo xD.",
        image:
          "https://gateway.pinata.cloud/ipfs/QmUFbD7x4L74xDa1jDKaKtnEcXKSCDdqsMS5RRbp8Z7KMG/3.jpg",
      },
    ];

    // let signer = null;

    this.state = {
      list: ls,
      boolWalletConnected: false,
      boolShowWalletNotConnectedError: false,
      boolContractInstantiated : false,
      mintQuantity : 1,
      signer: null,
    };

    this.onHide = this.onHide.bind(this);
    this.onMint = this.onMint.bind(this);
    this.onClickFunc = this.onClickFunc.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onHide = (name) => {
    this.setState({
      list: this.state.list.filter((item) => item.name !== name),
    });
  };


  onMint = async function () {
    if (!this.state.boolContractInstantiated) {
      this.setState({ boolShowWalletNotConnectedError: true });
      return;
    }
    const mintQty = this.state.mintQuantity;
    const overrides = {
      value: String(mintQty * ethers.utils.parseEther("0.2")),
      gasLimit: 3000000 //optional
    }
    await this.contractInstance.publicMintingFunction(mintQty, overrides);
    console.log("minted " , mintQty, " NFTs");
  };

  onClickFunc = async function () {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    this.setState({
      boolWalletConnected: true,
      boolShowWalletNotConnectedError: false,
      boolContractInstantiated: true,
      signer : signer
    });
    this.contractInstance = new ethers.Contract(
      contractAddress,
      abi,
      signer
    );
    console.log("account connected : ", await signer.getAddress());
  };

  handleChange = function(event) {
    this.setState(
      {mintQuantity:event.target.value}
    );
  }

  render() {
    return (
      <div>
        <h3>
          Some example NFT's :
          <button type="button" onClick={this.onClickFunc}>
            {this.state.boolWalletConnected ? "Connected" : "Connect Wallet"}
          </button>
        </h3>
        <div>
          {this.state.list.map((item) => (
            <div key={item.id}>
              <a href="https://www.google.com/">
                {item.name}:<br />
              </a>
              <img 
              src={item.image}
              width="10%" height="10%"
              alt = "new"
              />
              <br/>
              {item.description}
              {/* <span>{item.image}</span> */}
              <button
                onClick={() => {
                  this.onHide(item.name);
                }}
                type="button"
              >
                Hide
              </button>

              <p></p>
            </div>
          ))}
        </div>

        <div>
          Mint Quantity : 
          <input style={{width: '50px'}} type = "number" value={this.state.mintQuantity} onChange={this.handleChange}/>
          <button onClick={this.onMint} type="button">
            Mint !
          </button>
          <div className="error">
            {this.state.boolShowWalletNotConnectedError
              ? "You need to connect your wallet first !"
              : ""}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
