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
var isSubsequence = function(s, t) {
  if (s.length > t.length) return false;
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length;
};

// var isSubsequence = function(sub, t) {
//   let p1 = 0;
//   let p2 = 0;
//   while (p1 < sub.length && p2 < t.length) {
//       if (sub[p1] === t[p2]) {
//           p1 += 1
//       }
//       p2 += 1
//   }

//   return p1 === sub.length
// };
