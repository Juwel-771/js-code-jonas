// let number = () => {
//     return 10;
// }

// console.log(number());

// let sum = (a, b)=>{
//     return a+b;
// };

// console.log("Total Add: " + sum(5,5));

// let multi = (a, b) => a*b;
// console.log(multi(6, 6));

let javascript = {
    name: "JavaScript",
    libraries: ["React JS", "Angular Js","Vue.js"],
    printLibraries: function(){
        this.libraries.forEach((a) => {
            console.log(`${this.name} love ${a}`);
        })
    }
}

javascript.printLibraries();