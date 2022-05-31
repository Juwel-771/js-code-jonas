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

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const element = fruits.entries();
console.log(element);

for(const [i, value] of element){
    console.log(i, value);
}