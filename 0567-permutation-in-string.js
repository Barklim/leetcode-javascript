/**
 * 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 * Difficulty: Medium
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const getCharCode = c => c.charCodeAt() - 'a'.charCodeAt();
  const isMatch = (a1, a2) => a1.every((n, i) => a2[i] === n);

  if (s1.length > s2.length) {
    return false;
  }

  const map1 = new Array(26).fill(0);
  const map2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    map1[getCharCode(s1[i])]++;
    map2[getCharCode(s2[i])]++;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (isMatch(map1, map2)) return true;
    map2[getCharCode(s2[i + s1.length])]++;
    map2[getCharCode(s2[i])]--;
  }

  return isMatch(map1, map2);
};

// 6 solutions

// var checkInclusion = function(s1, s2) {
//   if (s1.length > s2.length) return false;

//   // Массивы для подсчета количества букв
//   const s1arr = new Array(26).fill(0);
//   const s2arr = new Array(26).fill(0);

//   // Заполняем массивы для первых символов
//   for (let i = 0; i < s1.length; i++) {
//       s1arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//       s2arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//   }

//   // Проверка на соответствие
//   const matches = (s1arr, s2arr) => {
//       for (let i = 0; i < 26; i++) {
//           if (s1arr[i] !== s2arr[i]) return false;
//       }
//       return true;
//   };

//   // Сдвигаем окно по строке s2
//   for (let i = 0; i < s2.length - s1.length; i++) {
//       if (matches(s1arr, s2arr)) return true;

//       // Обновляем массивы для следующего окна
//       s2arr[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)]++;
//       s2arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//   }

//   // Последняя проверка на совпадение
//   return matches(s1arr, s2arr);
// };
