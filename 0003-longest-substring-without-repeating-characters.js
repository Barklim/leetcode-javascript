/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Difficulty: Medium
 *
 * Given a string `s`, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let offset = 0;

  return s.split('').reduce((max, value, i) => {
    offset = map[value] >= offset ? map[value] + 1 : offset;
    map[value] = i;
    return Math.max(max, i - offset + 1);
  }, 0);
};

// var lengthOfLongestSubstring = function(s) {
//   let begin = 0;
//   const window_state = new Set(); // charSet
//   let result = 0;

//   for (let end = 0; end < s.length; end++) {
//       while (window_state.has(s[end])) {
//           window_state.delete(s[begin]);
//           begin++;
//       }
//       window_state.add(s[end]);
//       result = Math.max(result, end - begin + 1);
//   }
//   return result;
// };
