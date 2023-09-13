// // PROMPT 1: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// // create a function to check if num is negative ( <= 0) or positive (> 0)
// function makeNegative(num) {
//     if (num <= 0) {
//         console.log(num);
//     } else {
// // use "-Math" to change any integer into a negative integer. 
//         console.log(-Math.abs(num));
// }
// }

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// // PROMPT 2: You get an array of numbers, return the sum of all of the positives ones.

// // num = [1,-4,7,12] => 1 + 7 + 12 = 20

// // function that will use the array

// function sumPositiveNumbers(numbers) {
//     // set a start sum of 0
//     let sum = 0
//     // setup a for loop 
//     for (let i = 0; i < numbers.length; i++) {
//     // need an if statement to distinguish only care about positive integers (above 0)
//         if (numbers[i] > 0) {
//             sum += numbers[i];
//         }
//     }
//     // return the sum after the if statement
//     return sum;
// }

// // I need an array
// const numbersArray = [12, -9, -4, -47, 10]
// // I need a function to console.log
// const totalSum = sumPositiveNumbers(numbersArray);
// console.log(totalSum);

// // Note: if there is nothing to sum, the sum is default to 0.

// // PROMPT 3: Now you have to write a function that takes an argument and returns the square of it.

// // we need a function
// // need to return the math of the integers being squared (online says number * number works)

// function numberSquared(number) {
//     return number * number;
// }

// const total = numberSquared(8);
// console.log(total)


// // PROMPT 4: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// function sumNumbers(numbers) {
//     // set a start sum of 0
//     let sum = 0
//     // setup a for loop 
//     for (let i = 0; i < numbers.length; i++) {
//     // need an if statement to distinguish only care about positive integers (above 0)
//             sum += numbers[i];
//     }
//     // return the sum after the if statement
//     return sum;
// }

// // I need an array
// const numbersArray = [12, -9, -4, -47, 10]
// // I need a function to console.log
// const totals = sumNumbers(numbersArray);
// console.log(totals);

// // Examples
// // Input: [1, 5.2, 4, 0, -1]
// // Output: 9.2

// // Input: []
// // Output: 0

// // Input: [-2.398]
// // Output: -2.398

// // Assumptions
// // You can assume that you are only given numbers.
// // You cannot assume the size of the array.
// // You can assume that you do get an array and if the array is empty, return 0.
// // What We're Testing
// // We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// // Advanced users may find this extremely easy and can easily write this in one line.

// // PROMPT 5: Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// we need a function that uses .reverse
// apparently I need to turn it into an array, reverse it and then join it back at the end
// .split('').reverse().join('')

function reverseIt(str) {
    return str.split('').reverse().join('');
}

const reverse = reverseIt('world');
console.log(reverse);

const reverse2 = reverseIt('word');
console.log(reverse2);

