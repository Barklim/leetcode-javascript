/**
 * 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 * Difficulty: Medium
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 *
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  return matrix
    .filter(row => row[0] <= target && row[row.length - 1] >= target)
    .find(row => row.includes(target)) !== undefined;
};

// var searchMatrix = function(matrix, target) {
//   const ROWS = matrix.length;
//   const COLS = matrix[0].length;

//   let top = 0;
//   let bot = ROWS - 1;
//   while (top <= bot) {
//       const row = Math.floor((top + bot) / 2);
//       if (target > matrix[row][COLS - 1]) {
//           top = row + 1;
//       } else if (target < matrix[row][0]) {
//           bot = row - 1;
//       } else {
//           break;
//       }
//   }

//   if (!(top <= bot)) {
//       return false;
//   }
//   const row = Math.floor((top + bot) / 2);
//   let l = 0;
//   let r = COLS - 1;
//   while (l <= r) {
//       const m = Math.floor((l + r) / 2);
//       if (target > matrix[row][m]) {
//           l = m + 1;
//       } else if (target < matrix[row][m]) {
//           r = m - 1;
//       } else {
//           return true;
//       }
//   }
//   return false;
// };




// const searchMatrix = function (matrix, target) {
//   const rowIndex = findRow();
//   if (rowIndex === true) {
//     return true;
//   }
//   if (rowIndex < 0) {
//     return false;
//   }

//   return findNumInRow(matrix[rowIndex]);

//   function findRow() {
//     let start = 0;
//     let end = matrix.length - 1;

//     while (start <= end) {
//       const middle = Math.floor((start + end) / 2);
//       const potentialRow = matrix[middle];
//       const firstNumInRow = potentialRow[0];
//       const lastNumInRow = potentialRow[potentialRow.length - 1];

//       if (firstNumInRow === target || lastNumInRow === target) {
//         return true;
//       }

//       if (firstNumInRow < target && lastNumInRow > target) {
//         return middle;
//       }

//       if (target > lastNumInRow) {
//         start = middle + 1;
//       } else {
//         end = middle - 1;
//       }
//     }

//     return -1;
//   }

//   function findNumInRow(row) {
//     let start = 0;
//     let end = row.length - 1;

//     while (start <= end) {
//       const middle = Math.floor((start + end) / 2);
//       const potentialResult = row[middle];

//       if (potentialResult === target) {
//         return true;
//       }

//       if (target > potentialResult) {
//         start = middle + 1;
//       } else {
//         end = middle - 1;
//       }
//     }

//     return false;
//   }
// };
