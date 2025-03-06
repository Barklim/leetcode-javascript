/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * Difficulty: Easy
 *
 * Given an integer `x`, return `true` if `x` is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 * - For example, `121` is palindrome while `123` is not.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  return +String(x).split('').reverse().join('') === x;
};

// var isPalindrome = function (x) {
//   if (x < 0) return false;

//   const strNum = x.toString();
//   let left = 0;
//   let right = strNum.length - 1;

//   while (left < right) {
//       if (strNum[left] !== strNum[right]) {
//           return false;
//       }
//       left++;
//       right--;
//   }
//   return true;
// };
