// ES6 JS class - OOP
import SHA256 from 'crypto-js/sha256';

class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `Block - 
    Timestamp: ${this.timestamp}
    Last Hash: ${this.lastHash.substring(0, 15)}
    Hash     : ${this.hash.substring(0, 15)}
    Data     : ${this.data}`;
  }

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

  static blockHash(block) {
    const { timestamp, lastHash, data } = block;

    return Block.hash(timestamp, lastHash, data);
  }
}

// exporting the module Block

export default Block;