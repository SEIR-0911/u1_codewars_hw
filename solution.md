## Return Negative

```js
function makeNegative(num) {
  if  (num >= 0) {
    return num * -1;
  } else {
    return num
  }
}
```
__________________________________________________________________________________________________________
## Sum of Positive

```js
function positiveSum(arr) {
   let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
  return sum
}
```
__________________________________________________________________________________________________________
## Function 2

```js
function square(num) {
  return num ** 2
}
```
__________________________________________________________________________________________________________
## Sum Arrays

```js
function sum (numbers) {
    "use strict";
  if (numbers.length === 0) return 0;
  return numbers.reduce((total, currentValue) => total + currentValue);
    
};
```
__________________________________________________________________________________________________________
## Reversed Strings

```js
const solution = str =>
  [...str].reverse().join(``)
```
