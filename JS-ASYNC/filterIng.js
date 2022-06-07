function filter(numbers){
    let result = [];
    for(let number of numbers){
        if(number % 2 == 0){
            result.push(number);
        }
    }

    return result;
}

let numbers = [4,25,6,4,2,3,6,7,9,4,5,33,22];
console.log(filter(numbers));