const MIN = 1.03;
const MAX = 57.4;

function pokerTest(key) {
    if (key.length !== 20000)
        throw new Error('Key length must be 20 000 bits');

    const m = 4;
    const k = key.length / m;

    const patternCounts = new Map();
    for (let i = 0; i < k; i++) {
        const pattern = key.slice(i * m, i * m + m);
        if (patternCounts.has(pattern))
            patternCounts.set(pattern, patternCounts.get(pattern) + 1);
        else
            patternCounts.set(pattern, 1);
    }

    let x3 = 0;
    for (const patternCount of patternCounts.values())
        x3 += patternCount * patternCount;

    x3 = (Math.pow(2, m)/k) * x3 - k;
    // console.log('x3', x3);

    return MIN <= x3 && x3 <= MAX;
}

module.exports = pokerTest;