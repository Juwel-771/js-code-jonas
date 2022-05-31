
const money = [455,343,143,350, -334,-43,25,-330,-140,-150];

// Using regular function
// const balance = money.reduce(function(acc, cur, i, arr){
//     console.log(`Iteration: ${i}: ${acc}`);
//     return acc+cur;
// }, 0);

// Using ARROW function
const balance = money.reduce((acc, cur)=>acc+cur, 0)
console.log(balance);

let balance2 =0;
for(const mov of money){
    balance2+=mov;
}

console.log(balance2);