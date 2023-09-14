## Return Negative

function makeNegative(number) {
    return number > 0 ? -number : number
}

console.log(makeNegative(1));  // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0));  // 0
## Sum of Positive

function sumPos(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum
}

console.log(sumPos([1,-4,7,12]))

## Function 2

function square(num) {
    return num * num
}
console.log(square(3))

## Sum Arrays

function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}


console.log(sumArray([0, 1, -4, 7, 12]))

## Reversed Strings

function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString("I am reversed"))