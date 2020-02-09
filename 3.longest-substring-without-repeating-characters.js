/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0, end = 0;
    let max = 0;
    let hash = {};

    while(end < s.length) {
      if(!(s[end] in hash)) {
        hash[s[end]] = end;
        end++;
        max = Math.max(max, Object.keys(hash).length);
      } else {
        delete hash[s[start]];
        start++;
      }
    }
    return max;
};
// @lc code=end

