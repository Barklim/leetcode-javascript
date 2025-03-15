/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
};

const example1 = isSameTree(); // p = [1,2,3], q = [1,2,3] // true
const example2 = isSameTree(); // p = [1,2], q = [1,null,2] // false
const example3 = isSameTree(); // p = [1,2,1], q = [1,1,2] // false

console.log(example1);
console.log(example2);
console.log(example3);