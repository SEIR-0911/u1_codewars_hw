## Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// create a function to check if num is negative ( <= 0) or positive (> 0)
function makeNegative(num) {
    if (num <= 0) {
        console.log(num);
    } else {
// use "-Math" to change any integer into a negative integer. 
        console.log(-Math.abs(num));
}
}

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

## Sum of Positive

// num = [1,-4,7,12] => 1 + 7 + 12 = 20

// function that will use the array

function sumPositiveNumbers(numbers) {
    // set a start sum of 0
    let sum = 0
    // setup a for loop 
    for (let i = 0; i < numbers.length; i++) {
    // need an if statement to distinguish only care about positive integers (above 0)
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    // return the sum after the if statement
    return sum;
}

// I need an array
const numbersArray = [12, -9, -4, -47, 10]
// I need a function to console.log
const totalSum = sumPositiveNumbers(numbersArray);
console.log(totalSum);

// Note: if there is nothing to sum, the sum is default to 0.

## Function 2

// we need a function
// need to return the math of the integers being squared (online says number * number works)

function numberSquared(number) {
    return number * number;
}

const total = numberSquared(8);
console.log(total)

## Sum Arrays

function sumNumbers(numbers) {
    // set a start sum of 0
    let sum = 0
    // setup a for loop 
    for (let i = 0; i < numbers.length; i++) {
    // need an if statement to distinguish only care about positive integers (above 0)
            sum += numbers[i];
    }
    // return the sum after the if statement
    return sum;
}

// I need an array
const numbersArray = [12, -9, -4, -47, 10]
// I need a function to console.log
const totals = sumNumbers(numbersArray);
console.log(totals);

## Reversed Strings

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