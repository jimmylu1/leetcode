/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let height = matrix.length;
    let width = matrix[0].length;
    let max = 0;

    let dp = new Array(height).fill(0).map((e) => new Array(width).fill(0))

    for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
        if(matrix[i][j] === '0') {
          dp[i][j] === 0
        } else {
          dp[i][j]
        }
      }
    }

};

