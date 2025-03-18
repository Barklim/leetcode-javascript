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

const testCases = [
    { input: [1,2,3,2,null,2,4], target: 2, expected: [1,null,3,null,4]  },
    { input: [1,3,3,3,2], target: 3, expected: [1,3,null,null,2] },
    { input: [1,2,null,2,null,2], target: 2, expected: [1] },
    { input: [] , expected: []  },
];

const results = testCases.map(({ input }) => removeLeafNodes(createTreeFromArray(input)));
const print = results.map(res => levelOrder(res)) 

console.log(results);
console.log(print);

// Not working
// function removeLeafNodes(root, target) {
//     if (!root) return null;
  
//     root.left = removeLeafNodes(root.left, target);
//     root.right = removeLeafNodes(root.right, target);
  
//     if (!root.left && !root.right && root.val === target) {
//       return null;
//     }
  
//     return root;
// }