const Block = require('./blockchain/block');

// const block = new Block('foo_tmstp', 'bar_lahs', 'zoo_hs', 'baz_dt');
const minedBlock = Block.mineBlock(Block.genesis(), 'my_first_mined');


// experimenting 

// console.log(block.toString());
// console.log(Block.genesis().toString());
console.log(minedBlock.toString());