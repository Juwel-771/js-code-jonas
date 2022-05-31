'use strick'
const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    console.log(humanAges);
};

calcAverageHumanAge([5,2,4,1,15,8,3]);