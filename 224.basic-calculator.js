/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */
/**
 * @param {string} s
 * @return {number}
 */
var stack = [];
var sign = 1, sum = 0;

//loop through str and check what each idx is
//if number, find the whole number and update sum with sign
//if +, update sign
//if -, update sign
//if (, push curr sum and sign to stack, reset sum and sign
//if ), update sum to sum * sign (since sign was added last) and add sum
for (let i = 0; i < s.length; i++) {
  //number
  if (s[i] >= '0' && s[i] <= '9') {
    let num = 0;
    while (s[i] >= '0' && s[i] <= '9') {
      num *= 10;
      num += parseInt(s[i]);
      i++;
    }
    sum += num * sign
    i--;
  } else if (s[i] === '+') {
    sign = 1;
  } else if (s[i] === '-') {
    sign = -1;
  } else if (s[i] === '(') {
    stack.push(sum);
    stack.push(sign);
    sum = 0;
    sign = 1;
  } else if (s[i] === ')') {
    sum = stack.pop() * sum; //pop off sign
    sum += stack.pop(); //add current sum to previous sum
  }
}
return sum;
