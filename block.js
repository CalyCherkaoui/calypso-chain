// ES6 JS class - OOP
const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  // for debugging

  toString() {
    return `Block - 
    Timestamp: ${this.timestamp}
    Last Hash: ${this.lastHash.substring(0, 15)}
    Hash     : ${this.hash.substring(0, 15)}
    Data     : ${this.data}`;
  }

  // genesis block with static function that enable Block.genesis()

  static genesis() {
    return new this('Initial timestamp', '-----', 'a7x26-f95f', []);
  }

  // mining : generating new blocks

  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp, lastHash, data);
    return new this(timestamp, lastHash, hash, data);
  }

  // hash function

  static hash(timestamp, lastHash, data) {
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  }
}

// exporting the module Block

module.exports = Block;