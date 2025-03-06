/**
 * 1493. Longest Subarray of 1's After Deleting One Element
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * Difficulty: Medium
 *
 * Given a binary array nums, you should delete one element from it.
 *
 * Return the size of the longest non-empty subarray containing only 1's in the
 * resulting array. Return 0 if there is no such subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {

};

// 1004.
const example1 = longestSubarray([1,1,0,1]); // 3 [1,1,1]
const example2 = longestSubarray([0,1,1,1,0,1,1,0,1]); // 5 [1,1,1,1,1]
const example3 = longestSubarray([1,1,1]); // 2
const example4 = longestSubarray([0,1,0,1,0,1,1,0]); // 3
const example5 = longestSubarray([0,0]); // 0

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
