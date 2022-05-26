
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

const blueSquare = {
    length: 100,
    color: 'blue'
};

Object.defineProperty(blueSquare, 'color', {
    value: 'blue',
    enumerable: true,
    writable: false

});

console.log(blueSquare);
