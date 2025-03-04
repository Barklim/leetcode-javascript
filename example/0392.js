/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 * Difficulty: Easy
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by
 * deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(sub, t) {

};

const example1 = isSubsequence('abc', 'ahbgdc'); // true
const example2 = isSubsequence('axc', 'ahbgdc'); // false
const example3 = isSubsequence('abc', 'ab1c'); // true
const example4 = isSubsequence('abc', 'abb1abc'); // true

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
  