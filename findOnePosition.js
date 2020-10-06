const { romanNums } = require('./constants');

function findOnePosition(val, position = "") {
    let newRoman = "";
    for (let i = 1; i <= val; i++) {
        if (i === 4 && position.length < 3) {
            newRoman = romanNums["1" + position] + romanNums["5" + position];
        }
        else if (i === 9 && position.length < 3) {
            newRoman = romanNums["1" + position] + romanNums["10" + position];
        }
        else if (i === 5 && position.length < 3) {
            newRoman = romanNums["5" + position];
        }
        else {
            newRoman += romanNums["1" + position];
        }
    }
    return newRoman;
}

module.exports = findOnePosition;