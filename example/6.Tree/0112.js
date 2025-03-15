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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
};

const example1 = hasPathSum(); // root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22 // true
const example2 = hasPathSum(); // root = [1,2,3], targetSum = 5 // false
const example3 = hasPathSum(); // root = [], targetSum = 0 // false

console.log(example1);
console.log(example2);
console.log(example3);