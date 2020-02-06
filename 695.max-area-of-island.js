/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;
  //need to loop through grid and find first occurance of 1 and find its area
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 1) {
        //update max if new area is greater than current max
        max = Math.max(max, findMax(i, j, grid));
      }
    }
  }
  return max;
};

var findMax = function(i, j, grid) {
  let height = grid.length, width = grid[0].length;

  //make sure we stay within the bounds of the grid
  if(i === height || i < 0 || j === width || j < 0 || grid[i][j] !== 1) return 0;

  //current size is 1 because we are at a 1,
  let size = 1;

  //need to mark spots we have already seen 
  grid[i][j] = 0;

  //recurse through up, down, left, right to find all 1's near by and add to current size
  size += findMax(i + 1, j, grid);
  size += findMax(i - 1, j, grid);
  size += findMax(i, j + 1, grid);
  size += findMax(i, j - 1, grid);

  return size;

}
// @lc code=end

