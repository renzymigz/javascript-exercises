const palindromes = function (str) {
    let newstr = str.split('').reverse().join('');

    if (newstr.trim().toLowerCase().replace(/[^a-z0-9]/g, '') === str.toLowerCase().replace(/[^a-z0-9]/g, '')) {
        return true; }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
