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
var largestValues = function(root) {
    
};

const testCases = [
    { input: [1,3,2,5,3,null,9], expected: [1,3,9]  },
    { input: [1,2,3], expected: [1,3] },
    { input: [] , expected: []  },
];

const results = testCases.map(({ input }) => largestValues(createTreeFromArray(input)));
console.log(results);

// function largestValues(root) {
//     if (!root) return [];
  
//     let result = [];
//     let queue = [root];
  
//     while (queue.length) {
//       let levelSize = queue.length;
//       let levelMax = -Infinity;
  
//       for (let i = 0; i < levelSize; i++) {
//         let node = queue.shift();
//         levelMax = Math.max(levelMax, node.val);
  
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//       }
  
//       result.push(levelMax);
//     }
  
//     return result;
// }