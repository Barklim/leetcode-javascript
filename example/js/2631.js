/**
 * 2631. Group By
 * https://leetcode.com/problems/group-by/
 * Difficulty: Medium
 *
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any
 * array and it will return a grouped version of the array.
 *
 * A grouped array is an object where each key is the output of fn(arr[i]) and each value is an
 * array containing all items in the original array which generate that key.
 *
 * The provided callback fn will accept an item in the array and return a string key.
 *
 * The order of each value list should be the order the items appear in the array. Any order of
 * keys is acceptable.
 *
 * Please solve it without lodash's _.groupBy function.
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {

};

const array1 = [
    {id: 1},
    {id: 1},
    {id: 2}
]

const fn = (item) => item.id

console.log(array1.groupBy(fn))
// {
//     1: [{id: 1}, {id: 1}],
//     2: [{id: 2}]
// }

// Ex2
const array2 = [1, 2, 3]
console.log(array2.groupBy(String))
// {
//     "1": [1],
//     "2": [2],
//     "3": [3],
// }

// Ex3
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fn3 = function (n) { 
    return String(n > 5);
}
console.log(array3.groupBy(fn3))