let number = [1,2,3,4,5,6,7,8];

let result = number.find(function(index, value, arr){
    return value >= 5;
});

console.log(result);