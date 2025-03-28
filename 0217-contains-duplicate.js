/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Difficulty: Easy
 *
 * Given an integer array `nums`, return `true` if any value appears at least
 * twice in the array, and return `false` if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length;
};

// var containsDuplicate = function(nums) {
//   const set = new Set()
//   for (let i = 0; i < nums.length; i++) {
//       if (set.has(nums[i])) {
//           return true
//       }
//       set.add(nums[i], i)
//   }
//   return false
// }
