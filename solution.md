## Return Negative

```js
function makeNegative(num) {
 return num > 0 ?  num*-1 : num;
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  return arr.filter(x => x >= 0).reduce((a, b) => a + b,0)
  
}

```

## Function 2

```js
function square (num) {
  return num = num**2
}
```

## Sum Arrays

```js
function sum (numbers) {
    "use strict";
  return numbers.reduce((a,b) => a + b,0)
    
};
```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('');  
}
```
