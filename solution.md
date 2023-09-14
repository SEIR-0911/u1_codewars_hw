## Return Negative

```js
const makeNegative = (number) => {console.log(Math.abs(number) * -1)}

```

## Sum of Positive

```js
  const posFunc = (arr) => {
    return arr.reduce((sum, num) => {
      if (num >= 0) {
        return sum + num
      } else {
        return sum
      }
    }, 0);
  };
  
  const arr1 = [1, 2, -1, 1, -3];
  const positiveSum = posFunc(arr1)
  console.log(positiveSum)
```

## Function 2

```js
const square = (num) => {
    return num * num 
}

let theNum = 2
let answer = square(theNum)
console.log(answer)
```

## Sum Arrays

```js
const sumOfNum = (ar) => {
    let sum = 0;
  
    // Iterate through the array and sum all elements
    for (let i = 0; i < ar.length; i++) {
      sum += ar[i]
    }
  
    return sum
  }

  //OR we can use this code

  const sumOfNum = (ar) => {
    // Use reduce to accumulate the sum of elements
    const sum = ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  
    return sum
  }

  let arrayy1 = [5]; // Array with one element
  let arrayy2 = [1, 2, 3];// Array with multiple elements
  
  let sum1 = sumOfNum(arrayy1)
  let sum2 = sumOfNum(arrayy2)
  
  console.log("Sum 1:", sum1) // Output: 5 (for arrayy1)
  console.log("Sum 2:", sum2) // Output: 6 (for arrayy2)
```

## Reversed Strings

```js
function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString("sage"))
```
