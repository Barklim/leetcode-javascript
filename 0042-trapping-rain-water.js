/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * Difficulty: Hard
 *
 * Given n non-negative integers representing an elevation map where the
 * width of each bar is 1, compute how much water it can trap after raining.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;

  for (let left = 0, right = height.length - 1, maxL = 0, maxR = 0; left < right;) {
    maxL = Math.max(maxL, height[left]);
    maxR = Math.max(maxR, height[right]);
    result += maxL < maxR ? maxL - height[left++] : maxR - height[right--];
  }

  return result;
};

// var trap = function(height) {
//   let res = 0
//   let left = 0
//   let right = height.length - 1
//   let maxLeft = height[left]
//   let maxRight = height[right]

//   while (left < right) {
//       if (maxLeft < maxRight) {
//           left++
//           maxLeft = Math.max(maxLeft, height[left])
//           res = res + (maxLeft - height[left])
//           //
//       } else {
//           right--
//           maxRight = Math.max(maxRight, height[right])
//           res = res + (maxRight - height[right])
//       }
//   }

//   return res
// };