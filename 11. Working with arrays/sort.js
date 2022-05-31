const name = ['sarah','adams','elina','john','nicki','karan'];
const sortName = name.sort();
console.log(sortName);

const money = [455,343,143,350, -334,-43,25,-330,-140,-150];
money.sort(function(a,b){
    if(a > b){
        return 1;
    }if( a < b){
        return -1;
    }
});

console.log(money);