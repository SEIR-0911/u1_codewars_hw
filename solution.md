## Return Negative

```js
function makeNegative(num) {
if (num <= 0) return num;
return (num * -1); 
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) sum += arr[i]
    }
    return sum;
}

```

## Function 2

```js
const square = (b) => b ** 2;


```

## Sum Arrays

```js
function sum (numbers) {
  
  if(numbers.length === 0) return 0;
  
    return numbers.reduce((total, currentValue) => total + currentValue);
    
  };


```

## Reversed Strings

```js
function solution(str){
  //return str.reverse() // "not a funtion"
  
  return str.split('').reverse().join('');
  
};



```
