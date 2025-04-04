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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
};

const example1 = rightSideView(); // [1,2,3,null,5,null,4] // [1,3,4]
const example2 = rightSideView(); // root = [1,2,3,4,null,null,null,5] // [1,3,4,5]
const example3 = rightSideView(); // root = [1,null,3] //  [1,3]
const example4 = rightSideView(); // root = [] //  []
const example5 = rightSideView(); // root = [1,2,3] // [1,3]
const example6 = rightSideView(); // root = [1,2,3,4,5,6,7] // [1,3,7]

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);