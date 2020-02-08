/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    let q = [root];
    if(!root) return res;

    while(q.length !== 0) {
      let len = q.length;
      let layer = [];
      for(let i = 0; i < len; i++) {
        let curr = q.shift();
        if(curr.left) {
          q.push(curr.left);
        } 
        if(curr.right) {
          q.push(curr.right);
        }
        layer.push(curr.val);
      }
      res.unshift(layer);
    }
    return res;
};
// @lc code=end

