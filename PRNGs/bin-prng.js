// generating a binary sequence of random bits
// using built-in Math.random() and Math.round() functions
function generateRandomBinarySequence(size) {
    let binarySequence = '';
    for (let i = 0; i < size; i++) {
        const randomBit = Math.round(Math.random()); // Генеруємо випадковий біт (0 або 1)
        binarySequence += randomBit;
    }
    return binarySequence;
}

module.exports = generateRandomBinarySequence(20000);