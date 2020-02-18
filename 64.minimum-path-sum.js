/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp = [...grid];

  if(grid.length === 0) return 0;

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if (i > 0 && j > 0) {
        dp[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      } else if(i > 0) {
        dp[i][j] += dp[i - 1][j];
      } else if(j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};




// console.log(minPathSum([
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]))
