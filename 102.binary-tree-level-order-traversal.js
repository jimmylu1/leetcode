/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  let res = [];
  let q = [root];

  while (q.length) {
    let length = q.length;
    let layer = [];
    for (let i = 0; i < length; i++) {
      let curr = q.shift();
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
      layer.push(curr.val);
    }
    res.push(layer);
  }
  return res;
};
