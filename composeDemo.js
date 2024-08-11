import { compose } from 'redux';

function removeSpace(string) {
    return string.split(" ").join("");
}

function repeatString(string) {
    return string.repeat(2); 
}

function convertToUpper(string) {
    return string.toUpperCase();
}

let input = "ankush kumar kushwaha"
// let output = convertToUpper(repeatString(removeSpace(input)));
// console.log(output);

const composedFunction = compose(removeSpace, repeatString, convertToUpper);
console.log(composedFunction(input));
