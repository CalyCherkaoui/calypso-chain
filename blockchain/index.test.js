import Blockchain from './index';
import { genesis } from './block';

describe('Blockchain', () => {
  let originchain, newchain;

  beforeEach(() => {
    originchain  = new Blockchain();
    newchain = new Blockchain();
  });

  it('starts with genesis block', () => {
    expect(originchain.chain[0]).toEqual(genesis());
  });

  it('adds a block to chain with given data', () => {
    const data = 'foobar';
    originchain.addBlock(data);

    expect(originchain.chain[originchain.chain.length-1].data).toEqual(data);
  });

  it('validates a valid chain', () => {
    newchain.addBlock('foobar');

    expect(originchain.isValidChain(newchain.chain)).toBe(true);
  });

  it('Dos not valid a chain with corrupted genesis block', () => {
    newchain.chain[0].data = 'corrupted data';

    expect(originchain.isValidChain(newchain.chain)).toBe(false);
  });

  it('Dos not validate a corrupted chain', () => {
    newchain.addBlock('foobar');
    newchain.chain[1].data = 'corrupted foobar';

    expect(originchain.isValidChain(newchain.chain)).toBe(false);
  });

  it('replaces the chain with a valid chain', () => {
    newchain.addBlock('valid replacement');
    originchain.replaceChain(newchain.chain);

    expect(originchain.chain).toEqual(newchain.chain);
  });

});