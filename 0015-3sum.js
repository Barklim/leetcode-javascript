/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (!sum) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        sum < 0 ? j++ : k--;
      }
    }
  }

  return result;
};

// var threeSum = function(nums) {
//   nums.sort((a, b) => a - b);
//   const result = [];

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue; // Пропускаем дубли

//     let left = i + 1, right = nums.length - 1;

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);
//         left++;
//         right--;

//         while (left < right && nums[left] === nums[left - 1]) left++; // Пропуск дубликатов слева
//         while (left < right && nums[right] === nums[right + 1]) right--; // Пропуск дубликатов справа
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }

//   return result;
// };

// O(n^2)
// с = - (a + b)
// var threeSum = function(nums) {
//   nums.sort((a, b) => a - b); // O(n log n)
//   const result = new Set();
//   const n = nums.length;

//   for (let i = 0; i < n; i++) {
//     let target = -nums[i];
//     let left = i + 1;
//     let right = n - 1;

//     while (left < right) {
//       let currentSum = nums[left] + nums[right];

//       if (currentSum === target) {
//         result.add(JSON.stringify([nums[i], nums[left], nums[right]]));
//         left++;
//         right--;
//       } else if (currentSum > target) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }

//   return Array.from(result, JSON.parse); // Преобразуем Set обратно в массив
// };