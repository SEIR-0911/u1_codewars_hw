## Return Negative

```js

```function makeNegative(number) {
  return -Math.abs(number);
}

## Sum of Positive

```js

```function positiveSum(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

## Function 2

```js

```function square(number) {
  return number * number;
}


## Sum Arrays

```js

```function simpleArraySum(ar) {
    let x = 0;
    for (let i = 0; i < ar.length; i++) {
     If (!ar) {
     Return 0
}  else {
        x += ar[i];
}
    }
    return x;
}

## Reversed Strings

```js

```function reverseString(str) {
  return str.split('').reverse().join('');
}

