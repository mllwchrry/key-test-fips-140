const monobitTest = require('./monobit-test');
const runsTest = require('./runs-test');
const pokerTest = require('./poker-test');
function hexToBinary(hex) {

    if (hex.length !== 5000)
        throw new Error('Key length must be 20 000 bits!');
    // console.log('len', hex.length)

    if (hex.startsWith('0x'))
        hex = hex.slice(2);

    const bigHex = BigInt('0x' + hex);
    let binary = bigHex.toString(2);

    // Pad with leading zeros to ensure the length matches
    const totalBits = hex.length * 4;
    return binary.padStart(totalBits, '0');

}

function generateRandomHex(length) {
    let result = '';
    const characters = '0123456789ABCDEF';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

const hex = generateRandomHex(5000);
// console.log(hex);

// console.log(monobitTest(hexToBinary(hex)));
// runsTest(hexToBinary(hex));
// console.log(runsTest('10000000000000000000000000000000000001110111000000011000000001'));

console.log(pokerTest(hexToBinary(hex)))
// console.log(pokerTest('10101010000010001000'))
// console.log(pokerTest('1101101001110101'))

