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
  //sorted array so we can implement binary search
    nums.sort((a, b) => a - b);
    let res = [];

    //loop through our sorted array and start pointer at next idx and end pointer 
    //end of array
    for(let i = 0; i < nums.length; i++) {
      let start = i + 1, end = nums.length - 1;
      //binary search
      while(start < end) {
        let currSum = nums[i] + nums[start] + nums[end];
        if(currSum === 0) {
          res.push([nums[i], nums[start], nums[end]]);
          //need to check for duplicates, if nums[start] == nums[start + 1] need to increment start
          while(start < end && nums[start] === nums[start + 1]) {
            start++;
          }
          start++;
          //same check as start for ending
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
      //need to check if current number is the same number as previously checked
      while(i < nums.length && nums[i] === nums[i + 1]) {
        i++;
      }
    }
    return res;
};
// @lc code=end

