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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    
};

const example1 = insertIntoBST(); // root = [4,2,7,1,3], val = 5 // [4,2,7,1,3,5]
const example2 = insertIntoBST(); // root = [40,20,60,10,30,50,70], val = 25 // [40,20,60,10,30,50,70,null,null,25]
const example3 = insertIntoBST(); //root = [4,2,7,1,3,null,null,null,null,null,null], val = 5 // [4,2,7,1,3,5]

console.log(example1);
console.log(example2);
console.log(example3);