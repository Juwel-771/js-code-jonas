const markObj = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
}

const johnObj = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}

const calcBMI = markObj["mass"] / (markObj["height"]*markObj["height"]);
const calcBMIJohn = johnObj["mass"] / (johnObj["height"]*johnObj["height"]);
console.log(calcBMI);
console.log(calcBMIJohn);

if(calcBMI > calcBMIJohn){
    console.log(`${markObj["fullName"]}'s BMI (${calcBMI}) is higher than ${johnObj["fullName"]}'s BMI ${calcBMIJohn}`);
}else{
    console.log(`${johnObj["fullName"]}'s BMI ${calcBMIJohn} is higher than  ${markObj["fullName"]}'s BMI (${calcBMI})`);
}