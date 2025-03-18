/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values. (i.e., from left to right, level by level).
 */

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
  const result = [];

  traverse(result, root);

  return result;
};

function traverse(result, node, level = 0) {
  if (!node) {
    return [];
  }

  result[level] = result[level] || [];
  result[level].push(node.val);

  traverse(result, node.left, level + 1);
  traverse(result, node.right, level + 1);
}

// function levelOrder(root) {
//   if (!root) return [];

//   let result = [];
//   let queue = [root];

//   while (queue.length) {
//     let levelSize = queue.length;
//     let currentLevel = [];

//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       currentLevel.push(node.val);

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     result.push(currentLevel);
//   }

//   return result;
// }

