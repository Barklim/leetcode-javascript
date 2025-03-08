/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {

};

const example1 = minimumRecolors('WBBWWBBWBW', 7); // 3
const example2 = minimumRecolors('WBWBBBW', 2); // 0
const example3 = minimumRecolors('WWBWBB', 4); // 1

console.log(example1);
console.log(example2);
console.log(example3);

// var minimumRecolors = function(blocks, k) {
//     let begin = 0
//     let window_state = 0
//     let result = Infinity;

//     for (let end = 0; end < blocks.length; end++) {
//         if (blocks[end] === 'W') {
//             window_state += 1
//         }

//         while (end - begin + 1 === k) {
//             result = Math.min(result, window_state)
//             if (blocks[begin] === 'W') {
//                 window_state -= 1
//             }
//             begin++
//         }
//     }

//     if (result === Infinity) return 0
//     return result
// };

