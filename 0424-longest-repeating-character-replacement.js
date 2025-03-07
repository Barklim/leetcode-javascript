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
  const count = new Map();
  let max = 0;
  let left = 0;

  return s.split('').reduce((maxLength, char, right) => {
    count.set(char, (count.get(char) || 0) + 1);
    max = Math.max(max, count.get(char));
    if (right - left + 1 - max > k) {
      count.set(s[left], count.get(s[left++]) - 1);
    }
    return Math.max(maxLength, right - left + 1);
  }, 0);
};

// var characterReplacement = function(s, k) {
//   const window_state = new Set(s); // charSet
//   let result = 0;

//   for (let char of window_state) {
//       let begin = 0;
//       let count = 0
//       for (let end = 0; end < s.length; end++) {
//           if (s[end] === char) {
//               count++;
//           }

//           while ((end - begin + 1) - count > k) {
//               if (s[begin] === char) {
//                   count--;
//               }
//               begin++;
//           }

//           result = Math.max(result, end - begin + 1);
//       }
//   }
//   return result;
// };
