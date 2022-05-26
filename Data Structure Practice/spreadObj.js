
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
const circle = {
    ab: "AB",
    cd: "CD"
}

const cloneCircle = {...circle};
console.log(cloneCircle); 

// Adding object data to clone variable
const addObj = {...cloneCircle, styles: 'red'};
console.log(addObj);
