/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

};

const example1 = threeSum([-1,0,1,2,-1,-4]); // [[-1,-1,2],[-1,0,1]]
const example2 = threeSum([0,1,1]); // []
const example3 = threeSum([0,0,0]); // [[0,0,0]]
const example4 = threeSum([-4, -1, -1,0,1,2]); // [[-1,-1,2],[-1,0,1]]
const example5 = threeSum([-3, -2, 1, 2]); // [[ -3, 1, 2 ]]
const example6 = threeSum([-2, -1, 3]); // [[ -2, -1, 3 ]]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
