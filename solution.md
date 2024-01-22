## Return Negative

```js
function makeNegative(number) {
    return number >= 0 ? -number : number;
}

let result1 = makeNegative(1)
console.log(result1)

let result2 = makeNegative(-5)
console.log(result2)

let result3 = makeNegative(0)
console.log(result3)

let result4 = makeNegative(0.12)
console.log(result4) 

```

## Sum of Positive

```js
function sumOfPositives(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0)
}
let numbers = [1, -4, 7, 12]
let result = sumOfPositives(numbers)
console.log(result)
```

## Function 2

```js
function square(number) {
    return Math.pow(number, 2)
}
let result = square(3)
console.log(result)   
```

## Sum Arrays

```js
 function sumArray(numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((sum, num) => sum + num, 0)
}

function sumArray(numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((sum, num) => sum + num, 0)
}

let array1 = [1, -4, 5, 43]
let result1 = sumArray(array1)
console.log(result1)

let array2 = [];
let result2 = sumArray(array2)
console.log(result2)
```

## Reversed Strings

```js
function reverseString(str) {
    if (str === '') {
        return str
    } else {
        return reverseString(str.substr(1)) + str[0]
    }
}

let result1 = reverseString('world')
console.log(result1)

let result2 = reverseString('word')
console.log(result2)

