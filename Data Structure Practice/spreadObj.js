
// BASIC Syntax:== 15 times
// let rgb = {
//     a: 'red',
//     b: 'green',
//     c: 'blue'
// };

// let cmc = {
//     y: 'cyan',
//     m: 'magenta',
//     l: 'yellow'
// };

// let merge = {...rgb, ...cmc};
// console.log(merge);

// Clone an Object: == 15
// const circle = {
//     ab: "AB",
//     cd: "CD"
// }

// const cloneCircle = {...circle};
// console.log(cloneCircle);  

// Adding object data to clone variable: == 10 times
// const addObj = {...cloneCircle, styles: 'red'};
// console.log(addObj);

// Merging Objects: == 15.
// const circle = {
//     radius : 10,
//     angle: 15 
// };

// const triangle = {
//     tr: 20,
//     ms: 14
// };

// const merge = {...circle, ...triangle};

// console.log(merge);

// const blueSquare = {
//     length: 100,
//     color: 'blue'
// };

// Object.defineProperty(blueSquare, 'color', {
//     value: 'blue',
//     enumerable: true,
//     writable: false

// });

// console.log(blueSquare);


// const obj = {
//     a: 23,
//     b: 25,
//     c: 26
// }
// const addData = {...obj, g:49};
// console.log(addData); // 1

// const obj = {
//     a: 2,
//     b: 3,
//     c: {
//         d: 5,
//         e: 4
//     }
// };

// const addData = {...obj,c:{f: 99}};
// console.log(addData); // 2

// const obj = {
//     a: "Md",
//     b: "Juwel",
//     c: "Ahmed"
// };

// const data = {...obj};
// console.log(data); // 3


// const obj = {
//     a: 12,
//     b: 13,
//     c: 14
// };
// const addData = {...obj, d: 'Non0'};
// console.log(addData); // 4 

// const obj = {
//     name : "Md",
//     common_Name: "Juwel"
// };

// const addData = {...obj,lastName: "Ahmed"};
// console.log(addData); // 5 

// const number = {
//     one: 1,
//     two: 2,
//     three: 3
// }

// const addNumber = {...number, four: 4};
// console.log(addNumber); // 6

// const number = {
//     one: 1,
//     two: 2, 
//     three: 3
// }

// const addNumber = {...number, five: 5};
// console.log(addNumber); // 7