let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE Method
console.log(arr.slice(2));
console.log(arr.slice(1,3));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice()); // Copying Array

// SPLICE Method - this method make effect on ORIGINAL ARRAY.
// console.log(arr.splice(2,4));
// arr.splice(-1);
// console.log(arr);
// console.log(arr.splice(1,2));
// console.log(arr.splice(1,3));
// console.log(arr.splice(1,5));

// REVERSE METHOD.
const arr2 = [1,2,3,4,5,6,7];
console.log(arr2.reverse());

// CONCAT METHOD.
const doubleArr = arr.concat(arr2);
console.log(doubleArr);
const twoArr = [...arr, ...arr2];
console.log(twoArr);

// JOIN METHOD.