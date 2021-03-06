const Block = require('./block');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    // const lastBlock = this.chain[this.chain.length-1];
    const block = Block.mineBlock(this.chain[this.chain.length-1], data);
    this.chain.push(block);

    return block
  }

  /*  IsValidChain method
  1- Compare the genesis block of the upcoming chain with one in this Blockchain
  stringify the genesis objects to compare them 
  2 - now it's verified let's compare the Block before the last one in the upcoming
     chain matches the lastBlock of this Blockchain 
  3 - need to verify either the lastHashe-s match or generate a hash with
      the same data of the upcoming chain and compare it with the lastHash of the upcoming chain new block
  4 - The method returns true if it passes the two validation conditions above*/

  isValidChain(chain) {
    if(JSON.stringify(chain[0])!== JSON.stringify(Block.genesis())) return false;

    for (let i=1; i<chain.length; i++){
        const block = chain[i];
        const lastBlock = chain[i-1];

        if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)){
            return false;
        }
    }

    return true;
  }

  /* Replacing chain with a new valid one so we can achieve consensus among users of the blockchain.
    This prevents the blockchain to become independent
    1 - we verify if the newchain is longer than the original
    2 - we verify if it passes the validation rules set up in isValidChain method 
    NB: the parameter passed here is an array newBlockChain.chain*/

  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.log('Recieved new chain is shorter than the current chain.');
      return;
    } else if (!this.isValidChain(newChain)) {
      console.log('Recieved new chain is not valid.');
      return;
    }

    console.log('Replacing the current chain with recieved chain');
    this.chain = newChain;
  }

}

module.exports = Blockchain;