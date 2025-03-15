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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    
};

const example1 = removeLeafNodes(); // root = [1,2,3,2,null,2,4], target = 2 // [1,null,3,null,4]
const example2 = removeLeafNodes(); // root = [1,3,3,3,2], target = 3 // [1,3,null,null,2]
const example3 = removeLeafNodes(); // root = [1,2,null,2,null,2], target = 2 // [1]

console.log(example1);
console.log(example2);
console.log(example3);