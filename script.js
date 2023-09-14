
//const makeNegative = (number) => {console.log(Math.abs(number) * -1)}







// const posFunc = (arr) => {
//     let sum = 0
//     const posNums = arr.filter((num) => { 
//         sum += num >= 0  
//      })
//   return sum;
// }

// arr1 = [1,2,-1,1,-3]
// let positivieSum = posFunc(arr1)
// console.log(positivieSum)












// function sumPositiveNumbers(arr) {
//     let sum = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         sum += arr[i];
//       }
//     }
  
//     return sum;
//   }

//   const numbers = [1, -2, 3, 4, -5, 6];
//   const positiveSum = sumPositiveNumbers(numbers);
//   console.log("Sum of positive numbers:", positiveSum); 




//   const posFunc = (arr) => {
//     return arr.reduce((sum, num) => {
//       if (num >= 0) {
//         return sum + num;
//       } else {
//         return sum;
//       }
//     }, 0);
//   };
  
//   const arr1 = [1, 2, -1, 1, -3];
//   const positiveSum = posFunc(arr1);
//   console.log(positiveSum);


//Now you have to write a function that takes an argument and returns the square of it.
// const square = (num) => {
//     return num * num 
// }

// let theNum = 2
// let answer = square(theNum)
// console.log(answer)

// const sumOfNum = (ar) => {
//     let sum = 0
//     for(i = 0; i < ar.length; i++){
//         if (ar.length == 0) {
//             return sum
//         } else if (ar.length == 1) {
//             sum += ar[0]
//         } else if (ar.length > 1) {
//             sum += ar[i]
//         } else {
//             return sum
//         }
        
// }
// }

// let arrayy = []
// let readable = sumOfNum(arrayy)
// console.log(readable)

// const sumOfNum = (ar) => {
//     let sum = 0;
  
//     // Iterate through the array and sum all elements
//     for (let i = 0; i < ar.length; i++) {
//       sum += ar[i];
//     }
  
//     return sum;
//   }
  
//   let arrayy1 = [5]; // Array with one element
//   let arrayy2 = [1, 2, 3]; // Array with multiple elements
  
//   let sum1 = sumOfNum(arrayy1);
//   let sum2 = sumOfNum(arrayy2);
  
//   console.log("Sum 1:", sum1); // Output: 5 (for arrayy1)
//   console.log("Sum 2:", sum2); // Output: 6 (for arrayy2)

// const sumOfNum = (ar) => {
//     // Use reduce to accumulate the sum of elements
//     const sum = ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
//     return sum;
//   }
  
//   let arrayy1 = [5]; // Array with one element
//   let arrayy2 = [1, 2, 3]; // Array with multiple elements
  
//   let sum1 = sumOfNum(arrayy1);
//   let sum2 = sumOfNum(arrayy2);
  
//   console.log("Sum 1:", sum1); // Output: 5 (for arrayy1)
//   console.log("Sum 2:", sum2); // Output: 6 (for arrayy2)

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("sage"))
  