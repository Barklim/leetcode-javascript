/**
 * 844. Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare/
 * Difficulty: Easy
 *
 * Given two strings `s` and `t`, return true if they are equal when both
 * are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

};
  
const example1 = backspaceCompare('ab#c', 'ad#c'); // true 'ac'
const example2 = backspaceCompare('ab##', 'c#d#'); // true ''
const example3 = backspaceCompare('a#c', 'b'); // false
const example4 = backspaceCompare('a#b', 'a#bb'); // false

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
  