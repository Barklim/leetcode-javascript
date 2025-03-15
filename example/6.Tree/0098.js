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
var isValidBST = function(root) {
    
};

const example1 = isValidBST(); // root = [2,1,3] // true
const example2 = isValidBST(); // root = [5,1,4,null,null,3,6] // false
const example3 = isValidBST(); // root = [1,2,3] // false

console.log(example1);
console.log(example2);
console.log(example3);