/**
 * 2677. Chunk Array
 * https://leetcode.com/problems/chunk-array/
 * Difficulty: Easy
 *
 * Given an array arr and a chunk size size, return a chunked array.
 *
 * A chunked array contains the original elements in arr, but consists of subarrays each of
 * length size. The length of the last subarray may be less than size if arr.length is not
 * evenly divisible by size.
 *
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 *
 * Please solve it without using lodash's _.chunk function.
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {

};

ex1 = chunk([1,2,3,4,5], 1)
console.log(ex1) // [[1],[2],[3],[4],[5]]

ex2 = chunk([1,9,6,3,2], 3)
console.log(ex2) // [[1,9,6],[3,2]]

ex3 = chunk([8,5,3,2,6], 6)
console.log(ex3) // [[8,5,3,2,6]]

ex4 = chunk([], 1)
console.log(ex4) // []
  