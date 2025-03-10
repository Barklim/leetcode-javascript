/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    
};

const example1 = countVowelSubstrings('aeiouu'); // 2
const example2 = countVowelSubstrings('unicornarihan'); // 0
const example3 = countVowelSubstrings('cuaieuouac'); // 7

console.log(example1);
console.log(example2);
console.log(example3);

// var countVowelSubstrings = function(word) {
//     return solve(word, 5) - solve(word, 4)
// };

// var solve = function(word, n) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
//     const freqMap = new Map()
//     let l = 0, r = 0, result = 0

//     while (r < word.length) {
//         if (vowels.has(word[r])) {
//             freqMap.set(word[r], (freqMap.get(word[r]) || 0) + 1)
//         } else {
//             freqMap.clear()
//             l = r + 1
//         }

//         while (freqMap.size > n) {
//             freqMap.set(word[l], freqMap.get(word[l]) - 1)
//             if (freqMap.get(word[l]) === 0) {
//                 freqMap.delete(word[l])
//             }
//             l++
//         }

//         result += r - l + 1
//         r++
//     }

//     return result
// }