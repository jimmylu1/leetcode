/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let last = nums.length - 1;
  nums.sort((a, b) => b - a);

  const [first, second, third] = nums;

  return Math.max(nums[last] * nums[last - 1] * first, first * second * third);
};
