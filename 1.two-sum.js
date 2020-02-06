/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (temp in map) {
      return [map[temp], i];
    }
    map[nums[i]] = i;
  }
  return null;
};
