/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
};

const example1 = lowestCommonAncestor(); // root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 // 3
const example2 = lowestCommonAncestor(); // root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 // 5
const example3 = lowestCommonAncestor(); // root = [1,2], p = 1, q = 2 // 1
const example4 = lowestCommonAncestor(); // root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8 // 5
const example5 = lowestCommonAncestor(); // root = [5,3,8,1,4,7,9,null,2], p = 3, q = 4 // 3

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);