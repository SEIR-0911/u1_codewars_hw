## Return Negative

<!-- In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
Kata.MakeNegative(1);  // return -1
Kata.MakeNegative(-5); // return -5
Kata.MakeNegative(0);  // return 0
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. -->

//solution Q1
    const calculateNewNumber = (inputNumber) => {
        let newNumber; // Define newNumber variable
        switch (Math.sign(inputNumber)) { // S1. "Math.sign method retuns whether a number is negative, positive or zero. If the number is positive, this method returns 1. If the number is negative, it returns -1. If the number is zero, it returns 0."
          case -1:
            newNumber = inputNumber;
            console.log(`New Number: ${newNumber}`);
            break;
          case 1:
            newNumber = -inputNumber;
            console.log(`New Number: ${newNumber}`);
            break;
          default:
            console.log("Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.");
        }
      }
      // Call the function
      calculateNewNumber(-1);
      calculateNewNumber(-5);
      calculateNewNumber(0);

//S1. https://www.w3schools.com/jsref/jsref_sign.asp#:~:text=The%20Math.,negative%2C%20it%20returns%20%2D


## Sum of Positive

<!-- You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. -->

// //solution Q2
    const newArrayCalc = (array1) => {
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        switch (Math.sign(array1[i])) {
        case -1:
            // Do nothing with this index if it is a negitive number
            break;
        case 1:
            sum += array1[i]; //S1. https://reqbin.com/code/javascript/m81eb1ms/javascript-sum-array-example#:~:text=How%20to%20find%20the%20sum,removed%20or%20missing%20array%20elements
            break;
        default:
              // Handle zeros, do nothing with this index if the number = 0
          }
        }
        console.log(sum);
      }
      // Call the function with an array
      newArrayCalc([1, -2, 3]); // Need to input an array
      newArrayCalc([1, 2, 3]);

//S.1 Sum Method


## Function 2

<!-- // Now you have to write a function that takes an argument and returns the square of it. -->
// solution Q3
// Now you have to write a function that takes an argument and returns the square of it.

const number = (numberSqed) => {
    let n = numberSqed ** 2; //S1. https://sabe.io/blog/javascript-square-number#:~:text=The%20best%20way%20to%20square,raise%20it%20to%20a%20power.
    console.log(n)
}
number(2);
number(5);
number(2348);

//S1. How to square a number


## Sum Arrays
<!-- Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

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
You can assume that you do get an array and if the array is empty, return 0. -->

const SumOfArray = (array1) => {
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        switch (true) { // Need to set the switch statement so that if the value is true the code will execute //Used ChatGPT to fix this error 
            case array1[i] === 0: //checks if the value in the index is strickly 0
            case isNaN(array1[i]): //if it is not a number 
                console.log(0);
                break;
            default:
                sum += array1[i];//used in prev soultion. Sum method, adds all elements in array
        }
    }
    console.log(sum);
}
SumOfArray([1, 2, 3, 4]);
SumOfArray([1, 5.2, 4, 0, -1]);
SumOfArray([-2.398]);
SumOfArray([]);


## Reversed Strings

<!-- Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow' -->
//Solution Q5
//https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
const str1 = "world";
const str2 = "word";
const reversedStr1 = Array.from(str1).reverse().join("");
const reversedStr2 = Array.from(str2).reverse().join("");
console.log(reversedStr1);
console.log(reversedStr2);
