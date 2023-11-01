// generating a binary sequence using the Linear Congruential Generator
module.exports = function generateRandomBinSeqLCG(seed, length) {
    const a = 1103515245;
    const c = 12345;
    const m = Math.pow(2, 31) - 1;
    let x = seed;
    let sequence = '';

    for (let i = 0; i < length; i++) {
        x = (a * x + c) % m;
        sequence += (x & 1);
    }

    return sequence;
}