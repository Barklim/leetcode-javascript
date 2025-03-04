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
  const map = {};

  strs.forEach(str => {
    const key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  });

  return Object.values(map);
};

// var groupAnagrams = function(strs) {
//   const res = {};
//   for (let s of strs) {
//       // Создаем массив частот букв
//       const count = new Array(26).fill(0);
//       for (let c of s) {
//           count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
//       }
//       const key = count.join(',');
//       if (!res[key]) {
//           res[key] = [];
//       }
//       res[key].push(s);
//   }
//   return Object.values(res);
// }
