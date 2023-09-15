/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/
function makeNegative(num) {
  // Code?
  if (num === 0) {//we don't check for 0;
    return 0;
  } else if (num < 0) {//num is already negative number
    return num;
  } else { //num is positive number
    return -num;
  }
}
/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
  let positiveSum = 0;
  if (arr.length > 0) {
    arr.forEach((elem) => {
      if (elem > 0) {
        positiveSum += elem;
      }
    });
  } else {//array length is 0 or no number to add
    positiveSum = 0
  }
  return positiveSum;
}
/*
Now you have to write a function that takes an argument and returns the square of it.
*/
// Write the "square"-function here
function square(num) {
  return Math.pow(num, 2);
}
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/
// Sum Numbers
function sum(numbers) {
  "use strict";
  let sum = 0;
  if (numbers.lenght <= 0) {
    return 0;
  } else {
    numbers.forEach((num) => {
      sum += num;
    });
  }
  return sum;
};
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function strReverse(str) {
  let strArray = str.split("");//pars the string into an array
  strArray.reverse();// reverse the array
  return strArray.join("");//join back the array to a string and return it
}