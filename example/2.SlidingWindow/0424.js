/**
 * 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Difficulty: Medium
 *
 * You are given a string s and an integer k. You can choose any character of the string
 * and change it to any other uppercase English character. You can perform this operation
 * at most k times.
 *
 * Return the length of the longest substring containing the same letter you can get after
 * performing the above operations.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

};
  
const example1 = characterReplacement("ABAB", 2); // 4
const example2 = characterReplacement("AABABBA", 1); // 4
const example3 = characterReplacement("XYYX", 2); // 4
const example4 = characterReplacement("AAABABB", 1); // 5
const example5 = characterReplacement("", 1); // 0
const example6 = characterReplacement("AAABBBXXXAABBXX", 1); // 4
const example7 = characterReplacement("AAABBBXXXAABBXX", 2); // 5
const example8 = characterReplacement("AAABBBXXXAABBXX", 3); // 6

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
console.log(example7);
console.log(example8);
