
const findOnePosition = require('./findOnePosition');


function convertToRoman(num) {
    let str = num.toString();
    let newRoman = "";
    switch (str.length) {
        case 1: {
            newRoman = findOnePosition(parseInt(str[0].toString()));
            break;
        }
        case 2: {
            newRoman = findOnePosition(parseInt(str[0].toString()), "0") + findOnePosition(parseInt(str[1].toString()))
            break;
        }
        case 3: {
            newRoman = findOnePosition(parseInt(str[0].toString()), "00") + findOnePosition(parseInt(str[1].toString()), "0") + findOnePosition(parseInt(str[2].toString()))
            break;
        }
        case 4: {
            newRoman = findOnePosition(parseInt(str[0].toString()), "000") + findOnePosition(parseInt(str[1].toString()), "00") + findOnePosition(parseInt(str[2].toString()), "0") + findOnePosition(parseInt(str[3].toString()));
            break;
        }
    }
    return newRoman;
}

console.log(convertToRoman(9023));