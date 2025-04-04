/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 * Difficulty: Easy
 *
 * You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order,
 * and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2`
 * respectively.
 *
 * Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be
 * stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`,
 * where the first `m` elements denote the elements that should be merged, and the
 * last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

};

  
const example1 = merge([1,2,3,0,0,0], 3, [2,5,6], 3); // [1,2,2,3,5,6]
const example2 = merge([1], 1 , [], 0); // [1]
const example3 = merge([0], 0, [1], 1); // [1]
const example4 = merge([1,2,0,0], 2, [5,6], 2); // [1,2,5,6]
const example5 = merge([1,2,3,0,0,0], 4, [2,5,6], 2); //  [1, 2, 2, 3, 0, 5]
const example6 = merge([1,2,3,4], 4, [5,6], 2); // [1,2,3,4,5,6]
const example7 = merge([1,2,3,4], 2, [5,6], 2); // [1,2,5,6]
const example8 = merge([1,2], 2, [3,4,5,6], 3); // [1,2,3,4,5]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
console.log(example7);
console.log(example8);
  