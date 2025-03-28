/**
 * 1768. Merge Strings Alternately
 * https://leetcode.com/problems/merge-strings-alternately/
 * Difficulty: Easy
 *
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating
 * order, starting with word1. If a string is longer than the other, append the additional
 * letters onto the end of the merged string.
 *
 * Return the merged string.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

};

const example1 = mergeAlternately("abc", "pqr"); // "apbqcr"
const example2 = mergeAlternately("ab","pqrs"); // "apbqrs"
const example3 = mergeAlternately("abcd", "pq"); // "apbqcd"
const example4 = mergeAlternately("12", "some"); // "1s2ome"
const example5 = mergeAlternately("1234", "so"); // "1s2o34"

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);

// var mergeAlternately = function(word1, word2) {
//     let result = ''

//     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
//         if (i < word1.length) result += word1[i];
//         if (i < word2.length) result += word2[i];
//     }
//     return result
// };
