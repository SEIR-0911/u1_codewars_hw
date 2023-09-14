## Return Negative

```js
function makeNegative(num) {
  if (Math.sign(num) === -1 || Math.sign(num) === 0){
    return num
  } else if (Math.sign(num) === 1){
    return -num
  } else {
    return 'error'
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
    let positives = arr.filter((num) => {
        if (Math.sign(num) === 1){
            return num
        }
    })
    let sum = positives.reduce((a, b) => {
        return a + b
    }, 0)
    return sum
  }
```

## Function 2

```js
const square = num => num*num
```

## Sum Arrays

```js
function sum (numbers) {
    const numberAdd = (numbers.length === 0) ? 0 : numbers.reduce((a, b) => {
      return a + b
    }, 0)
    return numberAdd  
};
```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('')
}
```
