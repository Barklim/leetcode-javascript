/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {

};

const example1 = repairCars([4,2,3,1], 10); // 16
const example2 = repairCars([5,1,8], 6); // 16

console.log(example1);
console.log(example2);

// var repairCars = function(ranks, cars) {
//     let left = 1
//     let right = Math.max(...ranks)*cars*cars

//     var canRepairAll = function(time) {
//         let totalCarsRepaired = 0
//         for (let rank of ranks) {
//             totalCarsRepaired += Math.floor(Math.sqrt(time/rank))
//             if (totalCarsRepaired >= cars) return true
//         }
//         return false
//     }

//     while (left < right) {
//         let mid  = Math.floor((left + right)/2)

//         if (canRepairAll(mid)) {
//             right = mid
//         } else {
//             left = mid + 1 
//         }
//     }

//     return left
// };