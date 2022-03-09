import Block from './blockchain/block';

// const block = new Block('foo_tmstp', 'bar_lahs', 'zoo_hs', 'baz_dt');
const minedBlock = Block.mineBlock(Block.genesis(), 'my_first_mined');

console.log(minedBlock.toString());