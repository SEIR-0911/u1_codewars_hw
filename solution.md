## Return Negative
function makeNegative(num) {
  return (-(num))
}

## Sum of Positive
function positiveSum(arr) {
   let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

## Function 2

const square=(num)=>{
  return (num*num)
}


## Sum Arrays
function sum (numbers) {
    let all = 0;

for (let i = 0; i < numbers.length; i++) {
  all += numbers[i];

}
return all    
    
};

## Reversed Strings

function solution(str){
  return [...str].reverse().join("")
}
