/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EventFactory, EventFactoryInterface } from "../EventFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract EventTickets",
        name: "eventTickets",
        type: "address",
      },
    ],
    name: "addEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getEvent",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address",
            name: "manager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "contract EventTickets",
            name: "eventTickets",
            type: "address",
          },
        ],
        internalType: "struct EventFactory.EventData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "quantity",
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
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b506128f0806100246000396000f3fe60806040523480156200001157600080fd5b5060043610620000525760003560e01c806317fc45e214620000575780636d1884e01462000079578063bce062b914620000af578063c7ae745114620000cf575b600080fd5b62000061620000ef565b60405162000070919062000620565b60405180910390f35b62000097600480360381019062000091919062000682565b620000f5565b604051620000a6919062000884565b60405180910390f35b620000cd6004803603810190620000c79190620009f9565b62000274565b005b620000ed6004803603810190620000e7919062000aee565b62000394565b005b60005481565b620000ff620004f3565b600160008381526020019081526020016000206040518060800160405290816000820180546200012f9062000b4f565b80601f01602080910402602001604051908101604052809291908181526020018280546200015d9062000b4f565b8015620001ae5780601f106200018257610100808354040283529160200191620001ae565b820191906000526020600020905b8154815290600101906020018083116200019057829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60006001600080548152602001908152602001600020905084816000019080519060200190620002a692919062000547565b50338160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160020181905550848484846040516200030590620005d8565b62000314949392919062000bd7565b604051809103906000f08015801562000331573d6000803e3d6000fd5b508160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080815480929190620003889062000c61565b91905055505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff166305aea97c6040518163ffffffff1660e01b8152600401600060405180830381865afa158015620003e2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906200040d919062000d81565b505050509050600060016000805481526020019081526020016000209050818160000190805190602001906200044592919062000547565b50338160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160020181905550828160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080815480929190620004e99062000c61565b9190505550505050565b604051806080016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054620005559062000b4f565b90600052602060002090601f016020900481019282620005795760008555620005c5565b82601f106200059457805160ff1916838001178555620005c5565b82800160010185558215620005c5579182015b82811115620005c4578251825591602001919060010190620005a7565b5b509050620005d49190620005e6565b5090565b611a738062000e4883390190565b5b8082111562000601576000816000905550600101620005e7565b5090565b6000819050919050565b6200061a8162000605565b82525050565b60006020820190506200063760008301846200060f565b92915050565b6000604051905090565b600080fd5b600080fd5b6200065c8162000605565b81146200066857600080fd5b50565b6000813590506200067c8162000651565b92915050565b6000602082840312156200069b576200069a62000647565b5b6000620006ab848285016200066b565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620006f0578082015181840152602081019050620006d3565b8381111562000700576000848401525b50505050565b6000601f19601f8301169050919050565b60006200072482620006b4565b620007308185620006bf565b935062000742818560208601620006d0565b6200074d8162000706565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620007858262000758565b9050919050565b620007978162000778565b82525050565b620007a88162000605565b82525050565b6000819050919050565b6000620007d9620007d3620007cd8462000758565b620007ae565b62000758565b9050919050565b6000620007ed82620007b8565b9050919050565b60006200080182620007e0565b9050919050565b6200081381620007f4565b82525050565b6000608083016000830151848203600086015262000838828262000717565b91505060208301516200084f60208601826200078c565b5060408301516200086460408601826200079d565b50606083015162000879606086018262000808565b508091505092915050565b60006020820190508181036000830152620008a0818462000819565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620008ec8262000706565b810181811067ffffffffffffffff821117156200090e576200090d620008b2565b5b80604052505050565b6000620009236200063d565b9050620009318282620008e1565b919050565b600067ffffffffffffffff821115620009545762000953620008b2565b5b6200095f8262000706565b9050602081019050919050565b82818337600083830152505050565b6000620009926200098c8462000936565b62000917565b905082815260208101848484011115620009b157620009b0620008ad565b5b620009be8482856200096c565b509392505050565b600082601f830112620009de57620009dd620008a8565b5b8135620009f08482602086016200097b565b91505092915050565b6000806000806080858703121562000a165762000a1562000647565b5b600085013567ffffffffffffffff81111562000a375762000a366200064c565b5b62000a4587828801620009c6565b945050602085013567ffffffffffffffff81111562000a695762000a686200064c565b5b62000a7787828801620009c6565b935050604062000a8a878288016200066b565b925050606062000a9d878288016200066b565b91505092959194509250565b600062000ab68262000778565b9050919050565b62000ac88162000aa9565b811462000ad457600080fd5b50565b60008135905062000ae88162000abd565b92915050565b60006020828403121562000b075762000b0662000647565b5b600062000b178482850162000ad7565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000b6857607f821691505b6020821081141562000b7f5762000b7e62000b20565b5b50919050565b600082825260208201905092915050565b600062000ba382620006b4565b62000baf818562000b85565b935062000bc1818560208601620006d0565b62000bcc8162000706565b840191505092915050565b6000608082019050818103600083015262000bf3818762000b96565b9050818103602083015262000c09818662000b96565b905062000c1a60408301856200060f565b62000c2960608301846200060f565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000c6e8262000605565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000ca45762000ca362000c32565b5b600182019050919050565b600062000cc662000cc08462000936565b62000917565b90508281526020810184848401111562000ce55762000ce4620008ad565b5b62000cf2848285620006d0565b509392505050565b600082601f83011262000d125762000d11620008a8565b5b815162000d2484826020860162000caf565b91505092915050565b60008151905062000d3e8162000651565b92915050565b60008115159050919050565b62000d5b8162000d44565b811462000d6757600080fd5b50565b60008151905062000d7b8162000d50565b92915050565b600080600080600060a0868803121562000da05762000d9f62000647565b5b600086015167ffffffffffffffff81111562000dc15762000dc06200064c565b5b62000dcf8882890162000cfa565b955050602086015167ffffffffffffffff81111562000df35762000df26200064c565b5b62000e018882890162000cfa565b945050604062000e148882890162000d2d565b935050606062000e278882890162000d2d565b925050608062000e3a8882890162000d6a565b915050929550929590935056fe60806040523480156200001157600080fd5b5060405162001a7338038062001a7383398181016040528101906200003791906200056d565b620000576200004b620000da60201b60201c565b620000e260201b60201c565b6200006833620001a660201b60201c565b836001600001908051906020019062000083929190620002e5565b50826001800190805190602001906200009e929190620002e5565b50816001600201819055508060016004018190555060018060060160006101000a81548160ff021916908315150217905550505050506200079d565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001b6620000da60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001dc620002bc60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000235576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200022c906200067e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200029f9062000716565b60405180910390fd5b620002b981620000e260201b60201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b828054620002f39062000767565b90600052602060002090601f01602090048101928262000317576000855562000363565b82601f106200033257805160ff191683800117855562000363565b8280016001018555821562000363579182015b828111156200036257825182559160200191906001019062000345565b5b50905062000372919062000376565b5090565b5b808211156200039157600081600090555060010162000377565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003fe82620003b3565b810181811067ffffffffffffffff8211171562000420576200041f620003c4565b5b80604052505050565b60006200043562000395565b9050620004438282620003f3565b919050565b600067ffffffffffffffff821115620004665762000465620003c4565b5b6200047182620003b3565b9050602081019050919050565b60005b838110156200049e57808201518184015260208101905062000481565b83811115620004ae576000848401525b50505050565b6000620004cb620004c58462000448565b62000429565b905082815260208101848484011115620004ea57620004e9620003ae565b5b620004f78482856200047e565b509392505050565b600082601f830112620005175762000516620003a9565b5b815162000529848260208601620004b4565b91505092915050565b6000819050919050565b620005478162000532565b81146200055357600080fd5b50565b60008151905062000567816200053c565b92915050565b600080600080608085870312156200058a57620005896200039f565b5b600085015167ffffffffffffffff811115620005ab57620005aa620003a4565b5b620005b987828801620004ff565b945050602085015167ffffffffffffffff811115620005dd57620005dc620003a4565b5b620005eb87828801620004ff565b9350506040620005fe8782880162000556565b9250506060620006118782880162000556565b91505092959194509250565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620006666020836200061d565b915062000673826200062e565b602082019050919050565b60006020820190508181036000830152620006998162000657565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000620006fe6026836200061d565b91506200070b82620006a0565b604082019050919050565b600060208201905081810360008301526200073181620006ef565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200078057607f821691505b6020821081141562000797576200079662000738565b5b50919050565b6112c680620007ad6000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b146100f9578063d2f0be9914610124578063edfb91671461014d578063f2fde38b1461018a5761007b565b806305aea97c146100805780632f366637146100af578063380d831b146100cb578063715018a6146100e2575b600080fd5b34801561008c57600080fd5b506100956101b3565b6040516100a6959493929190610c27565b60405180910390f35b6100c960048036038101906100c49190610cb9565b61030c565b005b3480156100d757600080fd5b506100e0610563565b005b3480156100ee57600080fd5b506100f76106a8565b005b34801561010557600080fd5b5061010e610730565b60405161011b9190610d27565b60405180910390f35b34801561013057600080fd5b5061014b60048036038101906101469190610cb9565b610759565b005b34801561015957600080fd5b50610174600480360381019061016f9190610d6e565b61094a565b6040516101819190610d9b565b60405180910390f35b34801561019657600080fd5b506101b160048036038101906101ac9190610d6e565b610996565b005b6060806000806000600160000160018001600160020154600160030154600160060160009054906101000a900460ff168480546101ef90610de5565b80601f016020809104026020016040519081016040528092919081815260200182805461021b90610de5565b80156102685780601f1061023d57610100808354040283529160200191610268565b820191906000526020600020905b81548152906001019060200180831161024b57829003601f168201915b5050505050945083805461027b90610de5565b80601f01602080910402602001604051908101604052809291908181526020018280546102a790610de5565b80156102f45780601f106102c9576101008083540402835291602001916102f4565b820191906000526020600020905b8154815290600101906020018083116102d757829003601f168201915b50505050509350945094509450945094509091929394565b60011515600160060160009054906101000a900460ff16151514610365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035c90610e63565b60405180910390fd5b600160040154816103769190610eb2565b3410156103b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103af90610f7e565b60405180910390fd5b806001600301546001600201546103cf9190610f9e565b1015610410576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104079061101e565b60405180910390fd5b80600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610462919061103e565b92505081905550806001600301600082825461047e919061103e565b92505081905550806001600201600082825461049a9190610f9e565b925050819055506000600160040154826104b49190610eb2565b905080341115610511573373ffffffffffffffffffffffffffffffffffffffff166108fc82346104e49190610f9e565b9081150290604051600060405180830381858888f1935050505015801561050f573d6000803e3d6000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff167f72240c1be87ee789414e12fc30844d39a55d1eaf3b8741489fe381ad2b6cdd47836040516105579190610d9b565b60405180910390a25050565b61056b610a8e565b73ffffffffffffffffffffffffffffffffffffffff16610589610730565b73ffffffffffffffffffffffffffffffffffffffff16146105df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d6906110e0565b60405180910390fd5b6000600160060160006101000a81548160ff021916908315150217905550600047905061060a610730565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561064f573d6000803e3d6000fd5b50610658610730565b73ffffffffffffffffffffffffffffffffffffffff167f21e7b2f8578199ba3904a63b7cd799784c8cadde57dde563a7de95ef792e256c8260405161069d9190610d9b565b60405180910390a250565b6106b0610a8e565b73ffffffffffffffffffffffffffffffffffffffff166106ce610730565b73ffffffffffffffffffffffffffffffffffffffff1614610724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071b906110e0565b60405180910390fd5b61072e6000610a96565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d69061114c565b60405180910390fd5b60008111610822576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610819906111de565b60405180910390fd5b6000600160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806001600301600082825461087f9190610f9e565b92505081905550806001600201600082825461089b919061103e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc600160040154836108cd9190610eb2565b9081150290604051600060405180830381858888f193505050501580156108f8573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f492e1d962a477f77890c7cfdb563d7ddc58fee6505741794fa5700ada3c160418260405161093f9190610d9b565b60405180910390a250565b6000600160050160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61099e610a8e565b73ffffffffffffffffffffffffffffffffffffffff166109bc610730565b73ffffffffffffffffffffffffffffffffffffffff1614610a12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a09906110e0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7990611270565b60405180910390fd5b610a8b81610a96565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b94578082015181840152602081019050610b79565b83811115610ba3576000848401525b50505050565b6000601f19601f8301169050919050565b6000610bc582610b5a565b610bcf8185610b65565b9350610bdf818560208601610b76565b610be881610ba9565b840191505092915050565b6000819050919050565b610c0681610bf3565b82525050565b60008115159050919050565b610c2181610c0c565b82525050565b600060a0820190508181036000830152610c418188610bba565b90508181036020830152610c558187610bba565b9050610c646040830186610bfd565b610c716060830185610bfd565b610c7e6080830184610c18565b9695505050505050565b600080fd5b610c9681610bf3565b8114610ca157600080fd5b50565b600081359050610cb381610c8d565b92915050565b600060208284031215610ccf57610cce610c88565b5b6000610cdd84828501610ca4565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d1182610ce6565b9050919050565b610d2181610d06565b82525050565b6000602082019050610d3c6000830184610d18565b92915050565b610d4b81610d06565b8114610d5657600080fd5b50565b600081359050610d6881610d42565b92915050565b600060208284031215610d8457610d83610c88565b5b6000610d9284828501610d59565b91505092915050565b6000602082019050610db06000830184610bfd565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dfd57607f821691505b60208210811415610e1157610e10610db6565b5b50919050565b7f4576656e7420636c6f7365640000000000000000000000000000000000000000600082015250565b6000610e4d600c83610b65565b9150610e5882610e17565b602082019050919050565b60006020820190508181036000830152610e7c81610e40565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ebd82610bf3565b9150610ec883610bf3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f0157610f00610e83565b5b828202905092915050565b7f46756e6473206e6f7420656e6f75676820746f2062757920746865207469636b60008201527f6574730000000000000000000000000000000000000000000000000000000000602082015250565b6000610f68602383610b65565b9150610f7382610f0c565b604082019050919050565b60006020820190508181036000830152610f9781610f5b565b9050919050565b6000610fa982610bf3565b9150610fb483610bf3565b925082821015610fc757610fc6610e83565b5b828203905092915050565b7f546f74616c207469636b657473206c657373207468616e207175616e74697479600082015250565b6000611008602083610b65565b915061101382610fd2565b602082019050919050565b6000602082019050818103600083015261103781610ffb565b9050919050565b600061104982610bf3565b915061105483610bf3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561108957611088610e83565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006110ca602083610b65565b91506110d582611094565b602082019050919050565b600060208201905081810360008301526110f9816110bd565b9050919050565b7f4e6f74205469636b657473000000000000000000000000000000000000000000600082015250565b6000611136600b83610b65565b915061114182611100565b602082019050919050565b6000602082019050818103600083015261116581611129565b9050919050565b7f5469636b657473207175616e74697479206d757374206265206772656174657260008201527f207468616e203000000000000000000000000000000000000000000000000000602082015250565b60006111c8602783610b65565b91506111d38261116c565b604082019050919050565b600060208201905081810360008301526111f7816111bb565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061125a602683610b65565b9150611265826111fe565b604082019050919050565b600060208201905081810360008301526112898161124d565b905091905056fea264697066735822122078f2b7402a9d312b890ff516b4ac897b9c98d76d4fdabef27739f2230d6513fc64736f6c634300080b0033a2646970667358221220bf27f36368777dfb0e3bab21a801422a0ac907c2b40801f1fc5dfc06325e55bd64736f6c634300080b0033";

export class EventFactory__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EventFactory> {
    return super.deploy(overrides || {}) as Promise<EventFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EventFactory {
    return super.attach(address) as EventFactory;
  }
  connect(signer: Signer): EventFactory__factory {
    return super.connect(signer) as EventFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventFactoryInterface {
    return new utils.Interface(_abi) as EventFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EventFactory {
    return new Contract(address, _abi, signerOrProvider) as EventFactory;
  }
}
