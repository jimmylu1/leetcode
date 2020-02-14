/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];

  let rowStart = 0, rowEnd = matrix.length - 1;
  let colStart = 0, colEnd = matrix[0].length - 1;

  if(matrix.length === 0) return res

  while(rowStart <= rowEnd && colStart <= colEnd) {
    //go right
    for(i = colStart; i <= colEnd; i++) {
      res.push(matrix[rowStart][i]);
    }
    rowStart++;
    //go down
    for(let i = rowStart; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }
    colEnd--;
    //go left
    if(rowStart <= rowEnd) {
      for(let i = colEnd; i >= colStart; i--) {
        res.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }
    //go up
    if(colStart <= colEnd) {
      for(let i = rowEnd; i >= rowEnd; i--) {
        res.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }
  return res;
};
// @lc code=end

