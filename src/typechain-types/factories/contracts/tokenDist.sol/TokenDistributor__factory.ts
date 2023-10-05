/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TokenDistributor,
  TokenDistributorInterface,
} from "../../../contracts/tokenDist.sol/TokenDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidProofError",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOwnerError",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenTransferError",
    type: "error",
  },
  {
    inputs: [],
    name: "UserNotEligibleError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "distributeTokens",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "removeUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isEligible",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d00380380610d008339818101604052810190610032919061011c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610149565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b610ba8806101586000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806364f42a9914610067578063776a495f146100835780638da5cb5b1461009f57806398575188146100bd578063a87430ba146100d9578063fc0c546a1461010a575b600080fd5b610081600480360381019061007c91906106e6565b610128565b005b61009d600480360381019061009891906107c1565b610253565b005b6100a7610402565b6040516100b49190610844565b60405180910390f35b6100d760048036038101906100d2919061085f565b610426565b005b6100f360048036038101906100ee919061085f565b610509565b6040516101019291906108b6565b60405180910390f35b61011261053a565b60405161011f919061093e565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101ad576040517f65b4837300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055505050565b6000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff166102de576040517f8048b63a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ef858585858560000154610560565b610325576040517f7d31e14900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86866040518363ffffffff1660e01b8152600401610382929190610968565b6020604051808303816000875af11580156103a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c591906109bd565b6103fb576040517f321eafdc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104ab576040517f65b4837300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555050565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000808686604051602001610576929190610a53565b604051602081830303815290604052805190602001209050600081905060005b868690508110156106375760008787838181106105b6576105b5610a7f565b5b905060200201359050808310156105f75782816040516020016105da929190610acf565b604051602081830303815290604052805190602001209250610623565b808360405160200161060a929190610acf565b6040516020818303038152906040528051906020012092505b50808061062f90610b2a565b915050610596565b508381149250505095945050505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061067d82610652565b9050919050565b61068d81610672565b811461069857600080fd5b50565b6000813590506106aa81610684565b92915050565b6000819050919050565b6106c3816106b0565b81146106ce57600080fd5b50565b6000813590506106e0816106ba565b92915050565b600080604083850312156106fd576106fc610648565b5b600061070b8582860161069b565b925050602061071c858286016106d1565b9150509250929050565b6000819050919050565b61073981610726565b811461074457600080fd5b50565b60008135905061075681610730565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126107815761078061075c565b5b8235905067ffffffffffffffff81111561079e5761079d610761565b5b6020830191508360208202830111156107ba576107b9610766565b5b9250929050565b600080600080606085870312156107db576107da610648565b5b60006107e98782880161069b565b94505060206107fa87828801610747565b935050604085013567ffffffffffffffff81111561081b5761081a61064d565b5b6108278782880161076b565b925092505092959194509250565b61083e81610672565b82525050565b60006020820190506108596000830184610835565b92915050565b60006020828403121561087557610874610648565b5b60006108838482850161069b565b91505092915050565b610895816106b0565b82525050565b60008115159050919050565b6108b08161089b565b82525050565b60006040820190506108cb600083018561088c565b6108d860208301846108a7565b9392505050565b6000819050919050565b60006109046108ff6108fa84610652565b6108df565b610652565b9050919050565b6000610916826108e9565b9050919050565b60006109288261090b565b9050919050565b6109388161091d565b82525050565b6000602082019050610953600083018461092f565b92915050565b61096281610726565b82525050565b600060408201905061097d6000830185610835565b61098a6020830184610959565b9392505050565b61099a8161089b565b81146109a557600080fd5b50565b6000815190506109b781610991565b92915050565b6000602082840312156109d3576109d2610648565b5b60006109e1848285016109a8565b91505092915050565b60008160601b9050919050565b6000610a02826109ea565b9050919050565b6000610a14826109f7565b9050919050565b610a2c610a2782610672565b610a09565b82525050565b6000819050919050565b610a4d610a4882610726565b610a32565b82525050565b6000610a5f8285610a1b565b601482019150610a6f8284610a3c565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b610ac9610ac4826106b0565b610aae565b82525050565b6000610adb8285610ab8565b602082019150610aeb8284610ab8565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b3582610726565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b6757610b66610afb565b5b60018201905091905056fea2646970667358221220176fc313e704ad0a4c57fc5826b1002898e52e7d932d1ea9c1f517d80645fd5264736f6c634300080d0033";

type TokenDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenDistributor__factory extends ContractFactory {
  constructor(...args: TokenDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _tokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_tokenAddress, overrides || {});
  }
  override deploy(
    _tokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_tokenAddress, overrides || {}) as Promise<
      TokenDistributor & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenDistributor__factory {
    return super.connect(runner) as TokenDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenDistributorInterface {
    return new Interface(_abi) as TokenDistributorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenDistributor {
    return new Contract(address, _abi, runner) as unknown as TokenDistributor;
  }
}
