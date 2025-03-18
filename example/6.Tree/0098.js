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

const testCases = [
    { input: [2,1,3], expected: true  },
    { input: [5,1,4,null,null,3,6], expected: false },
    { input: [1,2,3], expected: false },
    { input: [] , expected: true },
];

const results = testCases.map(({ input }) => isValidBST(createTreeFromArray(input)));
console.log(results);