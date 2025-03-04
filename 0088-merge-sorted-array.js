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
  let i = m + n - 1;

  m--;
  n--;

  while (n >= 0) {
    nums1[i--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};

// FOWARD
// var merge = function(nums1, m, nums2, n) {
//   let result = [];
//   let p1 = 0;
//   let p2 = 0;

//   while (p1 < m && p2 < n) {
//       if (nums1[p1] < nums2[p2]) {
//           result.push(nums1[p1]);
//           p1++;
//       } else {
//           result.push(nums2[p2]);
//           p2++;
//       }
//   }

//   while (p1 < m) {
//       result.push(nums1[p1]);
//       p1++;
//   }

//   while (p2 < n) {
//       result.push(nums2[p2]);
//       p2++;
//   }

//   for (let i = 0; i < result.length; i++) {
//       nums1[i] = result[i];
//   }

//   return nums1
// };


// BACKWARD
// var merge = function(nums1, m, nums2, n) {
//   let p1 = m - 1;
//   let p2 = n - 1;
//   let result = m + n - 1;

//   while (p1 >= 0 && p2 >= 0) {
//       if (nums1[p1] > nums2[p2]) {
//           nums1[result] = nums1[p1];
//           p1--;
//       } else {
//           nums1[result] = nums2[p2];
//           p2--;
//       }
//       result--;
//   }

//   while (p2 >= 0) {
//       nums1[result] = nums2[p2];
//       p2--;
//       result--;
//   }

//   return nums1
// };