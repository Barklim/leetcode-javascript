/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

}

const example1 = productExceptSelf([1,2,3,4]); // [24,12,8,6]
const example2 = productExceptSelf([-1,1,0,-3,3]); // [0,0,9,0,0]
const example3 = productExceptSelf([1,2,4,6]); // [48,24,12,8]
const example4 = productExceptSelf([-1,0,1,2,3]); // [0,-6,0,0,0]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
