/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let l = 1, r = nums.length - 1, average = nums.length / 2;

  while (l < r) {

    let sum = 0, count = 0, leftCount = 0;

    for (let i = 0; i < nums.length; i++) {

      if (nums[i] >= l && nums[i] <= r) {
        sum += nums[i];
        count++;
        if (average >= nums[i]) leftCount++;
      }

    }

    if (average > sum / count || leftCount > count - leftCount) r = Math.floor(average);
    else l = Math.ceil(average);

    average = (l + r) / 2;

  }

  return l;



};
// @lc code=end

