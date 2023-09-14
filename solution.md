## Return Negative

```js
const makeNegative = (num) => {
    if (num > 0 ) {
        num = -num
    } 
    return num
}

```

## Sum of Positive

```js
const sumPositives = (nums) => {
    let total = 0
    nums.forEach(element => {
        if (element > 0) {
            total += element
        }
    });
    return total
}
```

## Function 2

```js
const square = (num) => {return num*num}
```

## Sum Arrays

```js
// Sum Numbers
function sum (numbers) {
    "use strict";
    const sum = numbers.reduce((acc, val) => {
        return acc + val
      },0)
    return sum    
};
```

## Reversed Strings

```js
function solution(str){
    let reversed =""
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]
    }
    return reversed
  }
```
