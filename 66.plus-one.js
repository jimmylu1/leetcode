/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = parseInt(digits.join(''))

    let res = num + 1;

    res.toString().split('');

    for(let i = 0; i < res.length; i++) {
      res[i] = parseInt(res[i]);
    }
    return res;
};

// console.log(plusOne([1, 2, 3, 4]))
// @lc code=end

