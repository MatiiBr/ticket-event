/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DefaultEventTickets,
  DefaultEventTicketsInterface,
} from "../DefaultEventTickets";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_totalTickets",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ticketPrice",
        type: "uint256",
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
        name: "purchaser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketsPurchased",
        type: "uint256",
      },
    ],
    name: "LogBuyTickets",
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
        indexed: false,
        internalType: "uint256",
        name: "balanceTransfered",
        type: "uint256",
      },
    ],
    name: "LogEndSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "refundRequester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketsRefunded",
        type: "uint256",
      },
    ],
    name: "LogGetRefund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "buyTickets",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "endSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "getBuyerTicketCount",
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
        name: "toRefund",
        type: "uint256",
      },
    ],
    name: "getRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "readEvent",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "website",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalTickets",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sales",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a7338038062001a7383398181016040528101906200003791906200056d565b620000576200004b620000da60201b60201c565b620000e260201b60201c565b6200006833620001a660201b60201c565b836001600001908051906020019062000083929190620002e5565b50826001800190805190602001906200009e929190620002e5565b50816001600201819055508060016004018190555060018060060160006101000a81548160ff021916908315150217905550505050506200079d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001b6620000da60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001dc620002bc60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000235576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200022c906200067e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200029f9062000716565b60405180910390fd5b620002b981620000e260201b60201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b828054620002f39062000767565b90600052602060002090601f01602090048101928262000317576000855562000363565b82601f106200033257805160ff191683800117855562000363565b8280016001018555821562000363579182015b828111156200036257825182559160200191906001019062000345565b5b50905062000372919062000376565b5090565b5b808211156200039157600081600090555060010162000377565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003fe82620003b3565b810181811067ffffffffffffffff8211171562000420576200041f620003c4565b5b80604052505050565b60006200043562000395565b9050620004438282620003f3565b919050565b600067ffffffffffffffff821115620004665762000465620003c4565b5b6200047182620003b3565b9050602081019050919050565b60005b838110156200049e57808201518184015260208101905062000481565b83811115620004ae576000848401525b50505050565b6000620004cb620004c58462000448565b62000429565b905082815260208101848484011115620004ea57620004e9620003ae565b5b620004f78482856200047e565b509392505050565b600082601f830112620005175762000516620003a9565b5b815162000529848260208601620004b4565b91505092915050565b6000819050919050565b620005478162000532565b81146200055357600080fd5b50565b60008151905062000567816200053c565b92915050565b600080600080608085870312156200058a57620005896200039f565b5b600085015167ffffffffffffffff811115620005ab57620005aa620003a4565b5b620005b987828801620004ff565b945050602085015167ffffffffffffffff811115620005dd57620005dc620003a4565b5b620005eb87828801620004ff565b9350506040620005fe8782880162000556565b9250506060620006118782880162000556565b91505092959194509250565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620006666020836200061d565b915062000673826200062e565b602082019050919050565b60006020820190508181036000830152620006998162000657565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000620006fe6026836200061d565b91506200070b82620006a0565b604082019050919050565b600060208201905081810360008301526200073181620006ef565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200078057607f821691505b6020821081141562000797576200079662000738565b5b50919050565b6112c680620007ad6000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b146100f9578063d2f0be9914610124578063edfb91671461014d578063f2fde38b1461018a5761007b565b806305aea97c146100805780632f366637146100af578063380d831b146100cb578063715018a6146100e2575b600080fd5b34801561008c57600080fd5b506100956101b3565b6040516100a6959493929190610c27565b60405180910390f35b6100c960048036038101906100c49190610cb9565b61030c565b005b3480156100d757600080fd5b506100e0610563565b005b3480156100ee57600080fd5b506100f76106a8565b005b34801561010557600080fd5b5061010e610730565b60405161011b9190610d27565b60405180910390f35b34801561013057600080fd5b5061014b60048036038101906101469190610cb9565b610759565b005b34801561015957600080fd5b50610174600480360381019061016f9190610d6e565b61094a565b6040516101819190610d9b565b60405180910390f35b34801561019657600080fd5b506101b160048036038101906101ac9190610d6e565b610996565b005b6060806000806000600160000160018001600160020154600160030154600160060160009054906101000a900460ff168480546101ef90610de5565b80601f016020809104026020016040519081016040528092919081815260200182805461021b90610de5565b80156102685780601f1061023d57610100808354040283529160200191610268565b820191906000526020600020905b81548152906001019060200180831161024b57829003601f168201915b5050505050945083805461027b90610de5565b80601f01602080910402602001604051908101604052809291908181526020018280546102a790610de5565b80156102f45780601f106102c9576101008083540402835291602001916102f4565b820191906000526020600020905b8154815290600101906020018083116102d757829003601f168201915b50505050509350945094509450945094509091929394565b60011515600160060160009054906101000a900460ff16151514610365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035c90610e63565b60405180910390fd5b600160040154816103769190610eb2565b3410156103b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103af90610f7e565b60405180910390fd5b806001600301546001600201546103cf9190610f9e565b1015610410576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104079061101e565b60405180910390fd5b80600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610462919061103e565b92505081905550806001600301600082825461047e919061103e565b92505081905550806001600201600082825461049a9190610f9e565b925050819055506000600160040154826104b49190610eb2565b905080341115610511573373ffffffffffffffffffffffffffffffffffffffff166108fc82346104e49190610f9e565b9081150290604051600060405180830381858888f1935050505015801561050f573d6000803e3d6000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff167f72240c1be87ee789414e12fc30844d39a55d1eaf3b8741489fe381ad2b6cdd47836040516105579190610d9b565b60405180910390a25050565b61056b610a8e565b73ffffffffffffffffffffffffffffffffffffffff16610589610730565b73ffffffffffffffffffffffffffffffffffffffff16146105df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d6906110e0565b60405180910390fd5b6000600160060160006101000a81548160ff021916908315150217905550600047905061060a610730565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561064f573d6000803e3d6000fd5b50610658610730565b73ffffffffffffffffffffffffffffffffffffffff167f21e7b2f8578199ba3904a63b7cd799784c8cadde57dde563a7de95ef792e256c8260405161069d9190610d9b565b60405180910390a250565b6106b0610a8e565b73ffffffffffffffffffffffffffffffffffffffff166106ce610730565b73ffffffffffffffffffffffffffffffffffffffff1614610724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071b906110e0565b60405180910390fd5b61072e6000610a96565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d69061114c565b60405180910390fd5b60008111610822576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610819906111de565b60405180910390fd5b6000600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806001600301600082825461087f9190610f9e565b92505081905550806001600201600082825461089b919061103e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc600160040154836108cd9190610eb2565b9081150290604051600060405180830381858888f193505050501580156108f8573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f492e1d962a477f77890c7cfdb563d7ddc58fee6505741794fa5700ada3c160418260405161093f9190610d9b565b60405180910390a250565b6000600160050160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61099e610a8e565b73ffffffffffffffffffffffffffffffffffffffff166109bc610730565b73ffffffffffffffffffffffffffffffffffffffff1614610a12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a09906110e0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7990611270565b60405180910390fd5b610a8b81610a96565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b94578082015181840152602081019050610b79565b83811115610ba3576000848401525b50505050565b6000601f19601f8301169050919050565b6000610bc582610b5a565b610bcf8185610b65565b9350610bdf818560208601610b76565b610be881610ba9565b840191505092915050565b6000819050919050565b610c0681610bf3565b82525050565b60008115159050919050565b610c2181610c0c565b82525050565b600060a0820190508181036000830152610c418188610bba565b90508181036020830152610c558187610bba565b9050610c646040830186610bfd565b610c716060830185610bfd565b610c7e6080830184610c18565b9695505050505050565b600080fd5b610c9681610bf3565b8114610ca157600080fd5b50565b600081359050610cb381610c8d565b92915050565b600060208284031215610ccf57610cce610c88565b5b6000610cdd84828501610ca4565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d1182610ce6565b9050919050565b610d2181610d06565b82525050565b6000602082019050610d3c6000830184610d18565b92915050565b610d4b81610d06565b8114610d5657600080fd5b50565b600081359050610d6881610d42565b92915050565b600060208284031215610d8457610d83610c88565b5b6000610d9284828501610d59565b91505092915050565b6000602082019050610db06000830184610bfd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dfd57607f821691505b60208210811415610e1157610e10610db6565b5b50919050565b7f4576656e7420636c6f7365640000000000000000000000000000000000000000600082015250565b6000610e4d600c83610b65565b9150610e5882610e17565b602082019050919050565b60006020820190508181036000830152610e7c81610e40565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ebd82610bf3565b9150610ec883610bf3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f0157610f00610e83565b5b828202905092915050565b7f46756e6473206e6f7420656e6f75676820746f2062757920746865207469636b60008201527f6574730000000000000000000000000000000000000000000000000000000000602082015250565b6000610f68602383610b65565b9150610f7382610f0c565b604082019050919050565b60006020820190508181036000830152610f9781610f5b565b9050919050565b6000610fa982610bf3565b9150610fb483610bf3565b925082821015610fc757610fc6610e83565b5b828203905092915050565b7f546f74616c207469636b657473206c657373207468616e207175616e74697479600082015250565b6000611008602083610b65565b915061101382610fd2565b602082019050919050565b6000602082019050818103600083015261103781610ffb565b9050919050565b600061104982610bf3565b915061105483610bf3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561108957611088610e83565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006110ca602083610b65565b91506110d582611094565b602082019050919050565b600060208201905081810360008301526110f9816110bd565b9050919050565b7f4e6f74205469636b657473000000000000000000000000000000000000000000600082015250565b6000611136600b83610b65565b915061114182611100565b602082019050919050565b6000602082019050818103600083015261116581611129565b9050919050565b7f5469636b657473207175616e74697479206d757374206265206772656174657260008201527f207468616e203000000000000000000000000000000000000000000000000000602082015250565b60006111c8602783610b65565b91506111d38261116c565b604082019050919050565b600060208201905081810360008301526111f7816111bb565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061125a602683610b65565b9150611265826111fe565b604082019050919050565b600060208201905081810360008301526112898161124d565b905091905056fea264697066735822122078f2b7402a9d312b890ff516b4ac897b9c98d76d4fdabef27739f2230d6513fc64736f6c634300080b0033";

export class DefaultEventTickets__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _description: string,
    _url: string,
    _totalTickets: BigNumberish,
    _ticketPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DefaultEventTickets> {
    return super.deploy(
      _description,
      _url,
      _totalTickets,
      _ticketPrice,
      overrides || {}
    ) as Promise<DefaultEventTickets>;
  }
  getDeployTransaction(
    _description: string,
    _url: string,
    _totalTickets: BigNumberish,
    _ticketPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _description,
      _url,
      _totalTickets,
      _ticketPrice,
      overrides || {}
    );
  }
  attach(address: string): DefaultEventTickets {
    return super.attach(address) as DefaultEventTickets;
  }
  connect(signer: Signer): DefaultEventTickets__factory {
    return super.connect(signer) as DefaultEventTickets__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefaultEventTicketsInterface {
    return new utils.Interface(_abi) as DefaultEventTicketsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultEventTickets {
    return new Contract(address, _abi, signerOrProvider) as DefaultEventTickets;
  }
}
