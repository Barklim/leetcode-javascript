/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * Difficulty: Medium
 *
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 *
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k];
};

// var findKthLargest = function(nums, k) {

//   const min_heap = new MinHeapAdhoc();

//   for (const num of nums) {
//       min_heap.add(num)
//       if (min_heap.heap.length > k) {
//           min_heap.poll();
//       }
//   }

//   return min_heap.heap[0]
// };


// var findKthLargest = function(nums, k) {

//   const max_heap = new MaxHeapAdhoc();

//   for (const num of nums) {
//       max_heap.add(num)
//   }

//   for (let i = 0; i < k - 1; i++) {
//       max_heap.poll();
//   }

//   return max_heap.heap[0]
// };
