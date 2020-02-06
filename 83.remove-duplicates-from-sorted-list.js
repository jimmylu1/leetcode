/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;

  let curr = head.next;
  let prev = head;

  while (curr) {
    if (prev.val !== curr.val) {
      prev.next = curr;
      prev = curr;
    }
    curr = curr.next;
  }
  prev.next = null;
  return head;
};
// @lc code=end

