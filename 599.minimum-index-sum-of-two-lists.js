/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    //need to keep track of min
    //loop through first array and store in hash {"shogun" : [0]};
    //loop through second array, if in hash, update to {"shogun": [0, 4]};
    //in second array, if added, update min

  let hash = {};
  for (let i = 0; i < list1.length; i++) {
    hash[list1[i]] = i;
  }
  let min = Infinity;
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in hash) {
      min = Math.min(min, hash[list2[i]] + i);
    }
  }
  return list2.filter((place, i) => hash[place] + i === min);
};
// @lc code=end

