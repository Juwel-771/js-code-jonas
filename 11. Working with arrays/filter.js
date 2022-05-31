// 'use strick'

const money = [455,343,143,350, -334,-43,25,-330,-140,-150];

// const deposit = money.filter(function(mov){
//     return mov < 0;
// })

// console.log(money);
// console.log(deposit);

for (const moving of money){
    if(moving < 0){
        console.log(moving)
    }
}