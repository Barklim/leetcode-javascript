/**
 * 2635. Apply Transform Over Each Element in Array
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * Difficulty: Easy
 *
 * Given an integer array arr and a mapping function fn, return a new array with a transformation
 * applied to each element.
 *
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 *
 * Please solve it without the built-in Array.map method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

};

const arr = [1,2,3]

fn1 = function plusone(n) { return n + 1; }
ex1 = map(arr, fn1)

fn2 = function plusI(n, i) { return n + i; }
ex2 = map(arr, fn2)

fn3 = function constant() { return 42; }
ex3 = map(arr, fn3)

console.log(ex1)
console.log(ex2)
console.log(ex3)
  