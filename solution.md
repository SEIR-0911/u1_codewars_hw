## Return Negative

```js

if (number < 0) {
  console.log(number)
} else {
  console.log(number - (number * 2))
}

```

## Sum of Positive

```js

let total = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    total += numbers[i]
  }
}
console.log(total)

```

## Function 2

```js

function square(value) {
  return (value ** 2)
}

```

## Sum Arrays

```js

const sum = array.reduce((a, b) => { return a + b}, 0)

```

## Reversed Strings

```js

let letterArray = word.split("")
letterArray.reverse()
console.log(letterArray.join(""))

```
