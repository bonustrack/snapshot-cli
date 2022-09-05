require('dotenv/config');
const snapshot = require('@snapshot-labs/snapshot.js');
const { Wallet } = require('@ethersproject/wallet');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
	.option('space', { string: true, alias: 's' })
	.option('proposal', { string: true, alias: 'p' })
	.option('choice', { number: true, alias: 'c' })
	.argv;
const privkey = process.env.PRIVKEY;

const client = new snapshot.Client712();
const wallet = new Wallet(privkey);

const address = wallet.address;
const space = argv.s || 'fabien.eth';
const proposal = argv.p || '0xbe992f0a433d2dbe2e0cee579e5e1bdb625cdcb3a14357ea990c6cdc3e129991';
const choice = argv.c || 1;

client.vote(wallet, address, {
	space,
	proposal,
	type: 'single-choice',
	choice,
	app: ''
})
	.then(result => console.log('Success', result))
	.catch(e => console.log('Error', e));
