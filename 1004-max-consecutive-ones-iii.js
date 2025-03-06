/**
 * 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * Difficulty: Medium
 *
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's
 * in the array if you can flip at most k 0's.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (!nums[right]) k--;
    if (k < 0) {
      if (!nums[left]) k++;
      left++;
    }
    right++;
  }

  return right - left;
};

// var longestOnes = function(nums, k) {
//   let begin = 0
//   let window_state = 0 // this is how many zeros you saw
//   let result = 0
  
//   for (let end = 0; end < nums.length; end++ ) {
//       if (nums[end] === 0) {
//           window_state += 1
//       }

//       // window condition - when count 0 > k
//       while (window_state > k) {
//           if (nums[begin] === 0) {
//               window_state -= 1
//           }
//           begin++
//       }
//       result = Math.max(result, end - begin + 1)
//   }

//   return result
// };
