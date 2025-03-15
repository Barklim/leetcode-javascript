/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

};

const example1 = isValid('()'); // true
const example2 = isValid('()[]{}'); // true
const example3 = isValid('(]'); // false
const example4 = isValid('([])'); // true

const example5 = isValid('[]'); // true
const example6 = isValid('([{}])'); // true
const example7 = isValid('[(])'); // false

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
console.log(example7);
