// 1
// function myFunction(a){
//     return typeof(a);
// }

// myFunction(3);
// function myFunction(myString, indexNumber){
//     let str = "";
//     return str.indexOf("myString", indexNumber);
// }

// myFunction("Juwel",3);

// function myFunction(a, n){
//     return a.charAt(n-1);
// }

// const findWord = myFunction('zyxbwpl',5);
// console.log(findWord);

// function myFunction(a){
//     return a.slice(-1);
// }

// console.log(myFunction("Juwel"));

// function myFunction(a){
//     return a . slice(0,3);
// }

// console.log(myFunction("Ahmed"));

function myFunction(a){
    let len = a.length;
    let divide = Math.abs(len / 2);
    let result = a.slice(0,divide);

    return result;
}


// let a = "Juwel"
// let len = a.length;
// let divide = Math.abs(len / 2);
// let result = a.slice(0,divide);

console.log(myFunction("JUWELL"));