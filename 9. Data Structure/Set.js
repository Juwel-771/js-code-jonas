// Creating new set
// const mySet = new Set(["a","b","c","d"]);
// console.log(mySet); // Do that 15 time

// const mySet1 = new Set([1,2,3,4,5,6]);
// console.log(mySet1); // 1

// const mySet2 = new Set([1,2,3,4,5,6]);
// console.log(mySet2); // 2

// const frndsName = new Set(['Nahid', 'Amin', 'Rifat','Riyad','Munna']);
// console.log(frndsName); // 3

// const club = new Set(['Barcelona', 'Real Madrid', 'Chelsea', 'Dortmund']);
// console.log(club); // 4

// const film = new Set(['Film1','Film1','Film2','Film2']);
// console.log(film); // 5

// Note: Set only take unique value. And set mainly use for filter
// array. Means remove duplicate value from array.

// const number = new Set([11, 11, 22, 22, 33, 33]);
// console.log(number); // 6

// const myNumber = new Set([435,345,34,22,41]);
// console.log(myNumber); // 7

// Note: After first carly brace always use third carly brace. 
// Because set are like array. so that's why we need to use third
// curly brace.

// const myAge = new Set([1,2,4,5,6,7,8]);
// console.log(myAge); // 8

// const yourNumber = new Set([11, 23, 25, 64, 23]);
// console.log(yourNumber); // 9

// const last = new Set([4,2,1,1,23,5,36,7,87]);
// console.log(last); // 10

// const obj = new Set([33, 12, 'juwel', 'leo']);
// console.log(obj); // 11

// const obj2 = new Set(['Juwel','Zubaiyer', 34, 35, 21]);
// console.log(obj2); // 12

// const mySet1 = new Set([3.2, 3.1, 3,4,'Juwel','Leo']);
// console.log(mySet1); // 13

// const mySet2 = new Set([1,2,3,4,5]);
// console.log(mySet2); // 14

// const mySet3 = new Set([43, 23, 53, 'Juwel', 'Sarah']);
// console.log(mySet3); // 15

// Adding New Value by add keyword

// const mySet = new Set([1,2,3,4,5,6]);

// mySet.add(7);
// console.log(mySet); // Do -> 10 times

// mySet.add(8);
// mySet.add(9);
// mySet.add(10);

// console.log(mySet); // 1

// const mySet = new Set();

// mySet.add('J');
// mySet.add('U');
// mySet.add('W');
// mySet.add('E');
// mySet.add('L');

// console.log(mySet); // 2

// const setOne = new Set([1,2,4]);

// setOne.add(5);
// setOne.add(7);
// setOne.add('j');

// console.log(setOne); // 3

// const setTwo = new Set(['j','u','w']);

// setTwo.add('z');
// setTwo.add('u');
// setTwo.add('b');
// setTwo.add('y');

// console.log(setTwo); // 4

// const set3 = new Set();

// set3.add(4);
// set3.add(3);
// set3.add(2);
// console.log(set3); // 5


// const set6 = new Set(['j','u','w','e']);

// set6.add('A');
// set6.add('H');
// set6.add('M');
// set6.add('E');
// set6.add('D');

// console.log(set6);
// console.log(set6.size); // 6

// const set7 = new Set([]);

// set7.add('J');
// set7.add('U');
// set7.add('W');
// set7.add('E');
// set7.add('L');

// console.log(set7); // 7

// const set8 = new Set();

// set8.add(7);
// set8.add(6);
// set8.add(5);
// set8.add(4);
// set8.add(3);
// set8.add(2);
// set8.add(1);

// console.log(set8); // 8

// const set9 = new Set();

// set9.add(3);
// set9.add(2);
// set9.add(1);
// console.log(set9); // 9

const set10 = new Set([]);

set10.add(4);
set10.add(3);
set10.add(2);
set10.add(1);

console.log(set10);
console.log(set10.size);
console.log(set10.has(3));
console.log(set10.has(6));

console.log(set10.delete(3));
console.log(set10);

for(const order of set10){
    console.log(order);
}

console.log(set10.values());


// example 
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const setStaff= [...new Set(staff)];
console.log(setStaff);

