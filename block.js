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
    Hash:    : ${this.hash.substring(0, 8)}
    Data:    : ${this.data}
    `
  }
}

// exporting the module Block

module.exports = Block;