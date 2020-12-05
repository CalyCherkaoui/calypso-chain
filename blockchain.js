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

  isValidChain(chain) {
    // 1- Compare the genesis block of the upcomming chain with one in this Blockchain
    // stringify the genesis objects to compare them 
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

    /* now it's verified let's compare the Bolck befor the last one in the upcomming
     chain matches the lastBlock og this Blockchain */
    for (let i=1; i<chain.length; i++ ) {
      const block = chain[i];
      const lastBlock = chain[i-1];

      /* need to verify either the lastHashe-s match or generate a hash with
       the same data of the upcoming chain and compare it with the lastHash of the upcaming chain new block*/

      if (block.lastHash !== lastBlock.lastHash ||
          block.hash !== Block.blockHash(block)) {
        return false;
      }
    }

    // returns trues if it passes the two validation conditions above

    return true;
  }
}

module.exports = Blockchain;