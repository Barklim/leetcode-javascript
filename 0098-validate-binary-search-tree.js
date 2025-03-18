/**
 * 98. Validate Binary Search Tree
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Difficulty: Medium
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
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
var isValidBST = function(root) {
  return traverse(root, null, null);
};

function traverse(root, min, max) {
  if (!root) {
    return true;
  }

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }

  return traverse(root.left, min, root.val) && traverse(root.right, root.val, max);
}

// function isValidBST(root) {
//   if (!root) return true;

//   let stack = [[root, -Infinity, Infinity]];

//   while (stack.length) {
//     let [node, minR, maxR] = stack.pop();
//     if (!node) continue;

//     if (node.val <= minR || node.val >= maxR) {
//       return false;
//     }

//     stack.push([node.left, minR, node.val]);
//     stack.push([node.right, node.val, maxR]);
//   }

//   return true;
// }
