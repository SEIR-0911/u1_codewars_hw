## Return Negative

function makeNegative(num) {
  if (num >= 0) {
    return(num * -1)
}

}

## Sum of Positive

function positiveSum(arr) {
  let posNum = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) posNum += arr[i]
    }
    return posNum;
}

## Function 2

function square(num) {
  return Math.pow(num, 2)

}

## Sum Arrays

// Sum Numbers
function sum (numbers) {
    if (numbers.length = 0) {
      return 0
      } else {
    sumAdd = 0
    for (let i = 0; i < numbers.length; i++) {
    sumAdd += numbers[i]
    }
    return sumAdd;
        }
      
}; 

//this is not the correct answer

## Reversed Strings

function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}
