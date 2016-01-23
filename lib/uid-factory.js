const LENGTH = 15;
const STRINGS = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789'
].join('');

module.exports = (length) => {
    length = isNaN(length) ? LENGTH : length;
    const str = [];
    for (let i = 0; i < length; i++) {
        str.push(STRINGS.substr(Math.floor(Math.random() * STRINGS.length), 1));
    }
    return str.join('');
};


