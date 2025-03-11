/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {

};

const example1 = numberOfSubstrings('abcabc'); // 10
const example2 = numberOfSubstrings('aaacb'); // 3
const example3 = numberOfSubstrings('abc'); // 1

console.log(example1);
console.log(example2);
console.log(example3);

// var numberOfSubstrings = function(s) {
//     return solve(s, 3) - solve(s, 2)
// };

// var solve = function(word, n) {
//     const vowels = new Set(['a', 'b', 'c'])
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