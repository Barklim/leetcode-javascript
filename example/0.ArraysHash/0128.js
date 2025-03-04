/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Difficulty: Medium
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive
 * elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let result = 0;
  
    for (const num of set) {
      if (!set.has(num - 1)) {
        let count = 1;
        let n = num;
  
        while (set.has(n + 1)) {
          n++;
          count++;
        }
        result = Math.max(result, count);
      }
    }
  
    return result;
};
  

const example1 = longestConsecutive([100,4,200,1,3,2]); // 4
const example2 = longestConsecutive([0,3,7,2,5,8,4,6,0,1]); // 9
const example3 = longestConsecutive([1,0,1,2]); // 3
const example4 = longestConsecutive([2,20,4,10,3,4,5]); // 4
const example5 = longestConsecutive([0,3,2,5,4,6,1,1]); // 7
const example6 = longestConsecutive([1,3,5,7]); // 1
const example7 = longestConsecutive([]); // 0


console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
console.log(example7);
