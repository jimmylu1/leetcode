/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//O(n) time O(1) space
var rotate = function(nums, k) {
    //simple approach to loop through k and pop last element and add to beginning of array
    for(let i = 0; i < k; i++) {
      let currRotated = nums.pop();
      nums.unshift(currRotated);
    }
    return nums;
};
// @lc code=end

