/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  //l1 pointer l2 pointer
  //make new list
  //loop to end and add l1 and l2
  let temp = new ListNode(-1);
  let l3 = temp;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    l1.val = l1.val !== null ? l1.val : 0;
    l2.val = l2.val !== null ? l2.val : 0;

    let currSum = l1.val + l2.val + carry;
    carry = Math.floor(currSum / 10);
    let lastdigit = currSum % 10;

    let newNode = new ListNode(lastdigit);
    l3.next = newNode;

    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
    l3 = l3.next;
  }
  if (carry > 0) {
    let newCarry = new ListNode(carry);
    l3.next = newCarry;
    l3 = l3.next;
  }
  return temp.next;
};
// @lc code=end
