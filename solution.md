## Return Negative

```js
function makeNegative(num){
    if(num < 0){
        return num;
    } else if (num > 0){
        return 0-num
    } else {
        return 0
    }
}
```

## Sum of Positive

```js
//const arr = [1, -4, 7, 12]
const positiveSum = arr.filter((num) => {
   return num>0
}).reduce((ac, val) => {
    return ac+val
})
```

## Function 2

```js
const squareMe = (num) => Math.pow(num, 2)
```

## Sum Arrays

```js
//const arr = [1, -4, 7, 12]
const sumArray = arr.reduce((ac, val) => {
    return ac + val
}, 0)
```

## Reversed Strings

```js
const arr = [1, -4, 7, 12]
const reverseMe = arr.reverse()
```
