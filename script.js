const numbers = [3, 6, 9, -12, 15]

const positiveSum = numbers.filter(number => number > 0).reduce((a, b) => {
    return a + b
}, 0)

console.log(positiveSum)