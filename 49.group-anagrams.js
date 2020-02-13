/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};

    for(const str of strs) {
      let sorted = str.split('').sort().join('');

      if(!(sorted in hash)) {
        hash[sorted] = [str];
      } else {
        hash[sorted].push(str);
      }
    }
    return Object.values(hash);
};
// @lc code=end

