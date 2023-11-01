const ACCEPTANCE_RANGE = [
    [2267, 2733],
    [1079, 1421],
    [502, 748],
    [223, 402],
    [90, 223],
    [90, 223]
];

function bitRunsTest(key, bit) {
    const bitRunsCounts = new Map(
        Array.from({ length: 6 }, (_, index) => [index + 1, 0])
    );

    const bitRuns = key.split(bit.toString());

    for (let i = 0; i < bitRuns.length; i++) {
        const len = bitRuns[i].length
        if (len > 0 && len < 6)
            bitRunsCounts.set(len, bitRunsCounts.get(len) + 1)
        else if (len >= 6)
            bitRunsCounts.set(6, bitRunsCounts.get(6) + 1)
    }

    // console.log(bitRunsCounts);

    let result = true;

    for (const [key, value] of bitRunsCounts.entries())
        if (!(ACCEPTANCE_RANGE[key - 1][0] <= value && value <= ACCEPTANCE_RANGE[key - 1][1]))
            result = false;

    return result;
}


function runsTest(key) {
    if (key.length !== 20000)
        throw new Error('Key length must be 20 000 bits');

    return bitRunsTest(key, 0) && bitRunsTest(key, 1);
}

module.exports = runsTest;
