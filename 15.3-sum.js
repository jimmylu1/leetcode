/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for(let i = 0; i < nums.length; i++) {
      let start = i + 1, end = nums.length - 1;
      while(start < end) {
        let currSum = nums[i] + nums[start] + nums[end];
        if(currSum === 0) {
          res.push([nums[i], nums[start], nums[end]]);
          while(start < end && nums[start] === nums[start + 1]) {
            start++;
          }
          start++;
          while(start < end && nums[end] === nums[end - 1]) {
            end--;
          }
          end--;
        } else if(currSum < 0) {
          start++;
        } else {
          end--;
        }
      }
      while(i < nums.length && nums[i] === nums[i + 1]) {
        i++;
      }
    }
    return res;
};
// @lc code=end

