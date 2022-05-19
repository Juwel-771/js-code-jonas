const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // ES6 enhanced object literals
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
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({time = '20:20', address, starterIndex=1, mainIndex=1}) {
        console.log(`Food delivered at ${time} in place ${address} item on menu ${this.mainMenu[mainIndex]} 
        and food is ${this.starterMenu[starterIndex]}`);
    }
    
  
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
  };


// Cool Application Project.
restaurant.orderDelivery({
    time: '02:00pm',
    address: 'Valques on Deira',
    starterIndex: 2,
    mainIndex:2
});

// Cool Application Project Two.
// restaurant.orderDelivery({
//     address: 'Brques La place',
//     starterIndex: 1
// });

//   // Basic
//   const {name, openingHours, categories} = restaurant;
//   console.log(name, openingHours, categories); -> do 30 times

//   // Renaming the variable
//   const {
//       name: RestroName,
//       openingHours: Hours,
//       categories: tags
//   } = restaurant; -> do 20 times

//   console.log(RestroName, Hours, tags);

// // Assigning default value
// const {menu = [], starterMenu: starter = []} = restaurant;
// console.log(menu, starter); -> do 20 times

// Mutating Variables
// let a = 111;
// let b = 444;

// const obj = {
//     a: 23,
//     b: 33,
//     c: 55
// }; 

// ({a, b, c} = obj);
// console.log(a,b,c); //Do 10 times

// Nested Object (Destructing Obj in Obj)
// const {fri, thu, mon} = restaurant.openingHours;
// console.log(fri, thu, mon); // -> Do this 15 times;

// // Nested of nested on Object (Destructing obj in obj in obj)
// const {fri :{open, close}} = restaurant.openingHours;
// console.log(open, close); // -> do it 15 times

// // Nested of nested on Object with assigning variable name and default variable(Destructing obj in obj in obj)
// const {fri :{open: o = [], close: c = []}} = restaurant.openingHours;
// console.log(o, c); // -> do it 15 times

