const money = [455,343,143,350, -334,-43,25,-330,-140,-150];

const findWithdraw = money.find(function(negativeValue){
    let value = 0;
    value = negativeValue < 0;
    return value;
})

console.log(findWithdraw);