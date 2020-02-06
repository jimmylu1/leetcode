/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */
/**
 * @param {string} s
 * @return {number}
 */
// var calculate = function(s) {
//   var len = s.length;
//   if (len === 0) {
//     return 0;
//   }

//   var stack = [];
//   var res = 0;
//   var sign = 1;

//   for (let i = 0; i < len; i++) {
//     var n = s.charAt(i);
//     if (!isNaN(parseInt(n))) {
//       var cur = parseInt(n);
//       while (i + 1 < len && !isNaN(parseInt(s.charAt(i + 1)))) {
//         cur = 10 * cur + parseInt(s.charAt(++i));
//       }
//       res += sign * cur;
//     } else if (n == "-") {
//       sign = -1;
//     } else if (n == "+") {
//       sign = 1;
//     } else if (n == "(") {
//       stack.push(res);
//       res = 0;
//       stack.push(sign);
//       sign = 1;
//     } else if (n == ")") {
//       res = stack.pop() * res + stack.pop();
//       sign = 1;
//     }
//   }
//   return res;
// };

var calculate = s => {
  if(s.length === 0) {
    return 0
  }
  //need stack to store res if ()
  let stack = [];
  let res = 0;
  let sign = 1;

  for(let i = 0; i < s.length; i++) {
    let curr = s.charAt(i);
    //if current index is a num
    if(!isNaN(parseInt(curr))) {
      let temp = parseInt(curr);
      while(i + 1 < s.length && !isNaN(parseInt(s.charAt(i + 1)))) {
        temp = temp * 10 + parseInt(s.charAt(++i));
      }
      //update res
      res += sign * temp
    } else if(curr === '-') {
      sign = -1;
    } else if(curr === '+') {
      sign = 1;
    } else if(curr === '(') {
      stack.push(res);
      //reset res
      res = 0;
      stack.push(sign);
      sign = 1;
    } else if(curr === ')') {
      res = stack.pop() * res + stack.pop();
      sign = 1;
    }
  }
  return res;
};
