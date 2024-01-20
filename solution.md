## Return Negative

```function makeNegative(num) {
  if (num <=0)
    return num
  return num *-1
}

```

## Sum of Positive

```function positiveSum(arr) {
  let sum = 0; 
  for (let i = 0; i< arr.length; i++){
    if (arr[i] > 0){
      sum += arr[i];
    }

  }
  return sum
  }

```

## Function 2

```function square(number) {
  return number * number;
}

```

## Sum Arrays

```function sum (numbers) {
    "use strict";
   return numbers.reduce((a, b) => a + b, 0);
};

```

## Reversed Strings

```function solution(str){
  return str.split('').reverse().join('');
}


```
