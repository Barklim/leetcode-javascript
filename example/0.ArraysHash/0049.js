/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Difficulty: Medium
 *
 * Given an array of strings `strs`, group the anagrams together. You can return the
 * answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different
 * word or phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

}

const example1 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]); //  [["bat"],["nat","tan"],["ate","eat","tea"]]
const example2 = groupAnagrams([""]); // [[""]]
const example3 = groupAnagrams(["a"]); // [["a"]]
const example4 = groupAnagrams(["act","pots","tops","cat","stop","hat"]); //  [["hat"],["act", "cat"],["stop", "pots", "tops"]]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
  