const money = [455,343,143,350, -334,-43,25,-330,-140,-150];
let euroUSD = 1.15;
// const chain = money.filter(mov => mov > 300).map((mov, i, arr)=>{
//     return mov*euroUSD;
// }).reduce((acc, mov)=>acc+mov);

// const chain = money.filter(mov => mov > 300).map((mov,i,arr) => {
//     return mov*euroUSD;
// }).reduce((acc, mov)=>acc+mov)

// console.log(chain);

const chain = money.filter(function(mov){
    return mov > 300;
}).map(function(mov){
    return mov * euroUSD;
}).reduce(function(acc, move){
    return move+acc;
})

console.log(chain);