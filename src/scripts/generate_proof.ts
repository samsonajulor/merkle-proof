import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import csv from "csv-parser";
import fs from "fs";
import { utils } from "ethers";
import path from "path";
import Web3 from "web3";

function main() {
  const web3 = new Web3();
  let root: string | undefined;

  const filename = path.join(__dirname, "./files/accepted_addresses.csv");
  const output_file = path.join(__dirname, './files/token_roots.json');
  const userclaimFile = path.join(__dirname, './files/user_claim.csv');

  const erc20Token = "0x027Ffd3c119567e85998f4E6B9c3d83D5702660c"; // replace this with your token address

  // used to store one leaf for each line in the distribution file
  const token_dist: string[] = [];

  // used for tracking user_id of each leaf so we can write to proofs file accordingly
  const user_dist_list: [string, string][] = [];

  // open distribution csv
  fs.createReadStream(filename)
    .pipe(csv())
    .on("data", (row: { [key: string]: string }) => {
      const user_dist: [string, string] = [
        row["user_address"],
        row["amount"]
      ]; // create record to track user_id of leaves
      const leaf_hash = utils.solidityKeccak256(
        ["address", "uint256"],
        [row["user_address"], row["amount"]]
      ); // encode base data like solidity abi.encode
      user_dist_list.push(user_dist); // add record to index tracker
      token_dist.push(leaf_hash); // add leaf hash to distribution
    })
    .on("end", () => {
      // create merkle tree from token distribution
      const merkle_tree = new MerkleTree(token_dist, keccak256, {
        sortPairs: true
      });
      // get root of our tree
      root = merkle_tree.getHexRoot();
      // create proof file
      write_leaves(merkle_tree, user_dist_list, token_dist, root);
    });

  // write leaves & proofs to json file
  function write_leaves(
    merkle_tree: MerkleTree,
    user_dist_list: [string, string][],
    token_dist: string[],
    root: string | undefined
  ) {
    console.log("Begin writing leaves to file...");
    const full_dist: { [key: string]: { leaf: string; proof: string[] } } = {};
    const full_user_claim: { [key: string]: { address: string; amount: string } } = {};

    for (let line = 0; line < user_dist_list.length; line++) {
      // generate leaf hash from raw data
      const leaf = token_dist[line];

      // create dist object
      const user_dist = {
        leaf: leaf,
        proof: merkle_tree.getHexProof(leaf)
      };
      // add record to our distribution
      full_dist[user_dist_list[line][0]] = user_dist;
    }

    fs.writeFile(output_file, JSON.stringify(full_dist, null, 4), (err) => {
      if (err) {
        console.error(err);
        return;
      }

      const sendTokenObject = {
        dropDetails: {
          contractAddress: erc20Token,
          merkleroot: root
        }
      };

      for (let line = 0; line < user_dist_list.length; line++) {
        const other = user_dist_list[line];
        // console.log(gotchi_dist_list[line])
        const user_claim = {
          address: other[0],
          amount: other[1]
        };
        full_user_claim[user_dist_list[line][0]] = user_claim;
      }
      const newObj = { ...full_user_claim, ...sendTokenObject };
      // append to token distribution list to have a comprehensive overview
      fs.writeFile(userclaimFile, JSON.stringify(newObj, null, 4), (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      console.log(output_file, "has been written with a root hash of:\n", root);
    });

    // return root;
  }
}

main();

// exports.allOps = write_leaves();
