// Basic Programming
// const arr = [3, 5, 23, 13];

// [a, b, c] = arr;
// console.log([a, b, c]);

// // Variable Switching
// let arr2 = [4, 5, 3];
// [a, b] = arr2;
// console.log('a= '+a,'b= '+b);
// [a, b] = [b, a];
// console.log('a= '+a, 'b= '+b);

// // Nesting inside loop
// let arr3 = [2, 4, 5, [10, 13, 14]];
// [a,b, ,[z,r]]=arr3;
// console.log([a, b, [z, r]]);

// // Rest Type
// let arr4 = [3, 5, 23, 13, 15, 19, 25];
// [a, b, ...rest] = arr4;
// console.log(rest);

// separate variable declaration 
// let a,b;
// const arr5 = [4, 3, 5];
// [a,b] = arr5;
// console.log(a,b);

// Default Value
// let a, b;
// [a=5, b=2] = [1];
// console.log(a, b);

// Function Variable
// function f(){
//     return [3,5];
// }

// [a, b] = f();
// console.log(a);
// console.log(b);

// Ignoring Return Value
// function f(){
//     return [4, 5, 9];
// }
// [a, ,g] = f();
// console.log(a, g);

// const[c]= f();
// console.log(c);

// Assigning the rest of an array to a variable
const arr6 = [1,2,3,4,5,6];
[a,...b] = arr6;
console.log(b);