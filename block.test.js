const Block = require('./block');

describe('Block', () => {
  let lastBlock, data, block;

  beforeEach(() => {
    data = 'my data test';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });


  it('sets the `data` to match the input', () => {});
});