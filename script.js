1.

// //imperative
// function makeNegative(number) {
//     if (number > 0) {
//         return -number
//     } else {
//         return number
//     }
// }

// // ternary
// function makeNegative(number) {
//     return number > 0 ? -number : number
// }

// // using math.sign()
// function makeNegative(number) {
//     return number === 0 ? 0 : -Math.abs(number)
// }

// console.log(makeNegative(1));  // -1
// console.log(makeNegative(-5)); // -5
// console.log(makeNegative(0));  // 0

2.

// function sumPos(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             sum += array[i]
//         }
//     }
//     return sum
// }

// console.log(sumPos([1,-4,7,12]))

// function sumPos(array) {
//     return array.reduce((acc, curr) => curr > 0 ? acc + curr : acc, 0)
// }

// console.log(sumPos([1, -4, 7, 12]))

3.

// function square(num) {
//     return num * num
// }
// console.log(square(3))

// function sqrt(number) {return Math.sqrt( number )}
// console.log(sqrt(9))

4.

// function sumArray(numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0)
// }


// console.log(sumArray([0, 1, -4, 7, 12]))

5. 

function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString("I am reversed"))