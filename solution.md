## Return Negative

```js

function makeNegative(num) {
  if (num < 0) {
    return num
  } else {
    return num * -1
  }
}

```

## Sum of Positive

```js
function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
    } 
    }
  return sum
  }
```

## Function 2

```js
const square = (num) => {return num * num}
```

## Sum Arrays

```js
function sum (numbers) {
    if (numbers.length === 0)  return 0 
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i]
    }
    return sum
};

```

## Reversed Strings

```js
function solution(str){
  let newString = ''
  for (let i = str.length - 1; i > -1; i--) {
    newString += str[i]
  }
    return newString 
  }
```