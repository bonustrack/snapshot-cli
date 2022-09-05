## Cast vote

This is a simple script to cast a vote on a Snapshot proposal from a command line. This script requires [Node.js](https://nodejs.org/en/download/) and NPM.

### Install dependencies
```sh
npm i
```

### Cast a vote

Run this command in your terminal to cast a vote. Choice start from 1, which in most case it correspond to approval of a proposal.
```sh
npm run vote -- --space fabien.eth --proposal 0xbe992f0a433d2dbe2e0cee579e5e1bdb625cdcb3a14357ea990c6cdc3e129991 --choice 1
```
You can also use short aliases
```sh
npm run vote -- --s fabien.eth --p 0xbe992f0a433d2dbe2e0cee579e5e1bdb625cdcb3a14357ea990c6cdc3e129991 --c 1
```

This script returns the following response to confirm the vote is successful.
```sh
Success {
  id: '0xc9215b9dbcd2b9f5e2564d1a8080511df8d99fc0cdea86b508f9c4bfaa5f0393',
  ipfs: 'bafkreicas5oifs4hto7gu2eoiqfna7dzey3ml47xqojfbv4v3dd7qgmx2a',
  relayer: {
    address: '0x8BBE4Ac64246d600BC2889ef5d83809D138F03DF',
    receipt: '0x2c0d4b123e285fc2693e418f49b9b75bd6afe4b1b8ee2b8db2bf29a1a9b2917e62c468f788d1aab6bd2ef3b56d0eec0de6200f14506cf2de16bb6a4534487c3d1b'
  }
}
```

