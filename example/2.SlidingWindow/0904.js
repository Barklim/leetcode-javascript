/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {

};

const example1 = totalFruit([1,2,1]); // 3
const example2 = totalFruit([0,1,2,2]); // 3
const example3 = totalFruit([1,2,3,2,2]); // 4
const example4 = totalFruit([4,5,6]); // 2
const example5 = totalFruit([4,5,5,5,1,6,6]); // no 5 -> 4 [4,5,5,5]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);

// var totalFruit = function(fruits) {
//     let begin = 0;
//     let window_state = new Map();
//     let result = 0;

//     for (let end = 0; end < fruits.length; end++) {
//         window_state.set(fruits[end], (window_state.get(fruits[end]) || 0) + 1);

//         while (window_state.size > 2) {
//             window_state.set(fruits[begin], window_state.get(fruits[begin]) - 1);
//             if (window_state.get(fruits[begin]) === 0) {
//                 window_state.delete(fruits[begin]);
//             }
//             begin++;
//         }

//         result = Math.max(result, end - begin + 1);
//     }

//     return result;
// };