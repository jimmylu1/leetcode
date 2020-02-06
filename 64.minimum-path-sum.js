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
  if(grid.length === 0) return 0;

  let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      dp[i][j] += grid[i][j]

      if(i > 0 && j > 0) {
        dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])
      } else if(i > 0) {
        dp[i][j] += dp[i - 1][j]
      } else if(j > 0) {
        dp[i][j] += dp[i][j - 1]
      }
    }
  }
return dp[grid.length - 1][grid[0].length - 1]
};

// var minPathSum = function(grid) {
//   if(grid === null || grid.length === 0) return 0;

//   //new dp array
//   let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))

//   //traverse through dp array to populate
//   for(let i = 0; i < dp.length; i++) {
//     for(let j = 0; j < dp[i].length; j++) {
//       dp[i][j] += grid[i][j]
//       //not in 0th row
//       //somewhere in grid not in 0th col/row
//       if(i > 0 && j > 0) {
//         dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])
//       } else if(i > 0) {
//         dp[i][j] += dp[i - 1][j]
//       } else if(j > 0) {
//         dp[i][j] += dp[i][j - 1]
//       }
//     }
//   }
//   return dp[grid.length - 1][grid[0].length - 1]
// }
