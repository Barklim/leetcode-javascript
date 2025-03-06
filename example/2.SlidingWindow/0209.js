/**
 * 209. Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * Difficulty: Medium
 *
 * Given an array of positive integers nums and a positive integer target, return the
 * minimal length of a subarray whose sum is greater than or equal to target. If there
 * is no such subarray, return 0 instead.
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

};
  

const example1 = minSubArrayLen(7, [2,3,1,2,4,3]); // 2
const example2 = minSubArrayLen(4, [1,4,4]); // 1
const example3 = minSubArrayLen(11, [1,1,1,1,1,1,1,1]); // 0
const example4 = minSubArrayLen(3, [1,1,2,1,3,1,1,1]); // 1

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
