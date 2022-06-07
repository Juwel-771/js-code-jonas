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

// function myFunction(a){
//     let len = a.length;
//     let divide = Math.abs(len / 2);
//     let result = a.slice(0,divide);

//     return result;
// }

// console.log(myFunction("JUWELL"));

// function myFunction(a){
//     let strSlice = a.slice(0,-3);

//     return strSlice;
// }

// let result = myFunction("ZUBAIYER");
// console.log(result);

// function percentage(num, per)
// {
//   return (num/100)*per;
// }
          
// console.log(percentage(10, 1));

// function myFunction (a, b, c, d, e, f){
//     //let result = Math.pow((((a+b)-c)*d)/e, f);
//     //let power = Math.pow(result, f);

//     return Math.pow((((a+b)-c)*d)/e, f);;
// }
// console.log(myFunction(6,5,4,3,2,1));

function myFunction(a){
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(myFunction(10));