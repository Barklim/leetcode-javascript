/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {

};

const example1 = numberOfAlternatingGroups([0,1,0,1,0], 3); // 3
const example2 = numberOfAlternatingGroups([0,1,0,0,1,0,1], 6); // 2
const example3 = numberOfAlternatingGroups([1,1,0,1], 4); // 0
const example4 = numberOfAlternatingGroups([1,1,1,1,1,1,0,1], 2); // 2

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);

// var numberOfAlternatingGroups = function(colors, k) {
//     colors.push(...colors.slice(0, k - 1));
//     let begin = 0;
//     let result = 0;

//     for (let end = 0; end < colors.length; end++) {
//         if (colors[end] === colors[end - 1]) {
//             begin = end
//         }

//         if (end - begin + 1 >= k) {
//             result++
//         }
//     }

//     return result
// };