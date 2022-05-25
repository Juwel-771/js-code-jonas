// Basic Programming
const arr = [3, 5, 23, 13];

[a, b, c] = arr;
console.log([a, b, c]);

// Variable Switching
let arr2 = [4, 5, 3];
[a, b] = arr2;
console.log('a= '+a,'b= '+b);

[a, b] = [b, a];
console.log('a= '+a, 'b= '+b);

// Nesting inside loop
let arr3 = [2, 4, 5, [10, 13, 14]];
[a,b, ,[z,r]]=arr3;
console.log([a, b, [z, r]]);

// Rest Type
let arr4 = [3, 5, 23, 13, 15, 19, 25];
[a, b, ...rest] = arr4;
console.log(rest);

// separate variable declaration 
let a1,b1;
const arr5 = [4, 3, 5];
[a1,b1] = arr5;
console.log(a1,b1);

// Default Value
let a2, b2;
[a2=5, b2=2] = [1];
console.log(a2, b2);

// Function Variable
function f(){
    return [3,5];
}

[a3, b3] = f();
console.log(a3);
console.log(b3);

// Ignoring Return Value
function f(){
    return [4, 5, 9];
}
[a4, ,g] = f();
console.log(a4, g);

const[c]= f();
console.log(c);

// Assigning the rest of an array to a variable
const arr6 = [1,2,3,4,5,6];
[a5,...b5] = arr6;
console.log(b5);