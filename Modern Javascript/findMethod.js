let number = [1,2,3,4,5,6,7,8];

// FIND method 
let result = number.find(function(index, value, arr){
    return value >= 5;
});

console.log(result);

// FIND-INDEX method
let findIndex = number.findIndex(function(currentIndex){
    return !(currentIndex % 2);
});

console.log(findIndex);

// FILTER 
let filterMethod = number.filter(function(currentValue){
    return currentValue > 4;
});
console.log(filterMethod);

// SLICE
// let sliceMethod = number.slice(2,4);
// console.log(sliceMethod);

// SPLICE
// let spliceMethod = number.splice(1,2,10,12,14,16,17);
// console.log(number);

// MAP method
let mapMethod = number.map(function(value){
    return value * 2;
});

console.log(mapMethod);

// REDUCE method
let reduceMethod = number.reduce(function(currentValue, previousValue){
    return currentValue+previousValue;
},0);

console.log(reduceMethod);
