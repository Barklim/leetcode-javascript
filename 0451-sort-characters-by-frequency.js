/**
 * 451. Sort Characters By Frequency
 * https://leetcode.com/problems/sort-characters-by-frequency/
 * Difficulty: Medium
 *
 * Given a string, sort it in decreasing order
 * based on the frequency of characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = new Map();
  s.split('').forEach(char => {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  });

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0].repeat(entry[1]))
    .join('');
};

// Doesno work with big string Why?
// var frequencySort = function(s) {
//   const freqMap = new Map();

//   // Подсчёт частоты символов
//   for (const ch of s) {
//       freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
//   }

//   const maxHeap = new MaxHeapAdhoc();

//   // Заполняем макс-хипу (отрицательное значение для симуляции макс-хипы)
//   for (const [ch, freq] of freqMap.entries()) {
//       maxHeap.add([-freq, ch.repeat(freq)]);
//   }

//   let result = "";

//   // Извлекаем символы в порядке убывания частоты
//   while (maxHeap.heap.length) {
//       result += maxHeap.poll()[1];
//   }

//   return result;
// };