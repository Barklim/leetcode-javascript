/**
 * 643. Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i/
 * Difficulty: Easy
 *
 * You are given an integer array nums consisting of n elements, and an integer k.
 *
 * Find a contiguous subarray whose length is equal to k that has the maximum average
 * value and return this value. Any answer with a calculation error less than 10-5
 * will be accepted.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }

  return max / k;
};

// gpt
// var findMaxAverage = function (nums, k) {
//   let maxSum = nums.slice(0, k).reduce((acc, num) => acc + num, 0);
//   let windowSum = maxSum;

//   for (let end = k; end < nums.length; end++) {
//     windowSum += nums[end] - nums[end - k];
//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum / k;
// };

// var findMaxAverage = function(nums, k) {
//   let begin = 0; // Begin
//   let window_state = 0; // WindowState
//   let result = -Infinity;

//   for (let end = 0; end < nums.length; end++) {
//       window_state += nums[end];

//       // end - begin = window size
//       if (end - begin + 1 === k) { // Window condition
//           result = Math.max(result, window_state);
//           window_state -= nums[begin];
//           begin++; // Shrink window
//       }
//   }
  
//   return result/k;
// };
