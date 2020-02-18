/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //keep track of how many ways to get to each square with new dp array
    //fill dp array with 1's as there is at least one way to get to each square
    //if in either first row or first column, keep as one since we can only go up or down to get to that square
    //return coordinate of square we want to get to (dp[dp.length - 1][dp[0].length - 1]);

    let dp = [];
    for(let i = 0; i < m; i++) {
      dp[i] = [];
      for(let j = 0; j < n; j++) {
        dp[i][j] = 1;
      }
    }
    for(let i = 1; i < m; i++) {
      for(let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    return dp[dp.length - 1][dp[0].length - 1];
};
// @lc code=end

