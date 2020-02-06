/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let hash = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === hash[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return (stack.length === 0 ? true : false);
};

// var isValid = function (s) {
//   let map = {
//     ")": "(",
//     "]": "[",
//     "}": "{"
//   }
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//       arr.push(s[i]);
//     }
//     else {
//       if (arr[arr.length - 1] === map[s[i]]) {
//         arr.pop();
//       }
//       else return false;
//     }
//   }
//   return arr.length === 0 ? true : false;
// };
// @lc code=end
