let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
const markBMI = (markMass / (markHeight * markHeight));
const johnBMI = johnMass / johnHeight ** 2;
const markHighBMI = markBMI > johnBMI;
 
console.log("Mark BMI-> "+markBMI);
console.log("John BMI-> "+johnBMI);

if(markBMI > johnBMI){
    console.log(`Mark BMI ${markBMI} is higher than John BMI ${johnBMI}`);
}else{
    console.log(`John BMI (${johnBMI}) is higher than Mark BMI (${markBMI})`);
}