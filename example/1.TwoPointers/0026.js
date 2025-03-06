/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Difficulty: Easy
 *
 * Given an integer array nums sorted in non-decreasing order, remove the
 * duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages,
 * you must instead have the result be placed in the first part of the array
 * nums. More formally, if there are k elements after removing the duplicates,
 * then the first k elements of nums should hold the final result. It does not
 * matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying
 * the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

};

  
const example1 = removeDuplicates([1,1,2]); // 2, nums = [1,2,_]
const example2 = removeDuplicates([0,0,1,1,1,2,2,3,3,4]); // 5, nums = [0,1,2,3,4,_,_,_,_,_]
const example3 = removeDuplicates([2,3,3,3,3]); // 2, nums = [2,3,_,_,_]
const example4 = removeDuplicates([1]); // 1, nums = [1]
const example5 = removeDuplicates([0,1,1,1,2,2,3,3,4]); // 5, nums = [0,1,2,3,4,_,_,_,_,_]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);