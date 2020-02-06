/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //change to str
    let str = x.toString();
    return str == str.split('').reverse().join('');
    
};


// @lc code=end

