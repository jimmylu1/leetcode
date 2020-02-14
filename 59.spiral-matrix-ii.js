/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = []
  for(let i = 0; i < n; i++) {
    res.push([]);
  }
  if(n === 0) return res;
  let counter = 1;
  let rowStart = 0, rowEnd = n - 1;
  let colStart = 0, colEnd = n - 1;

  while(rowStart <= rowEnd && colStart <= colEnd) {
    //go right
    for(let i = colStart; i <= colEnd; i++) {
      res[rowStart][i] = counter;
      counter++;
    }
    rowStart++;
    //go down
    for(let i = rowStart; i <= rowEnd; i++) {
      res[i][colEnd] = counter;
      counter++;
    }
    colEnd--;
    //go left
    if(rowStart <= rowEnd) {
      for(let i = colEnd; i >= colStart; i--) {
        res[rowEnd][i] = counter;
        counter++;
      }
      rowEnd--;
    }
    //go up
    if(colStart <= colEnd) {
      for(let i = rowEnd; i >= rowStart; i--) {
        res[i][colStart] = counter;
        counter++;
      }
      colStart++;
    }
  }
  return res;
}

console.log(generateMatrix(3));
// @lc code=end

