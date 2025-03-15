/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
};

const example1 = invertTree(); // [4,2,7,1,3,6,9] //[ 4,7,2,9,6,3,1]
const example2 = invertTree(); // [2,1,3] // [2,3,1]
const example3 = invertTree(); // [] // []
const example4 = invertTree(); // [1,2,3,4,5,6,7] // [1,3,2,7,6,5,4]
const example5 = invertTree(); // [3,2,1] // [3,1,2]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);