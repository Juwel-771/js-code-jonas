
// // >>>>>>>>>>>>>>>>>>> Basic <<<<<<<<<<<<<<<
// const x = [1,2,3,4,5,6];
// const [a,b,c,...rest] = x;
// console.log(a,b,c,rest); // 1

// const y = [3,5,6,8];
// const [a,...rest] = y;
// console.log(rest); // 2

// const basic = ['b', 'a', 's', 'i', 'c'];
// const [a, b, ...rest] = basic;
// console.log(a,b,rest); // 3

// const mern = ['m','e','r','n','d','v','e','l','o','p','e','r'];
// const [a, b, c, d, ...rest] = mern;
// console.log(a, b, c, d, rest); // 4

// const react = ['R','E','A','C','T'];
// const [r, e, ,t, ...other] = react;
// console.log(r,e,t,other); // 5


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [a, b, ,c, d, , e, ...rest] = arr;
// console.log(a, b, c ,d ,e, rest); // 6

// const arr2 = [9,4,2,5,56,234];
// const [a1, ...rest] = arr2;
// console.log(a1,rest); // 7

// const arr = [1,2,3,5,6,6];
// const [a,v,x,...rest] = arr;
// console.log(a,v,x, rest); // 8

// const myArray = [1,2,3,4,5,6,7,8,9,10];
// const [ , e, ,v, ,r, ,n, ...rest] = myArray;
// console.log(e,v,r,n,rest); // 9

// const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const [ o, , d, , r, ,  f, , g, ...rest] = myArray;
// console.log(o,d,r,f,g,rest); // 10

// const arr = [1,2,3,4,5];
// const [a,b, ...other] = arr;
// console.log(a,b,other); // 11

// const arr = [6,7,8,9,10];
// const [t, , ,k, ...other] = arr;
// console.log(t,k,other); // 12

// const arr = [11,12,13,14,15];
// const [j,k, ...rest] = arr;
// console.log(j,k, rest); // 13

// const arr = [16,17,18,19,20];
// const [a,b,c,...other] = arr;
// console.log(a,b,c, other); // 14

// const arr = [1,2,3,4,5];
// const [a,v,...rest] = arr;
// console.log(a,v,rest); // 15


// const myName = ['m','d','j','u','w','e','l'];
// const [ m, d, ...rest] = myName;
// console.log(m,d,rest); // 16

// const str = ['S','T','R','I','N','G'];
// const [s,t,,r,...other]=str;
// console.log(s,t,r,other); // 17

// const str2 = ['B','A','N','G','L','A','D','E','S','H'];
// const [b,a,n,g,l,f,...rest] = str2;
// console.log(b,a,n,g,l,f,rest); // 18

// const str = ['J','U','W','E','L'];
// const [j,u, ...rest] = str;
// console.log(j, u, rest); // 19

// const str = ['Z','U','B','A','Y','E','R'];
// const [z,u,b, ...react] = str;
// console.log(z,u,b,react); // 20

// Note-Explain:- In any, suppose i want to only five element.
// but array has 10 elements. If i take only 5 element then what 
// will happen to other. For that case we need ...rest pattern.
// we will assign rest element to the rest element. 
// remember that ...rest will always assign to the left.
// ...rest pattern will always initialize to last element.

// >>>>>>>>>>>>>>>>>>>> WORK ON OBJECT <<<<<<<<<<<<<<<<<<<<

// const myObj = {
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
//         sat:{
//             open:12,
//             close: 09,
//         },
//         sun:{
//             open:12,
//             close: 09,
//         },
//         thr:{
//             open:12,
//             close: 09,
//         },
//         wed:{
//             open:12,
//             close: 09,
//         },
//     }
// }

// const {thu, mon, ...rest} = myObj.openingHours;
// console.log(thu, mon, rest); // 1

// const {mon, ...rest} = myObj.openingHours;
// console.log(rest); // 2

// const obj = {
//     arr : [1,2,3,4,5]
// };

// const [a,b,...rest] =obj.arr;
// console.log(rest);
// console.log(a,b,rest); // 3

// const obj = {
//     firstName: 'md',
//     secondName:'Juwel',
//     age: 22,
//     hobby:'Coding',
// }
// const {firstName,...rest} = obj;
// console.log(firstName, rest); // 4

// const simpleObj = {
//     FirstName: 'Md',
//     SecondName: 'Juwel',
//     Age: 22,
//     varsity: 'Port City International University',
//     school: 'KCCC',
//     anime: 'Naruto'
// }
// const{anime, Age, SecondName, ...rest} = simpleObj;
// console.log(anime, Age, SecondName);
// console.log(rest); // 5

// const dayC = {
//     one: {
//         sat: 'sat',
//         sun: 'sun'
//     },

//     two: {
//         mon: 'mon',
//         thu: 'thu'
//     },

//     three: {
//         wed: 'wed',
//         thr: 'thr'
//     }
// }

// const {sat, ...rest} = dayC.one;
// const {mon, ...rest2} = dayC.two;
// const {wed, ...rest3} = dayC.three;
// console.log(sat, mon, wed, rest, rest2, rest3); // 6 

// const week ={
//     openHours: {
//         sat: '2am',
//         sun: '3am',
//         mon: '4am',
//         thu: '5am',
//         wed: '6am',
//         thr: '7am',
//         fri: '8am',
//     }
// }

// const {sat, sun, mon, ...rest} = week.openHours;
// console.log(sat, sun, mon, rest); // 7 

// const anime = {
//     naruto: {
//         main: 'Naruto',
//         side: 'Sasuke',
//         girl1: 'Sakura',
//         girl2: 'Hinata',
//         sensei: 'Kakashi',
//         sensei2: 'Minato'
//     }
// }

// const {main, girl2, sensei2, ...rest} = anime.naruto;
// console.log(main, girl2, sensei2, rest); // 8

// const simple = {
//     anime: 'Naruto',
//     father: 'Minato',
//     mother: 'Kushina',
//     sensei: 'Kakashi'
// }

// const {anime, mother, ...rest} = simple;
// console.log(anime, mother, rest); // 9

// const myFver = {
//     chart:{
//         name: 'Uchiha Sasuke',
//         power: 'Rinnegran',
//         clan: 'Uchiha',
//         wife: 'Sakura',
//         child: 'Sarada Uchiha'
//     }
// }

// const {name,power, clan, ...rest} = myFver.chart;
// console.log(name, power, clan, rest); // 10

// const work = {
//     openingDay: {
//         sat:{
//             open: '9AM',
//             close: '3am'
//         },

//         sun:{
//             open: '9AM',
//             close: '3am'
//         },

//         mon:{
//             open: '9AM',
//             close: '3am'
//         },

//         thu: {
//             open: '9AM',
//             close: '3am'
//         },

//         wed: {
//             open: '9AM',
//             close: '3am'
//         },

//         thr: {
//             open: '9AM',
//             close: '3am'
//         },

//         fri: {
//             open: '9AM',
//             close: '3am'
//         }
//     }
// }

// const {sat, mon, ...rest} = work.openingDay;
// console.log(sat, mon, rest); // 11

// const {mon, thu, ...rest} = work.openingDay;
// console.log(mon, thu, rest); // 12

// const {sat, sun, ...root} = work.openingDay;
// console.log(sat, sun, root); // 13

// const {wed, thr, ...rest} = work.openingDay;
// console.log(wed, thr, rest); // 14

// const {fri, sat, ...rest}  = work.openingDay;
// console.log(fri, sat, rest);  // 15

// >>>>>>>>>>>>>>> Working On Function <<<<<<<<<<<<<<<

// const add = function(...Number){
//     let sum = 0;
//     let i =0;
//     for (i; i < Number.length; i++){
//         sum+=Number[i];
//     }
//     console.log(sum);
// }

// add(3,4);
// add(4,2,5,6,10,12,15,19);
// add(3,2.1,5); // 1

// const multi = function(...number){
//     let multi = 1;
//     for(let i=0; i<number.length; i++){
//         multi*=number[i];
//     }    

//     console.log(multi);
// }

// multi(5, 5);
// multi(10, 4, 2);
// multi(4, 9); // 2

// const animeList = function(...anime){
//     console.log(anime);
// }

// animeList('naruto','Boruto');
// animeList('Sasuke','Orochimaru'); // 3

// const myDetails = function(...details){
//     console.log(details);
// }

// myDetails('Juwel');
// myDetails('Ahmed');
// myDetails('Juwel'); // 4

// const divide = function(...number){
    
//     let dive = 1;

//     for(let i = 0; i < number.length; i++){
//         dive /= number[i];
//     }
//     console.log(dive);
// }

// divide(4, 2);

// console.log(4/2);
// console.log(4/2);  // 5


// const list = function(...name){
//     console.log(name);
// }

// list('Juwel');
// list('Zubayer');
// list('Xaphan'); // 6