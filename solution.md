## Return Negative

```js
function makeNegative(num) {
  // Code?
  if (num === 0) {//we don't check for 0;
    return 0;
  } else if (num < 0) {//num is already negative number
    return num;
  } else { //num is positive number
    return -num;
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let positiveSum = 0;
  if (arr.length > 0) {
    arr.forEach((elem) => {
      if (elem > 0) {
        positiveSum += elem;
      }
    });
  } else {//array length is 0 or no number to add
    positiveSum = 0
  }
  return positiveSum;
}
```

## Function 2

```js
// Write the "square"-function here
function square(num) {
  return Math.pow(num, 2);
}
```

## Sum Arrays

```js
// Sum Numbers
function sum(numbers) {
  "use strict";
  let sum = 0;
  if (numbers.lenght <= 0) {
    return 0;
  } else {
    numbers.forEach((num) => {
      sum += num;
    });
  }
  return sum;
};
```

## Reversed Strings

```js
function strReverse(str) {
  let strArray = str.split("");//pars the string into an array
  strArray.reverse();// reverse the array
  return strArray.join("");//join back the array to a string and return it
}
```
