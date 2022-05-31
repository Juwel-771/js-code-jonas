'use strick'
const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    console.log(humanAges);

    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);
};

calcAverageHumanAge([5,2,4,1,15,8,3]);