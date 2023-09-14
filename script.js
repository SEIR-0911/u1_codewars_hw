//Problem 1 - Return Negative
function getNegative(num) {
    console.log(-Math.abs(num))
}


// getNegative(15)
// getNegative(0)
// getNegative(-20)


//Problem 2 - Return Sum of Pos Numbers
function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    console.log(sum)  
}

// positiveSum([-1,5,7,-10,4,-2])
// positiveSum([-1,-5,7,10,4,-2])


//Problem 3 - Sqrt
function doMath(num) {
    console.log(Math.sqrt(num))
}

// doMath(9)
// doMath(25)
// doMath(225)


//Problem 4 - Sum Arrays
function sumOfArray(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    console.log(sum)
}

// sumOfArray([1, 5.2, 4, 0, -1])
// sumOfArray([-2.398])
// sumOfArray([])


//Problem 5 - Reverse Strings
function reverseString(str) {
    //found on freeCodeCamp - splits the string into chars, reverses order, then joins as a new string
    console.log(str.split("").reverse().join(""))
}

// reverseString("Ryan")
// reverseString("hello")
// reverseString("world")







