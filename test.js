const monobitTest = require('./monobit-test');
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

console.log(monobitTest(hexToBinary(hex)));