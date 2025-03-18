/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Difficulty: Medium
 *
 * Given an integer array `nums` and an integer `k`, return the `k` most
 * frequent elements. You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();

  nums.forEach(value => map.set(value, (map.get(value) || 0) + 1));

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([value]) => value)
};

/**
 *  Почему Map + Sort быстрее на малых данных
 *  1. Оптимизированные встроенные методы JS
 *  2. Низкий константный оверхед
 *  3. Быстродействие Map в JS
 *  4. JS-движки оптимизируют Map + sort()
 */
// Bucket sort
// var topKFrequent = function (nums, k) {
//   const count = {};
//   const freq = Array.from({ length: nums.length + 1 }, () => []);

//   for (const n of nums) {
//       count[n] = (count[n] || 0) + 1;
//   }
//   for (const n in count) {
//       freq[count[n]].push(parseInt(n));
//   }

//   const res = [];
//   for (let i = freq.length - 1; i > 0; i--) {
//       for (const n of freq[i]) {
//           res.push(n);
//           if (res.length === k) {
//               return res;
//           }
//       }
//   }
// };

// var topKFrequent = function(nums, k) {
//   const freqMap = new Map();
  
//   // Подсчёт частоты элементов
//   for (const num of nums) {
//       freqMap.set(num, (freqMap.get(num) || 0) + 1);
//   }

//   const minHeap = new MinHeapAdhoc();

//   // Заполняем хипу
//   for (const [num, freq] of freqMap.entries()) {
//       minHeap.add([freq, num]);
//       if (minHeap.heap.length > k) {
//           minHeap.poll();
//       }
//   }

//   // Извлекаем k самых частых элементов
//   return minHeap.heap.map(item => item[1]);
// }; 
