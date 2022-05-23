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


// const name = ['Naruto','Sasuke','Obito','Madara','Itachi','Danzo'];
// for(const anime of name){
//     console.log(anime);
// } // 12
 
// const number = [1,2,3,4,5,6];
// for(const i of number){
//     console.log(i);
// } // 13

// const samurai = ['Naruto', 'Sasuke', 'Hinata', 'Sakura'];
// for(const name of samurai){
//     console.log(name);
// } // 14

// const pro = ['Hard-Work','Passion','Repeat over and over again'];
// for(const name of pro){
//     console.log(name);
// } // 15


// Testing this code from internet.
// var name = "Lilly";
// var color = "White";
// var age = 3;

// // function declaration 
// // using "this" keyword to access the object keys.
// var barkWithName = function(){
//     console.log('Woof Woof!!, I am '
//     +this.name+' and I am a '
//     +this.age+' years old, '
//     +this.color+ ' coloured dog.Woof Woof!!');
// }

// // Using Object Literal Enhancement
// // combines all variables into a yetAnotherDog object
// var yetAnotherDog = {name, color, age, barkWithName};
// // yetAnotherDog.barkWithName();

// console.log(yetAnotherDog);

// for(const x in yetAnotherDog){
//     console.log(x);
// }


// // Old syntax
// var driver1 = {
//     name: "John",
//     speed: 50,
//     car:"Ferrari",
//     speedUp: function(speedup){
//          this.speed = this.speed + speedup;
//          console.log("new speed = "+ this.speed)
//     }
// }
  
// // New syntax without function keyword
// const driver2 = {
//     name: "Jane",
//     speed: 60,
//     car:"McLaren",
//     speedUp(speedup){
//          this.speed = this.speed + speedup;
//          console.log("new speed = "+ this.speed)
//     }
// }

// console.log(driver2.speedUp(10));
// for(const i in driver2){
//     console.log(i);
// }