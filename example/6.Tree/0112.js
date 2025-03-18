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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
};  

const testCases = [
    { input: [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum: 22, expected: true  },
    { input: [1,2,3], targetSum: 5, expected: false },
    { input: [] , targetSum: 0, expected: false },
];

const results = testCases.map(({ input, targetSum }) => hasPathSum(createTreeFromArray(input), targetSum));
console.log(results);