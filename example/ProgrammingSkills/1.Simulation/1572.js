/**
 * @param {string} s
 * @return {number}
 */
var diagonalSum = function(mat) {

};

const example1 = diagonalSum([[1,2,3],[4,5,6],[7,8,9]]); // 25
const example2 = diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]); // 8

console.log(example1);
console.log(example2);

// var diagonalSum = function(mat) {
//     let n = mat.length;
//     let row = 0;

//     const lambda = (sum, vec) => {
//         sum += vec[row];
//         if (row !== n - row - 1) sum += vec[n - row - 1];
//         row++;
//         return sum;
//     };

//     return mat.reduce(lambda, 0);
// };