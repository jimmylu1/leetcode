/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    let map = ['0', '1', 'abc', 'def', 'ghi','jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    if(digits.length === 0) return res;
    recurse(digits, res, '', 0, map);
    return res;
};

var recurse = function(digits, res, curr, idx, map) {
  if(curr.length === digits.length) {
    res.push(curr);
    return;
  }
  let letters = map[digits[idx] - '0'];
  for(let i = 0; i < letters.length; i++) {
    recurse(digits, res, curr + letters[i], idx + 1, map);

  }
}
// @lc code=end

