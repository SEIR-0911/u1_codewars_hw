## Return Negative

```js
function makeNeg(num){
    if (num===0){
        console.log("The number is 0.  It is neither positive nor negative.")
    } else {
        negNum=-Math.abs(num)
        console.log(`The negative of the given number is ${negNum}`) 
    }  
}

makeNeg(-4)
```

## Sum of Positive

```js
let numArray=[1,-4,7,12]

let sum=0

for (let i=0; i<numArray.length; i++){
  if (numArray[i] >0){
    sum+=numArray[i]
  }
}
console.log(sum)
```

## Function 2

```js
function numSquared (num){
  console.log(Math.pow(num,2))
}

numSquared(4)
```

## Sum Arrays

```js
let nums= [1, 5.2, 4, 0, -1]
    
let sum=0

for(let i=0; i<nums.length; i++ ) {
  sum+=nums[i]
}
console.log(sum)
```

## Reversed Strings

```js
function reverseStr (string){
  let strLettersFwd = string.split("")
  let strLettersBkwd = strLettersFwd.reverse()
  let assembleLetters = strLettersBkwd.join("")
  console.log(assembleLetters)
}

reverseStr("world")
```
