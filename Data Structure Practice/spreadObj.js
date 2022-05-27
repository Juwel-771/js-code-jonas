
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

// const number = {
//     letter: "one",
//     letter2: "two",
//     letter3: "three"
// };
// const addNumber = {...number, letter4: "four"};
// console.log(addNumber); // 8

// const object = {
//     club:"Barcelona",
//     estd: 1890,
//     president: "Laporta",
//     value: "1.90 billion"
// };

// const addValue = {...object, starPlayer: "Messi"};
// console.log(addValue); // 9

// const obj = {
//     estd: 100,
//     non: 239
// };
// const addData = {...obj, name:"Barcelona"};
// console.log(addData); // 10

// Joining two array

// const obj1 = {
//     a: 1,
//     b: 2,
// }

// const obj2 ={
//     c: 3, 
//     d: 4
// }

// const merge = {...obj1, ...obj2};
// console.log(merge); // 1

// const obj1 = {
//     a: 1,
//     b:2
// }

// const obj2 = {
//     c: 1,
//     a: 1
// }

// const merge = {...obj1, ...obj2};

// console.log(merge); // 2

// const obj1 = {
//     name: "Md",
//     commonName: "Juwel"
// }

// const obj2 = {
//     firstName: "Md",
//     lastName: "Juwel"
// }

// const double = {...obj1, ...obj2};
// console.log(double); // 3

// const school = {
//     name: "Rahmania High School",
//     college: "City Corporation College" 
// }

// const versity = {
//     versity: "Port City International University"
// }

// const merge = {...school, ...versity};

// console.log(merge); // 4


// const obj = {
//     a: 90,
//     b: 80
// }

// const obj2 = {
//     m: 80,
//     n: 50
// }
// const doubleMerge = {...obj, ...obj2};
// console.log(doubleMerge); // 5

// Cloning Object

// const obj = {
//     a: 80,
//     b: 70
// }

// const cloneObj = {...obj};
// console.log(cloneObj); // 1

// const obj = {
//     name: 'Md Juwel',
//     id: 382
// }

// const clone = {...obj};
// console.log(clone); // 2

// const obj = {
//     firstName: "Juwel",
//     lastName: "Ahmed",
//     id: 382
// }

// const clone = {...obj};
// console.log(clone); // 3
    