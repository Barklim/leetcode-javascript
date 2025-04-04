/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 *
 * Given n non-negative integers `a1, a2, ..., an ,` where each represents a point at
 * coordinate `(i, ai)`. `n` vertical lines are drawn such that the two endpoints of
 * the line `i` is at `(i, ai)` and `(i, 0)`. Find two lines, which, together with the
 * x-axis forms a container, such that the container contains the most water.
 *
 * Notice that you may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

};
  

const example1 = maxArea([1,8,6,2,5,4,8,3,7]); // 49
const example2 = maxArea([1,1]); // 1
const example3 = maxArea([9,0,8]); // 16
const example4 = maxArea([9,0,8,4,0,0,0,0,0,0,4]); // 40
const example5 = maxArea([9,8,4,0,0,0,0,0,0,4]); // 36
const example6 = maxArea([4,0,0,0,0,0,0,4]); // 28
const example7 = maxArea([1,0,4,0,0,0,0,0,0,4]); // 28

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
console.log(example7);