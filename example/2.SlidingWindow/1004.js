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

};
  
const example1 = longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2); // 6 [1,1,1,0,0,1!,1,1,1,1,1!]
const example2 = longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3); // 10 [0,0,1,1,1!,1!,1,1,1,1!,1,1,0,0,0,1,1,1,1]
const example3 = longestOnes([1,0,1,0,0,1], 1); // 3
const example4 = longestOnes([1,0,0,1,0,0,0,1], 2); // 4

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
