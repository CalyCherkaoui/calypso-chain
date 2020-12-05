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
}