/**
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/
 * Difficulty: Easy
 *
 * Given a binary tree, determine if it is height-balanced.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;
  return isBalanced(root.right) && isBalanced(root.left)
    && Math.abs(traverse(root.right) - traverse(root.left)) < 2;
};

function traverse(node, depth = 0) {
  if (!node) return depth;
  return Math.max(traverse(node.right, depth + 1), traverse(node.left, depth + 1));
}

// function isBalanced(root) {
//   function height(node) {
//     if (!node) return 0;
//     return 1 + Math.max(height(node.left), height(node.right));
//   }

//   if (!root) return true;

//   let leftH = height(root.left);
//   let rightH = height(root.right);

//   if (Math.abs(leftH - rightH) > 1) return false;

//   return isBalanced(root.left) && isBalanced(root.right);
// }

