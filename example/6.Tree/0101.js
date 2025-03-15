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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
};

const example1 = isSymmetric(); // [1,2,2,3,4,4,3] // true
const example2 = isSymmetric(); // [1,2,2,null,3,null,3] // false
const example3 = isSymmetric(); // [1,2,3,null,null,4] // 3
const example4 = isSymmetric(); // [] // 0

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);