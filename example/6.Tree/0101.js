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
var isSymmetric = function(root) {
    
};

const testCases = [
    { input: [1,2,2,3,4,4,3], expected: true  },
    { input: [1,2,2,null,3,null,3], expected: false },
    { input: [1,2,3,null,null,4], expected: false },
    { input: [] , expected: true  },
];

const results = testCases.map(({ input }) => isSymmetric(createTreeFromArray(input)));
console.log(results);