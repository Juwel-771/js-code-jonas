const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function(move){
//     console.log(move);
// });

// for(const move of movements){
//     console.log(move);
// };

for(const move of movements){
    if(move > 0){
        console.log(`Your deposit: ${move}`);
    }else {
        console.log(`Your withdraw: ${Math.abs(move)}`);
    }
}

movements.forEach(function(mov, index, array){
    if(mov > 0){
        console.log(`Movement: ${index+1}. Your deposit: ${mov}`);
    }else {
        console.log(`Movement: ${index+1}. Your withdraw: ${Math.abs(mov)}`);
    }
})