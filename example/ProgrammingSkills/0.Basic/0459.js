/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

};

const example1 = repeatedSubstringPattern("abab"); // true
const example2 = repeatedSubstringPattern("aba"); // false
const example3 = repeatedSubstringPattern("abcabcabcabc"); // true
const example4 = repeatedSubstringPattern("121"); // false
const example5 = repeatedSubstringPattern("123123"); // true

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);

// var repeatedSubstringPattern = function(s) {
//     return (s + s).slice(1, s.length * 2 - 1).indexOf(s) !== -1
// };

// var repeatedSubstringPattern = function(s) {
//     const n = s.length;

//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0 && s.slice(0, i).repeat(n / i) === s) {
//             return true;
//         }
//     }
    
//     return false;    
// };