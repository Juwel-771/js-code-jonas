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
    }

}

// Basic Syntax
// const arr = [1,2,4,5];
// const newArr = [...arr];
// console.log(newArr);

// const arrValue = ['My', 'Name', 'Is', 'Juwel'];
// console.log(...arrValue);

// Basic Syntax
// const arr = [5, 6, 7, 8];
// const newArr = [1, 2, 3, 4, ...arr];
// console.log(newArr) ->30times;

// Spreading the value
// console.log(...newArr);

// Inserting new element and creating New Menu (Just gain the basic)
// const newMenu = [...restaurant.mainMenu, 'Egg Ramen'];
// console.log(newMenu);
// console.log(...newMenu); // Do 20 times

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy); //  Do 15 times 

// Joining 2 or more array 
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// console.log(...menu); // Do 15 times

// Note: Iterables: arrays, String, Maps, Set. NOT Objects

// SP on String
const str = 'Md Juwel';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...letters);

// Real Life Example
// const ingredients = [
//     prompt('Let\s make Past.. Ingredients1'),
//     prompt('Ingredients2'),
//     prompt('Ingredients3')
// ];

// console.log(ingredients);

// restaurant.makePasta(...ingredients);

// // Works On Object
// const newRestaurant = {foundedIn: 1994, ...restaurant, founder: 'Cisco Dave'};
// console.log(newRestaurant); Do 15 times
// Note: console.log(...newRestaurant); does'n work on Object.