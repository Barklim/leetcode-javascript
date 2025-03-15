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
var isBalanced = function(root) {
    
};

const example1 = isBalanced(); // root = [3,9,20,null,null,15,7] // true
const example2 = isBalanced(); // root = [1,2,2,3,3,null,null,4,4] // false
const example3 = isBalanced(); // root = [] // true
const example4 = isBalanced(); // root = [1,2,3,null,null,4] // true
const example5 = isBalanced(); // root = [1,2,3,null,null,4,null,5] // false

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);