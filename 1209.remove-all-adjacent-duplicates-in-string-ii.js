/*
 * @lc app=leetcode id=1209 lang=javascript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = (s, k) => {
  const stack = []

  for (const char of s) {
    if (!stack.length)
      stack.push([char, 1])
    else if (stack[stack.length - 1][0] != char)
      stack.push([char, 1])
    else if (stack[stack.length - 1][1] < k - 1)
      stack[stack.length - 1][1] += 1
      //if reach max
    else
      stack.pop()
  }
  return stack.map(item => item[0].repeat(item[1])).join('')
};

console.log(removeDuplicates('abbcccb', 3));
// @lc code=end


