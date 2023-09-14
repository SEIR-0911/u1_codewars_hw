//Q 1

// arrow function to call the number
// conditional ternary to take the negative of the absolute value of the number except if it's zero

const makeNegative = (num) => {
    (num == 0) ? console.log(0) : console.log(-Math.abs(num))
}

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Q2 Sum Positive


const sumOfPositive = (array) => {
    // remove negatives with .filter
    const cleanArray = array.filter((item) => item>0)

    //using .reduce to return a single value from the array
    const output = cleanArray.reduce((Acc,Cur) => Acc+Cur,0)
    
    console.log(output)
}

// sumOfPositive([1,2,3,-1,-2,-3])
// sumOfPositive([0, -1])
// sumOfPositive([1,-4,7,12])

// Q3 Squaring

const square = (num) => console.log(Math.pow(num,2))

// square(2)
// square(-2)
// square(1.32)


//Q4 sum arrays

//simplified from Q2 answer...

const sumOfArray = (array) => {
    
    //using .reduce to return a single value from the array
    const output = array.reduce((Acc,Cur) => Acc+Cur,0)
    
    console.log(output)
}

// sumOfArray([1, 5.2, 4, 0, -1])
// sumOfArray([])
// sumOfArray([-2.398])


//Q5 Reverse String



const stringReverse = wordInput => {
    //Define an empty output string
    let wordOutput = new String()
    //"reverse map" using charAt
    for (i=(wordInput.length-1); i>=0; i--) {
        wordOutput += wordInput.charAt(i)
    }
    console.log(wordOutput)
}

stringReverse(`World`)
stringReverse(`Never eat soggy waffles`)
stringReverse(``) //What does this answer indicate? [String: '']