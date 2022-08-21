function isOdd(numbers){
    return numbers%2!=0;
}

function oddNumber(arr, func){
    let arr1 = [];
    for(let number of arr){
        if(func(number)){
            arr1.push(number);
        }
    }
    return arr1;
}

let arr = [2, 1, 4, 3, 7, 12, 5, 17, 22, 21, 32];
console.log(oddNumber(arr, isOdd));