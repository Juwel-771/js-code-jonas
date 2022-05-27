function fruitProcessor(apple, orange){
    this.apple = apple;
    this.orange = orange;
    const juice = `This juice is made by ${apple} apple and ${orange} orange`;

    return juice;
}

const appleOrange = fruitProcessor(3, 2);
console.log(appleOrange);

function sum(a, b){
    return a-b;
}
function add(a, b){
    return a+b;
}
function multi(a, b){
    return a*b;
}
function div(a, b){
    return a/b;
}

console.log(sum(5,2));
console.log(add(5,2));
console.log(multi(5,2));
console.log(div(5,2));