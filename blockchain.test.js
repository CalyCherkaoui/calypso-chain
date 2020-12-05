const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let chaintst;

  beforeEach(() => {
    chaintst = new Blockchain();
  });

  it('starts with genesis block', () => {
    expect(chaintst.chain[0]).toEqual(Block.genesis());
  });

  it('adds a block to chain with given data', () => {
    const data = 'new block into chain test';
    chaintst.addBlock(data);

    expect(chaintst.chain[chaintst.chain.length-1].data).toEqual(data);
  });
});