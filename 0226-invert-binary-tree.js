/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 * Difficulty: Easy
 *
 * Invert a binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
var invertTree = function(node) {
  if (node) [node.left, node.right] = [invertTree(node.right), invertTree(node.left)];
  return node;
};

// var invertTree = function(root) {
//   if (root === null) return null;

//   const node = new TreeNode(root.value);

//   node.right = invertTree(root.left);
//   node.left = invertTree(root.right);

//   return node;
// };

// var invertTree = function(root) {
//   if (root == null) return null;
//   const queue = new Queue([root]);
//   while (!queue.isEmpty()) {
//       let node = queue.pop();
//       [node.left, node.right] = [node.right, node.left];
//       if (node.left != null) queue.push(node.left);
//       if (node.right != null) queue.push(node.right);
//   }
//   return root;
// }
