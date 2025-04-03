/**
 * 189. Rotate Array
 * https://leetcode.com/problems/rotate-array/
 * Difficulty: Medium
 *
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  nums.unshift(...nums.splice((k % nums.length) * -1));
};

// var rotate = function(nums, k) {
//   const n = nums.length;
//   k = k % n;
//   const rotated = new Array(n).fill(0);

//   for (let i = 0; i < n; i++) {
//       rotated[(i + k) % n] = nums[i];
//   }

//   for (let i = 0; i < n; i++) {
//       nums[i] = rotated[i];
//   }    
// };