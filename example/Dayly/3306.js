/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countVowelSubstrings = function(word, k) {

};

const example1 = countVowelSubstrings('aeiouu', 0); // 2
const example2 = countVowelSubstrings('unicornarihan', 0); // 0
const example3 = countVowelSubstrings('cuaieuouac', 0); // 7
const example4 = countVowelSubstrings('aeioqq', 1); // 0
const example5 = countVowelSubstrings('aeiou', 0); // 1
const example6 = countVowelSubstrings('ieaouqqieaouqq', 1); // 3

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);

// var countVowelSubstrings = function(word, k) {
//     return solve(word, k) - solve(word, k + 1);
// };

// var solve = function(word, k) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let vowelMap = new Map();
//     let result = 0;
//     let consonants = 0;
//     let left = 0;

//     for (let right = 0; right < word.length; right++) {
//         let char = word[right];

//         if (vowels.has(char)) {
//             vowelMap.set(char, (vowelMap.get(char) || 0) + 1);
//         } else {
//             consonants++;
//         }

//         while (vowelMap.size === 5 && consonants >= k) {
//             result += word.length - right;
//             let leftChar = word[left];

//             if (vowels.has(leftChar)) {
//                 vowelMap.set(leftChar, vowelMap.get(leftChar) - 1);
//                 if (vowelMap.get(leftChar) === 0) {
//                     vowelMap.delete(leftChar);
//                 }
//             } else {
//                 consonants--;
//             }
//             left++;
//         }
//     }

//     return result;
// }