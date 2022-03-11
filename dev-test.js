import Block from './blockchain/block';

const minedBlock = Block.mineBlock(Block.genesis(), 'my_first_mined');
