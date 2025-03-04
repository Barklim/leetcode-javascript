/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * Difficulty: Easy
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sort = str => str.split('').sort().join('');
  return sort(s) === sort(t);
};

// var isAnagram = function(s, t) {
//   if (s.length !== t.length) {
//       return false;
//   }

//   const countS = {};
//   const countT = {};
//   for (let i = 0; i < s.length; i++) {
//       countS[s[i]] = (countS[s[i]] || 0) + 1;
//       countT[t[i]] = (countT[t[i]] || 0) + 1;
//   }

//   for (const key in countS) {
//       if (countS[key] !== countT[key]) {
//           return false;
//       }
//   }
//   return true;
// }
