/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {

};

const example1 = arraySign([-1,-2,-3,-4,3,2,1]); // 1
const example2 = arraySign([1,5,0,2,-3]); // 0
const example3 = arraySign([-1,1,-1,1,-1]); // -1

console.log(example1);
console.log(example2);
console.log(example3);

// var arraySign = function(nums) {
//     let minusCount = 0;
//     for (const number of nums) {
//         if (number === 0) {
//             return 0
//         }

//         if (number < 0) {
//             minusCount += 1
//         }
//     }
//     return minusCount % 2 === 0 ? 1 : -1
// };