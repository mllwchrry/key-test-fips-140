// generating binary sequence using Linear Feedback Shift Register
module.exports = function generateRandomBinSeqLFSR(seed, length) {
    const taps = [17, 14, 13, 11]; // Feedback taps for a 17-bit LFSR
    let state = seed;

    const generateBit = () => {
        const feedback = taps.map(tap => (state >> tap) & 1).reduce((a, b) => a ^ b);
        state = (state >> 1) | (feedback << 16);
        return state & 1;
    };

    let sequence = '';
    for (let i = 0; i < length; i++)
        sequence += generateBit();

    return sequence;
}