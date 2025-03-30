/**
 * 2634. Filter Elements from Array
 * https://leetcode.com/problems/filter-elements-from-array/
 * Difficulty: Easy
 *
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 *
 * The fn function takes one or two arguments:
 * arr[i] - number from the arr
 * i - index of arr[i]
 *
 * filteredArr should only contain the elements from the arr for which the expression
 * fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where
 * Boolean(value) returns true.
 *
 * Please solve it without the built-in Array.filter method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

};


fn1 = function greaterThan10(n) { return n > 10; }
ex1 = filter([0,10,20,30], fn1)

fn2 = function firstIndex(n, i) { return i === 0; }
ex2 = filter([1,2,3], fn2)

fn3 = function plusOne(n) { return n + 1 }
ex3 = filter([-2,-1,0,1,2], fn3)

console.log(ex1) // [20, 30]
console.log(ex2) // [1]
console.log(ex3) // [-2,0,1,2]
  