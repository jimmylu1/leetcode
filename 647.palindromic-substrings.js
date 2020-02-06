/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = s.length;
  let next;

  var ispal = function(left, right) {
    while (left >= 0 && right < s.length && s[right] === s[left]) {
      count++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    next = i + 1;
    ispal(i - 1, next);
    ispal(i, next);
  }
  return count;
}
