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

// const arr = ['Juwel','Xenon','Xavier','Xaphan','Winesia', 'XaviTor'];

// for(const item of arr){
//     console.log(item);
// } -> Do:- 15 times

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const [i, el] of menu.entries()){
//     console.log(`${i + 1}: ${el}`);
// }

// const arr = [1, 2, 4, 5, 6, 7, 8, 9];
// for(const item of arr){
//     console.log(item);
// } // 1

// const arr =['Md', 'Juwel', 'Ahmed', 'Zubaiyer'];
// // const item = [];

// for(const item of arr){
//     console.log(item);
// } // 2

// const arr = [1,2,3,4,5];
// for(const number of arr){
//     console.log(number);
// } // 3

// const arr = ['Md', 'Juwel', 'Abir'];
// for(const item of arr){
//     console.log(item);
// } // 4

// const footballClub = ['Arsenal', 'Barcelona', 'Chelsea','Dortmund', 'Elche','Frankfruit'];
// for(const club of footballClub){
//     console.log(club);
// } // 5

// const carName = ['BMW', 'Audi', 'Honda', 'Bugati'];
// for(const car of carName){
//     console.log(car);
// } // 6

// const basic = ['school', 'Game', 'OTP', 'Nexux'];
// for(const x of basic){
//     console.log(x);
// } // 7

// const basicObj = {
//     firstName : 'Md',
//     lastName: 'Juwel',
//     age: 33
// };

// for(const item in basicObj){
//     console.log(item[]);
// } // 8

// const myName = [1,2,3,4,5,6];
// for(const number of myName){
//     console.log(number);
// } // 9

// const ID = ['382', '399', '404', '444'];
// for(const item of ID){
//     console.log(item);
// } // 10

// const str = ['Hate', 'Pain', 'Suffer', 'Frustration'];
// for(const all of str){
//     console.log(all);
// } // 11

 
