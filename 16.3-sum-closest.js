/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    //similar approach to 3sum, need to utilize binary search to find which is closest to target
    //need to have something to keep track of current smallest to target

    nums.sort((a, b) => a - b);
    //set closest to infinity cause need to find min between current and next possible closest and update
    let closest = Infinity;
    for(let i = 0; i < nums.length - 2; i++) {
      let start = i + 1, end = nums.length - 1;
      while(start < end) {
        let currSum = nums[i] + nums[start] + nums[end];
        //update closest to min of current closest and next current sum
        if(Math.abs(currSum - target) < Math.abs(closest - target)) {
          closest = currSum;
        }
        if(currSum < target) {
          start++;
        } else {
          end--;
        }
      }
    }
    return closest;
};
// @lc code=end

