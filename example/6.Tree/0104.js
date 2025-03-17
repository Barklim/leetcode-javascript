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
 * @return {number}
 */
var maxDepth = function(root) {

};

const testCases = [
    { input: [3,9,20,null,null,15,7], expected: 3 },
    { input: [1,null,2], expected: 2 },
    { input: [1,2,3,null,null,4], expected: 3 },
    { input: [], expected: 0 }
];

const results = testCases.map(({ input }) => maxDepth(createTreeFromArray(input)));

console.log(results);
