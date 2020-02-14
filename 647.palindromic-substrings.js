/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // in case s is null or empty, return 0
  if (!s) return 0;

  let count = 0;

  for (let i = 0; i < s.length; ++i) {
    // count all possible odd length palindromic substrings whose mid-point is at i
    count += countPalindrome(s, i, i);
    // count all possible even length palindromic substrings whose mid-point is in between i and i + 1
    count += countPalindrome(s, i, i + 1);
  }
  return count;
};

var countPalindrome = function (s, left, right) {
  let count = 0;
  // expand substring to both side, each time increase size by 2
  // if substring after expansion is still palindromic, keep expanding and update count
  // otherwise, stop expansion and return the count
  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      left--;
      right++;
      count += 1;
    }
    else break;
  }
  return count;
}
