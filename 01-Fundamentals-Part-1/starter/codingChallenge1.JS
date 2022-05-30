let mass = 78;
let height = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
const MassHeight = (mass / (height * height));
const bmiJohn = johnMass / johnHeight ** 2;
const markHighBMI = MassHeight > bmiJohn;
if(MassHeight > bmiJohn){
    console.log(markHighBMI);
}

console.log("Mark BMI "+MassHeight);
console.log("John BMI "+bmiJohn);