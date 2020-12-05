const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc, bc2;

  beforeEach(() => {
    bc  = new Blockchain();
    bc2 = new Blockchain();
  });

  it('starts with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('adds a block to chain with given data', () => {
    const data = 'foobar';
    bc.addBlock(data);

    expect(bc.chain[bc.chain.length-1].data).toEqual(data);
  });

  it('validates a valid chain', () => {
    bc2.addBlock('foo');
    expect(bc.isValidChain(bc2.chain)).toBe(true);
  });
});