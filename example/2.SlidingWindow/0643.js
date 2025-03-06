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

};
  

const example1 = findMaxAverage([1,12,-5,-6,50,3], 4); // 12.75
const example2 = findMaxAverage([5], 1); // 5
const example3 = findMaxAverage([3, 3], 2); // 3
const example4 = findMaxAverage([4 ,5, 6], 2); // 5.5
const example5 = findMaxAverage([4 ,5, 6], 1); // 6

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
