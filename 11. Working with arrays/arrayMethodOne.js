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

// Find method added
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(function(element){
//     return element > 10;
// })

// console.log(found);  // 1

// const fruit = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 5},
//     {name: 'cherries', quantity: 8},
// ];

// const findFruit = fruit.find(function(isCherries){
//     return isCherries.name == 'cherries'
// });

// console.log(findFruit); // 2

// const fruit = [
//     {name: 'Mango', quantity: 2},
//     {name: 'Bananas', quantity: 5},
//     {name: 'Cherries', quantity: 9},
//     {name: 'Jakefruits', quantity: 3},
//     {name: 'Guava', quantity: 7},
// ];

// const checkFruit = fruit.find(function(isFruitAvailable){
//     return isFruitAvailable.name == 'Guava';
// });

// console.log(checkFruit); // 3

// findIndex method

// function isPrime(num){
//     for(let i = 2; num > i; i++){
//         if(num % i == 0){
//             return false;
//         }
//     }

//     return num > 1;
// } // 1

// const number = [4, 6, 8, 9, 12];
// const checkPrime = number.findIndex(isPrime);
// console.log(checkPrime);

// const arrNumber = [4,6,8,10,12];
// const findNumber = arrNumber.findIndex(function(number){
//     return number > 6;
// });

// console.log(findNumber); // 2

// const arrNumber = [4,6,8,10,12];
// const findNumber = arrNumber.findIndex(function(number){
//     return number > 6;
// });

// console.log(findNumber);
// console.log(arrNumber[findNumber]); // 3

// forEach function
// const arr = [1,2,3,4,5];
// const iterate = arr.forEach(function(element, index, array){
//     console.log(element);
//     console.log(index);
//     // console.log(element);
//     console.log(`Element: ${element} Index: ${index}`);
// }) // 1

// const obj = ['item1', 'item2', 'item3'];
// const copyItem = [];
// obj.forEach(function(item){
//     copyItem.push(item);
// })

// console.log(copyItem);

// from method

// const arr = ('juwel');
// console.log(Array.from(arr));

// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// const newArr = Array.from(set);
// console.log(newArr);

// include method

// const obj = ['car', 'bike','robot','track'];
// console.log(obj.includes('car'));

// const obj = ['a', 'b', 'c'];

// console.log(obj.includes('a',-100));
// console.log(obj.includes('b',-60));
// console.log(obj.includes('c',45));

// index method

// const arr = [1,2,3,4,5,6,7,8,9];
// const indexElement  = arr.indexOf(5);
// console.log(indexElement);

// isArray 
// const arr = [1,2,3,4];
// const check = Array.isArray(arr); 
// console.log(check);

// join method
// const arr = ['Md','Juwel','Ahmed'];
// const newArr = arr.join("-");
// console.log(newArr);

// const arr1 = ['Md','Juwel','Ahmed'];
// console.log(arr1.join('<->'));

// keys method

// const obj = ['md', 'juwel', 'ahmed'];

// const key = Object.keys(obj);
// console.log(key);

// const numbers = [2, 5, 9, 2];
// console.log(numbers.lastIndexOf(2));     // 3
// console.log(numbers.lastIndexOf(7));     // -1
// console.log(numbers.lastIndexOf(2, 3));  // 3
// console.log(numbers.lastIndexOf(2, 2));  // 0
// console.log(numbers.lastIndexOf(2, -2)); // 0
// console.log(numbers.lastIndexOf(2, -1)); // 3

// map method

// const arr = [1,2,3,4,5,6];
// const newMap = arr.map(function(elements){
//     return elements * 4;
// })

// console.log(newMap);
// const kvArray = [{ key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }];

// const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
// console.log(reformattedArray);

// pop method
// const arr = [12,14,16,18,20];
// arr.pop();
// console.log(arr);

// push method
// const arr = [12,14,16,17];
// arr.push(20);
// console.log(arr);

// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']

// // Merge the second array into the first one
// vegetables.push(...moreVegs);

// console.log(vegetables) 

// reverse method

// const name = ['Ahmed', 'Juwel', 'Md'];
// name.reverse();
// console.log(name);

// shift array 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
// const newFruit= fruits.slice(2);
// console.log(newFruit);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
// const newFruit = fruits.slice(3,4);
// console.log(newFruit);

// some method

// const arr = [12,23,45,65,67];
// const check = arr.some(function(value){
//     return value > 19;
// })

// console.log(check);

// const arr = [2, 5, 8, 1, 4];
// console.log(arr.some(x => x > 10));  // false

// const arr = [2, 5, 8, 1, 4];
// arr.sort();
// console.log(arr);


// const obj = ["z", "a", "c","b"];
// obj.sort();
// console.log(obj);

// splice method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Jakefruit", "Kiwi","Pineapple","Strawberry");
// console.log(fruits);

// const indexFruit = fruits.indexOf("Jakefruit");
// console.log(indexFruit);

// fruits.splice(2,2);
// console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
console.log(fruits);

// unshift method
fruits.unshift("Lemon","Pineapple");
console.log(fruits);

// value of 
const myArray = fruits.valueOf();
console.log(myArray);