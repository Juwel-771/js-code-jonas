'use strick'

// One level Deep
const arr = [[1,2,3], 4, 5,[6,7,8],[9, 10, 11]];
console.log(arr.flat());

// Two Level Deep
const arrDeep = [[[1,2],3], 4, 5,[[6,7],8],[9, 10, 11]];
console.log(arrDeep.flat(2));