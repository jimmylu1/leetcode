/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   if (!s || s.length <= 1) {
//     return s;
//   }

//   //initialize longest pal
//   let longest = s.substring(0, 1);

//   for (let i = 0; i < s.length; i++) {
//     //if center of pal is 1 char
//     let temp = expand(s, i, i);
//     if (temp.length > longest.length) {
//       longest = temp;
//     }
//     //if center of pal is 2 char
//     temp = expand(s, i, i + 1);
//     if (temp.length > longest.length) {
//       longest = temp;
//     }
//   }
//   return longest;
// };

// var expand = (s, begin, end) => {
//   //boundaries
//   while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
//     begin--;
//     end++;
//   }
//   return s.substring(begin + 1, end);
// };

var longestPalindrome = s => {
  var len = s.length;
  if (len <= 1) return s;

  //initiate longest substr as first letter
  let longest = s.substring(0, 1);

  //loop through

  for (let i = 0; i < len; i++) {
    let temp = expand(s, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }
    temp = expand(s, i, i + 1);
    if(temp.length > longest.length) {
      longest = temp
    }
  }
  return longest;
};

var expand = (s, start, end) => {
  while (start >= 0 && end <= s.length - 1 && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.substring(start + 1, end);
};
