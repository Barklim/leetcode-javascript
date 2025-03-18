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

const testCases = [
    { input: [3,9,20,null,null,15,7], expected: true  },
    { input: [1,2,2,3,3,null,null,4,4], expected: false },
    { input: [] , expected: true  },
    { input: [1,2,3,null,null,4], expected: true },
    { input: [1,2,3,null,null,4,null,5], expected: false }
];

const results = testCases.map(({ input }) => isBalanced(createTreeFromArray(input)));
console.log(results);