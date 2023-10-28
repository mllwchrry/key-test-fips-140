const MIN = 9654;
const MAX = 10346;

function monobitTest(key) {

    if (key.length !== 20000)
        throw new Error('Key length must be 20 000 bits');

    const zeros = key.replaceAll('1', '').length;
    return MIN <= zeros && zeros <= MAX;

}

module.exports = monobitTest;