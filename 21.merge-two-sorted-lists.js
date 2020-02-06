/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let temp = new ListNode(-1);
  let p1 = l1;
  let p2 = l2;
  let curr = temp;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
      curr = curr.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
      curr = curr.next;
    }
  }
  if (!l2) curr.next = l1;
  if (!l1) curr.next = l2;
  return temp.next;
};
