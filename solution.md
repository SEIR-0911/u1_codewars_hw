## Return Negative
function makeNegative(num) {
    if (num > 0) {
        console.log(num * (-1))
    } else if (num === 0) {
        console.log(0)
    } else {
        console.log(num)
    }
}
makeNegative(1)

## Sum of Positive
arr = [1, -4, 7, 12]

function sum() {
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum1 = sum1 + arr[i]
        }
    }
    console.log(sum1)
}
sum()

## Function 2
function sqr(num) {
    console.log(Math.pow(num, 2))
}
sqr(9)

## Sum Arrays
const numbers = [1, 5.2, 4, 0, -1]
const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)

console.log(sum)

## Reversed Strings

```js

```
