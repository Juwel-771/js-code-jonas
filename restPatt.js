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
    },

    makePasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1},
        ${ing2}, ${ing3}`);
    },

    orderPizza: function(mainIngredients, ...otherIngredients){
        console.log(mainIngredients);
        console.log(otherIngredients);
    }

}
// 1) Destructuring Part
// SPREAD, because on RIGHT side of = 
const arr = [1,2, ...[3,4]];


// REST, because of LEFT side of =
// Basic Syntax.
// const [a,b, ...other] = [1, 2, 3, 4, 5];
// console.log(a,b,other); // Do -> times 20

// Demo on Restaurant Object
// const [pizza, ,risotto, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Work on Object
// console.log(pizza,risotto,others);

// const {thu, ...otherDay} = restaurant.openingHours;
// console.log(otherDay); // Do 15 times

// 2) Function Part
// const add = function(...number){
//     let sum = 0;
//     let x = number.length;
//     for(let i = 0; i<number.x; i++){
//         sum = sum+number[i];
//     }
//     console.log(sum);
// }

// add(2,4);
// add(2,4,6);
// add(2,4,6,8);
// add(2,4,6,8,10);
// add(1,2,3,4,5,6,7,8,9,10);

// const x = [90,80, 70];
// add(...x); // Do -> 20 times.

// Working on Real Life Application: Ordering Pizza
// restaurant.orderPizza('mushrooms','onion','olives','spinach');
// restaurant.orderPizza('Mushrooms'); // Do -> 20 times







