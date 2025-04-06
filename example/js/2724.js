/**
 * 2724. Sort By
 * https://leetcode.com/problems/sort-by/
 * Difficulty: Easy
 *
 * Given an array arr and a function fn, return a sorted array sortedArr.
 * You can assume fn only returns numbers and those numbers determine the
 * sort order of sortedArr. sortedArr must be sorted in ascending order
 * by fn output.
 *
 * You may assume that fn will never duplicate numbers for a given array.
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {

};

ex1 = sortBy([5, 4, 1, 2, 3], fn = (x) => x)
console.log(ex1) // [1, 2, 3, 4, 5]

ex2 = sortBy([{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x)
console.log(ex2) // [{"x": -1}, {"x": 0}, {"x": 1}]

ex3 = sortBy([[3, 4], [5, 2], [10, 1]], fn = (x) => x[1])
console.log(ex3) // [[10, 1], [5, 2], [3, 4]]
  