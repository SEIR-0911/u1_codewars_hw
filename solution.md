## Return Negative

```js
function makeNegative(num) {
  if (num < 0) {
    return num
  }else {
    return -num 
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let posNum = 0
  for (let i=0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posNum += arr[i]
    }
  }
  return posNum
}
```

## Function 2

```js
let square = (num) => {
  return num * num
}
```

## Sum Arrays

```js
function sum (numbers) {
  let arrNum = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length === 0) {
      return 0
    } else {
      arrNum += numbers[i]
    }
  }
  return arrNum
}
```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('');  
}
```
