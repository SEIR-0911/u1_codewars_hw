## Return Negative

```js
function makeNegative(number) {
    if (number < 0) {
        return -number
    } else {
        return number
    }
}

console.log(makeNegative(1));   //Output: -1
console.log(makeNegative(-5));  //Output: -5
console.log(makeNegative(0));   //Output: 0
```

## Sum of Positive

```js
function sumOfPositives(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const numbers = [1, -4, 7, 12];
const result = sumOfPositives(numbers);
console.log(result); // Output: 20

```

## Function 2

```js
function square(number) {
    return number * number;
}

const result = square(5);
console.log(result); // Output: 25
```

## Sum Arrays

```js
function sumArray(numbers) {
    if (numbers.length === 0) {
        return 0; // Return 0 if the array is empty
    }

    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    return sum;
}

const example1 = [1, 5.2, 4, 0, -1]
const example2 = []
const example3 = [-2.398]

console.log(sumArray(example1)) // Output: 9.2
console.log(sumArray(example2)) // Output: 0
console.log(sumArray(example3)) // Output: -2.398
```

## Reversed Strings

```js
function reverseString(str) {
    return str.split('').reverse().join('');
}

const example1 = 'world'
const example2 = 'word'

console.log(reverseString(example1)) // Output: 'dlrow'
console.log(reverseString(example2)) // Output: 'drow'
```
