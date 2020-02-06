/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;

  return check(root.left, root.right);
};

var check = function(l, r) {
  if (!l && !r) return true;
  if ((!l && r) || (l && !r) || l.val !== r.val) return false;
  return check(l.left, r.right) && check(l.right, r.left);
};
// @lc code=end
