/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let hash = {};
  let res = [];

  for (const word of words) {
    if (!(word in hash)) {
      hash[word] = 1;
    } else {
      hash[word] += 1;
    }
  }

  let entries = Object.entries(hash).sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (b[1] > a[1]) {
      return 1;
    } else {
      if (a[0] < b[0]) {
        return -1;
      } else if (b[0] < a[0]) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  for (let i = 0; i < k; i++) {
    res.push(entries[i][0]);
  }
  return res;
};
// @lc code=end
