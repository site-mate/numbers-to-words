// expecting a number between 0 and 999,999
function convertNumberToWords(number) {
    if(number === 0) {
        return "zero";
    }

    return 'one'
}

module.exports = { convertNumberToWords };