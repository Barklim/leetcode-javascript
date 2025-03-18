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
 * @return {number[][]}
 */
var levelOrder = function(root) {

};

const testCases = [
    { input: [3,9,20,null,null,15,7], expected: [[3],[9,20],[15,7]]  },
    { input: [1], expected: [[1]] },
    { input: [] , expected: []  },
    { input: [1,2,3,4,5,6,7], expected: [[1],[2,3],[4,5,6,7]] }
];

const results = testCases.map(({ input }) => levelOrder(createTreeFromArray(input)));
console.log(results);
