/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && dfs(i, j, board, 0, word)) {
        return true;
      }
    }
  }
  return false;
}

var dfs = function (i, j, board, idx, word) {
  let height = board.length, width = board[0].length;

  if (idx === word.length) return true;

  if (i === height || i < 0 || j === width || j < 0 || board[i][j] !== word[idx]) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = ' ';
  let found = dfs(i + 1, j, board, idx + 1, word) || dfs(i - 1, j, board, idx + 1, word) || dfs(i, j + 1, board, idx + 1, word) || dfs(i, j - 1, board, idx + 1, word);

  board[i][j] = temp;

  return found;
}
// @lc code=end

