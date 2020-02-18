/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // if this is a 0, mark the row and column
      if (matrix[i][j] === 0) {
        markRow(matrix, i)
        markCol(matrix, j)
      }
    }
  }
  // convert all 'X' to 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'X') {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};

var markRow = function (matrix, i) {
  for (let j = 0; j < matrix[i].length; j++) {
    // do not mark 0
    if (matrix[i][j] !== 0) {
      matrix[i][j] = 'X'
    }
  }

}

var markCol = function (matrix, j) {
  for (let i = 0; i < matrix.length; i++) {
    // do not mark 0
    if (matrix[i][j] !== 0) {
      matrix[i][j] = 'X'
    }
  }
}

console.log(setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]))
// @lc code=end

