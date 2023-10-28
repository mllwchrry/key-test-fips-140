const MAX = 36;

function runsTest(key) {
    if (key.length !== 20000)
        throw new Error('Key length must be 20 000 bits');

    const zeroRuns = key.split('1');
    const oneRuns = key.split('0');
    const longestZeroRun = zeroRuns.reduce((longest, current) =>
                            (current.length > longest.length ? current : longest),
                            zeroRuns[0]);
    const longestOneRun = oneRuns.reduce((longest, current) =>
                            (current.length > longest.length ? current : longest),
                            oneRuns[0]);

    return longestZeroRun.length <= MAX && longestOneRun.length <= MAX;
}

module.exports = runsTest;