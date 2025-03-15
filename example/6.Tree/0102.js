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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
};

const example1 = levelOrder(); // root = [3,9,20,null,null,15,7] // [[3],[9,20],[15,7]] 
const example2 = levelOrder(); // root = [1] // [[1]]
const example3 = levelOrder(); // root = [] // []
const example4 = levelOrder(); // root = [1,2,3,4,5,6,7] // [[1],[2,3],[4,5,6,7]]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);