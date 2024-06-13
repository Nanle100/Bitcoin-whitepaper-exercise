
var crypto = require("crypto");

var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];


var Blockchain = {
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

function createBlock(data, index){
    const block = {
        index,
        data,
        prevHash: Blockchain.blocks[index-1].hash,
        timestamp: Date.now(),
    }
    block.hash = blockHash(block)
    return block;
}

let index = 1;
for (let line of poem) {
    Blockchain.blocks.push(createBlock(line, index))
    index++;
}

function blockHash(bl) {
	return crypto.createHash("sha256").update(
		// use block data to calculate hash
        JSON.stringify(bl)
	).digest("hex");
}
console.log(Blockchain.blocks)
