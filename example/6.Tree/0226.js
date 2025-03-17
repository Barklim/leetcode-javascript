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
 * @return {TreeNode}
 */
var invertTree = function(root) {

};

const testCases = [
    { input: [4,2,7,1,3,6,9], expected: [ 4,7,2,9,6,3,1] },
    { input: [2,1,3], expected: [2,3,1] },
    { input: [], expected: [] },
    { input: [1,2,3,4,5,6,7], expected: [1,3,2,7,6,5,4] },
    { input: [3,2,1], expected: [3,1,2] }
];

const results = testCases.map(({ input }) => invertTree(createTreeFromArray(input)));
var myTreeStringify = JSON.stringify(results, null, 2);
console.log(myTreeStringify);
