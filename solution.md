## Return Negative

function makeNegative(num){
if (num <= 0){
    return num
}
}
return -Math.abs(num);

## Sum of Positive

function positiveSum(arr){
    let total = 0;
    for(i = 0 ; i< arr.lenth; i++)

    if (arr[i] > 0){
        total+= arr[i]
    }
}
    return total
}
## Function 2

square = (num) => {   
  return Math.pow(num, 2)
}

## Sum Arrays

function sum(numbers) {
    return numbers.reduce((a,b)=> a +b, 0)
}


## Reversed Strings

function solution(str){
  let reversed = ''
  for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i]
  }
  return reversed
}
