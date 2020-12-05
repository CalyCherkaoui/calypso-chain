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
  1- Compare the genesis block of the upcomming chain with one in this Blockchain
  stringify the genesis objects to compare them 
  2 - now it's verified let's compare the Bolck befor the last one in the upcomming
     chain matches the lastBlock og this Blockchain 
  3 - need to verify either the lastHashe-s match or generate a hash with
      the same data of the upcoming chain and compare it with the lastHash of the upcaming chain new block
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

}

module.exports = Blockchain;