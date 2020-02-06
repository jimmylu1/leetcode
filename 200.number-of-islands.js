/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function(grid) {
//   if (grid.length === 0) return 0;

//   var numIslands = 0;

//   //height
//   for (let i = 0; i < grid.length; i++) {
//     //width
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === "1") {
//         numIslands++;
//         check(grid, i, j);
//       }
//     }
//   }
//   return numIslands;
// };

// var check = function(grid, i, j) {
//   let height = grid.length;
//   let width = grid[0].length;

//   if (i < 0 || i > height - 1) {
//     return;
//   }
//   if (j < 0 || j > width - 1) {
//     return;
//   }
//   if (grid[i][j] !== "1") {
//     return;
//   }

//   //mark visited
//   grid[i][j] = "X";

//   check(grid, i - 1, j);
//   check(grid, i + 1, j);
//   check(grid, i, j - 1);
//   check(grid, i, j + 1);
// };

// var numIslands = function(grid) {
//   if (grid.length === 0) return 0;

//   let res = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === "1") {
//         res++;
//         check(grid, i, j);
//       }
//     }
//   }
//   return res;
// };

// var check = function(grid, i, j) {
//   let height = grid.length;
//   let width = grid[0].length;

//   if (i < 0 || i > grid.length - 1) return;
//   if (j < 0 || j > grid[0].length - 1) return;
//   if (grid[i][j] !== "1") return;

//   grid[i][j] = "X";

//   check(grid, i - 1, j);
//   check(grid, i + 1, j);
//   check(grid, i, j + 1);
//   check(grid, i, j - 1);
// };

var numIslands = function(grid) {
  let num = 0;

  for(let i =0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === '1') {
        num++
        check(i, j, grid)
      }
    }
  }
  return num;
};

var check = (i, j, grid) => {
  let height = grid.length;
  let width = grid[0].length;

  if(i < 0 || i === height) return;
  if(j < 0 || j === width) return;
  if(grid[i][j] !== '1') return;

  grid[i][j] = 'X';

  check(i + 1, j, grid);
  check(i - 1, j, grid);
  check(i, j + 1, grid);
  check(i, j - 1, grid);
}

