// ES6 JS class - OOP

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
    Last Hash: ${this.lastHash.substring(0, 8)}
    Hash     : ${this.hash.substring(0, 8)}
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
    const hash = 'generated-hash';
    return new this(timestamp, lastHash, hash, data);
  }
}

// exporting the module Block

module.exports = Block;