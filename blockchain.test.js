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
});