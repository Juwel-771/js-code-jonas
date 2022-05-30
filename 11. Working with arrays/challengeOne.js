const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrect = dogsJulia.slice();
    dogsJuliaCorrect.splice(0,1);
    dogsJuliaCorrect.splice(-2);

    const dogs = dogsJuliaCorrect.concat(dogsKate);
    console.log(dogs);
};

checkDogs([3,5,2,12,7],[4,1,15,8,3]);