/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = x.toString();
  if(x > Math.pow(2, 31) || x < Math.pow(-2, 31) - 1) return 0;
  return (
    parseInt(
      str
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x)
  );
};
// @lc code=end
