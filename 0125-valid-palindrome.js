/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Difficulty: Easy
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
 * removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric
 * characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const string = s.replace(/[^A-Z\d]+/ig, '').toLowerCase();
  return string.split('').reverse().join('') === string;
};


// s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
// let left = 0, right = s.length - 1;

// while (left < right) {
//   if (s[left] !== s[right]) return false;
//   left++;
//   right--;
// }

// return true;