
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