/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //have dp arr to keep track of current greatest sum at given idx
    //update each idx to be next greatest sum
    let dp = [];
    dp[0] = nums[0];
    max = dp[0];

    for(let i = 1; i < nums.length; i++) {
      //update next idx of dp to be current number or current number + previous sum
      dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
      //update max from current max or new dp[i];
      max = Math.max(max, dp[i]);
    }
    return max;
};
// @lc code=end

