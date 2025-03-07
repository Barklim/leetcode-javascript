/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {

};

const example1 = closestPrimes(10, 19); // [11,13]
const example2 = closestPrimes(4, 6); //[-1,-1]
const example3 = closestPrimes(0 ,0); // [-1,-1]
const example4 = closestPrimes(16, 20); // [17,19]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);

// var closestPrimes = function(left, right) {
//     function isPrime(n) {
//         if (n < 2) return false;
//         if (n === 2 || n === 3) return true;
//         if (n % 2 === 0 || n % 3 === 0) return false;
//         for (let i = 5; i * i <= n; i += 6) {
//             if (n % i === 0 || n % (i + 2) === 0) return false;
//         }
//         return true;
//     }

//     let prevPrime = -1, minDiff = Infinity;
//     let result = [-1, -1];

//     for (let i = left; i <= right; i++) {
//         if (isPrime(i)) {
//             if (prevPrime !== -1 && i - prevPrime < minDiff) {
//                 minDiff = i - prevPrime;
//                 result = [prevPrime, i];
//             }
//             prevPrime = i;
//         }
//     }

//     return result;
// };