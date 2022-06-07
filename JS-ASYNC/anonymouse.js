function filter(numbers, callback){
    let result = [];
    for(const number of numbers){
        if(callback(number)){
            result.push(number);
        }
    }

    return result;
}

let num1 = [3,4,5,6,7,8,9,10,12,14];

let finalResult = filter(num1, function(num1){
    return num1 % 2 == 0;
})

console.log(finalResult);