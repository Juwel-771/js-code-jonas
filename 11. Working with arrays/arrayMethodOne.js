'use strick'
// Concat method.=> 15 times

// const arr1 = [1,2,3,4];
// const arr2 = [5,4,5,6];
// const newArr = arr1.concat(arr2);
// console.log(newArr); // 1

// const arr1 = [1,2,3,4,5,6];
// const arr2 = ['j','u','w','e','l'];
// const newOBj = arr1.concat(arr2);
// console.log(newOBj); // 2

// const name = [1,34,45,5,245];
// const numer = [23,34,521];
// console.log(name.concat(numer)); // 3

// const skill = ['M','E','R','N'];
// const skillStack= ['MO','EX','RC','ND'];
// const newStack = skill.concat(skillStack);
// console.log(newStack); // 4

// const clubName = ['BARCELONA'];
// const shortName = ['FCB'];
// const teamName = shortName.concat(clubName);
// console.log(teamName); // 5

// const moto = ['More than a club'];
// const  club = ['FCB'];
// const whole = club.concat(moto);
// console.log(whole); // 6

// const moto = ['Hala Madrid'];
// const club = ['RM'];
// const clubBorad = club.concat(moto);
// console.log(clubBorad); // 7

// const richClub = ['PSG','Manchester City','Manchester United'];
// const result = ['All are Loser'];
// const allMoto = richClub. concat(result);
// console.log(allMoto); // 8

// const myName = ['Uchiha Sasuke'];
// const moto= ['To kill a certain man'];
// const clan= myName.concat(moto);
// console.log(clan); // 9

// const theLast = ['Boruto'];
// const last = ['Naruto'];
// const newARR = theLast.concat(last); // 10

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;

// console.log(text);


// CopyWithin() method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newArr = fruits.copyWithin(0, 2);
// console.log(newArr); // 1

// const name = ['j','u','w','e','l'];
// name.copyWithin(0, 4);
// console.log(name); // 2

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const fruitsArr = fruits.copyWithin(2,5,7);
// console.log(fruitsArr); // 3

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const fruitMiddle = fruits.copyWithin(0, 4);
// console.log(fruitMiddle); // 4

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const newFruit = fruits.copyWithin(0, 2, 5);
// console.log(newFruit); // 5

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const newFruit = fruits.copyWithin(0, 2, 4);
// console.log(newFruit); // 6

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const myFruits = fruits.copyWithin(2,2,2);
// console.log(myFruits); // 7

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const ourFruits = fruits.copyWithin(fruits);
// console.log(ourFruits); // 8

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const inFruits = fruits.copyWithin(1,3,4);
// console.log(inFruits); // 9

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const myApple = fruits.copyWithin(2,3,4);
// console.log(myApple); // 10


// entries method
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Blackberry","Strawberry"];
// const fruitss = fruits.entries();
// console.log(fruitss);

// for(x of fruitss){
//     console.log(x); 
// } // 1

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const entr = fruits.entries();

// for(const element of entr){
//     console.log(element);
// } // 2


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const elememt = fruits.entries();

// for(const [index, value] of elememt){
//     console.log(index);
//     console.log(value);
// } // 3

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const element = fruits.entries();
// console.log(element);

// for(const [i, value] of element){
//     console.log(i, value);
// } // 4


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for(const [index, value] of fruits.entries()){
//     console.log(index);
//     console.log(value);
// } // 5

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.entries(function(index, value){
//     console.log(index);
//     console.log(value);
// }); // 6 -> doesn't work

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const variable = fruits.entries();

// for(const [i,v] of variable){
//     console.log(i);
//     console.log(v);
// } // 7

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const methodOne = fruits.entries();
// for(const [i, v] of methodOne){
//     console.log(i);
//     console.log(v);
// } // 8

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const methodTwo = fruits.entries();
// for(const [index, value] of methodTwo){
//     console.log(index, value);
// } // 9

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newFruit = fruits.entries();

// for(const [value, index] of newFruit){
//     console.log(value);
//     console.log(index);
// } // 10

// every method

// const number = [1,2,3];
// number.every(function(index){
//     let age =0;
//     console.log(age > 4);
// }); // 1

// function isBigEnough(element, index, array){
//     return element > 10;
// }

// const arr1 = [1,2,3,4,5];
// const arr2 = [42,12,34,15];

// console.log(arr1.every(isBigEnough));
// console.log(arr2.every(isBigEnough)); //2

// Fill method 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill('Kiwi');

// console.log(fillMethod); // 1

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMehod = fruits.fill('Jakefruits', 2,5);
// console.log(fillMehod); // 2

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill('Banana', 2);
// console.log(fillMethod); // 3

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMehod = fruits.fill('Pineapple', 2, 3);
// console.log(fillMehod); // 4

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill('Pineapple', 3);
// console.log(fillMethod); // 5

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill("pineapple", 3,6);
// console.log(fillMethod); // 6

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill('pineapple', 'Strawberry', 3);
// console.log(fillMethod); // 7 doesn't work

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill("Pineapple", 2);
// console.log(fillMethod); // 8

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill("Pineapple",2).length;
// console.log(fillMethod); // 9

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fillMethod = fruits.fill("AppleOR",0,4);
// console.log(fillMethod); // 10

// Filter Method

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const red = words.filter(function(filt){
//     let wrd = filt.length > 8;
//     return wrd;
// })


// console.log(red); // 1

// const arr = [12,34,54,6,7,8,10];

// const filteredItem = arr.filter(function(item){
//     let filterItem = item >= 10;
//     return filterItem;
// });

// console.log(filteredItem); // 2

// const arr = [12,34,54,6,7,8,10];

// const filteredItem = arr.filter(function(item, index, array){
//     console.log(item);
//     console.log(index);
//     console.log(array);
// })  // 3

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num){
//     for(let i = 2; num > i; i++){
//         if(num % i == 0){
//             return false;
//         }
//     }

//     return num > 1;
// }

// let primeNumber = array.filter(isPrime);
// console.log(primeNumber); // 4

// const marks = [12,45,67,34,78,23,99,30];

// const passMark = marks.filter(function(mark){
//     return mark > 33;
// })

// console.log(`Student Pass Marks: $passMark}`); // 5


