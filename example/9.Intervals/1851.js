/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    
};

const example1 = minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]); // [3,3,1,4]
const example2 = minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]); // [2,-1,4,6]
const example3 = minInterval([[1,3],[2,3],[3,7],[6,6]], [2,3,1,7,6,8]); // [2,2,3,5,1,-1]
const example4 = minInterval([[1,2],[2,3]]); // [[1,3]]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
