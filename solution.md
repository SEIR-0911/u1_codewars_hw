## Return Negative

const makeNegative = (num) => {
    if (num > 0) {
        return -num
    } else {
        return num
    }
}
makeNegative(23)

## Sum of Positive

const numbers = [3, 6, 9, -12, 15]

const positiveSum = numbers.filter(number => number > 0).reduce((a, b) => {
    return a + b
}, 0)

## Function 2

function square(number) {
    return Math.pow(number, 2)
}

## Sum Arrays

const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((a, b) => {
    return a + b 
}, 0)

## Reversed Strings

function reverseString(str) {
    return str.split('').reverse().join('')
}
reverseString("hello")
