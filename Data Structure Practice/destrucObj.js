
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     // ES6 enhanced object literals
//     openingHours:{
//         thu: {
//             open:12,
//             close:09,
//         },
//         mon: {
//             open: 09,
//             close: 10,
//         },
//         fri:{
//             open:12,
//             close: 09,
//         },
//     },
  
//     order(starterIndex, mainIndex) {
//       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({time = '20:20', address, starterIndex=1, mainIndex=1}) {
//         console.log(`Food delivered at ${time} in place ${address} item on menu ${this.mainMenu[mainIndex]} 
//         and food is ${this.starterMenu[starterIndex]}`);
//     }
    
  
    // orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    //   console.log(
    //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    //   );
    // },
  
    // orderPasta(ing1, ing2, ing3) {
    //   console.log(
    //     `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    //   );
    // },
  
    // orderPizza(mainIngredient, ...otherIngredients) {
    //   console.log(mainIngredient);
    //   console.log(otherIngredients);
    // },
  // };


// Cool Application Project.
// restaurant.orderDelivery({
//     time: '02:00pm',
//     address: 'Valques on Deira',
//     starterIndex: 2,
//     mainIndex:2
// });

// Basic Syntax: == 15 times

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {firstName, lastName,age} = person;
//   console.log(firstName, lastName, age); // 1

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {eyeColor, hobby, stack} = person;
//   console.log(eyeColor, hobby, stack); // 2

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

// const {anim, firstName, lastName, age, eyeColor, hobby, stack} = person;
// console.log(anim, firstName, lastName, age, eyeColor, hobby, stack); //3

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };


// const {firstName, age} = person; 
// console.log(firstName, age); // 4

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

// const {stack, anim} = person;
// console.log(stack, anim); // 5

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {firstName, lastName, age} = person;
//   console.log(firstName, lastName, age); // 6

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const{eyeColor, hobby, stack} = person;
//   console.log(eyeColor, hobby, stack); // 7

// const arr = [1,2,3,4,5];
// const [a,v,c] = arr;
// console.log(a,v,c); // extra

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {firstName:f, lastName:l, age:a} = person;
//   console.log(f,l,a); // 8


// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {eyeColor, hobby, stack} = person;
//   console.log(eyeColor, hobby, stack); // 9

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {firstName, age, hobby, anim} = person;
//   console.log(firstName, age, hobby, anim); // 10


// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

// const {firstName, lastName, age, eyeColor} = person;
// console.log(firstName, lastName, age, eyeColor); // 11

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

// const {hobby, stack, anim, firstName} = person;
// console.log(hobby, stack, anim, firstName); // 12

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {lastName, age, eyeColor, hobby,stack} = person;
//   console.log(lastName, age, eyeColor, hobby, stack); // 13

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {anim, firstName, lastName, age} = person;
//   console.log(anim, firstName, lastName, age); // 14

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {age, eyeColor, hobby, stack} = person;
//   console.log(age, eyeColor, hobby, stack); // 15

// Renaming Variable: == 10times
// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "dark brown",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {firstName: f, lastName: l, age: a, eyeColor:e, hobby: h, stack:s, anim: m} = person;
//   console.log(f, l, a, e, h, s, m); // 1

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {firstName: f, lastName: l, age: a} = person;
//   console.log(f, l, a); // 2

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
// };

// const {eyeColor: e, hobby: h, stack: s} = person;
// console.log(e, h, s); // 3

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {anim: a, firstName: f, lastName: l} = person;
//   console.log(a, f, l); // 4

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {hobby: h, stack: s, anim: a} = person;
//   console.log(h, a, s); // 5

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };


//   const {firstName: f, lastName: l, age: a, eyeColor: e} = person;
//   console.log(f, l, a, e); // 6
// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {hobby: h, stack: s, anim: a, firstName: f} = person;
//   console.log(h, s, a, f); // 7

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {stack:s, hobby: h, anim: a, eyeColor: e, firstName: f, lastName: l} = person;
//   console.log(s, h, a, e, f,l); // 8

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {age: a, hobby: h, stack: st, anim: am} = person;
//   console.log(a, h, st, am); // 9

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {anim: m, hobby: b, lastName: ln} = person;
//   console.log(m, b, ln); // 10


// Assigning default value: == 10
// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const{firstName='Mr', lastName = 'Juwel'} = person;
//   console.log(firstName, lastName); // 1

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {firstName: f = "Let", lastName: l = "Go"} = person;
//   console.log(f, l); // 2

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {Naruto="Uzumakio"} = person;
//   console.log(Naruto); // 3

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {anim = 'Naruto', hobby = 'Gaming'} = person;
//   console.log(anim, hobby); // 4

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {stack = 'MEVN', anim = "Mysterious"} = person;
//   console.log(stack, anim); // 5

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {language = "JavaScript", fram="React.Js"} = person;
//   console.log(language, fram); // 6

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {lastName:l = 'Ahmed'} = person;
//   console.log(l); // 7

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {age: a = 12} = person;
//   console.log(a); // 8

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {eyeColor: e = "Dark Brown", hobby: h = "Gaming"} = person;
//   console.log(e, h); // 9

// const person = {
//     firstName: "Md",
//     lastName: "Juwel",
//     age: 22,
//     eyeColor: "blue",
//     hobby: "coding",
//     stack: "MERN",
//     anim: "Adventure" 
//   };

//   const {
//       firstName: f = "Juwel", 
//       lastName: l = "Ahmed",
//       age: a = 23,
//       eyeColor: e = "Dark Brown",
//       hobby: h = "Gaming",
//       anim: am = "Mysterious"
// }= person;

// console.log(f, l, a, e, h, am); // 10


// Nested of nested on Object (Destructing obj in obj in obj) ==15 times
// const person = {
//         firstName: "Md",
//         lastName: "Juwel",
//         age: 22,
//         eyeColor: "blue",
//         hobby: "coding",
//         stack: "MERN",
//         anim: "Adventure",
//     openingHours:{
//         thu: {
//             open:12,
//             close:09,
//         },
//         mon: {
//             open: 09,
//             close: 10,
//         },
//         fri:{
//             open:12,
//             close: 09,
//         },
//     },
//  };

//  const {openingHours: {mon}} = person;
//  console.log(open);

const person = {
    firstName: "Md",
    lastName: "Juwel",
    age: 22,
    eyeColor: "blue",
    hobby: "coding",
    stack: "MERN",
    anim: "Adventure",
openingHours:{
    thu: {
        open:12,
        close:09,
    },
    mon: {
        open: 09,
        close: 10,
    },
    fri:{
        open:12,
        close: 09,
    },
},
};

// const {openingHours : {mon}} = person;
// console.log(mon); // 1 

// const {openingHours: {fri}} = person;
// console.log(fri); // 2

// const {openingHours: {mon: m = "9am"}} = person;
// console.log(m); // 3

// const {openingHours: {wed: w="No data available"}} = person;
// console.log(w); // 4

// const {openingHours: {sun: s}} = person;
// console.log(s); // 5

// const {openingHours: {thu: t="Data available"}} = person;
// console.log(t); // 6

// const {openingHours: {fri: f}} = person;
// console.log(f); // 7

// const {openingHours: {mon: m = "DATA Got"}} = person;
// console.log(m); // 8

// const {openingHours: {mon: m}} = person;
// console.log(m); // 9

// const {openingHours: {fri:friday = "10AM"}} = person;
// console.log(friday); // 10 

// const {openingHours: {fri: {open, close}}} =person;
// console.log(open, close); // 11

// const {openingHours: {mon: {open}}} = person;
// console.log(open); // 12

// const {openingHours: {mon: {open: o = "10am"}}} = person;
// console.log(o); // 13

// const {openingHours: {mon: {close: c ="11pm"}}} = person;
// console.log(c); // 14

// const {openingHours: {thu : {open: o = "10", close:c = "11"}}} = person;
// console.log(o,c); // 15


// task 
let user = {
    name: "John",
    years: 30
  };

  const {name:name} = user;
  const {years:age} = user;
  const {isAdmin:isAdmin = false} =user;

  console.log(name);
  console.log(age);
  console.log(isAdmin);

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  };

  function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }