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

    orderDelivery({time = '20:20', address, starterIndex=1, mainIndex=1}) {
        console.log(`Food delivered at ${time} in place ${address} item on menu ${this.mainMenu[mainIndex]} 
        and food is ${this.starterMenu[starterIndex]}`);
    },

    makePasta(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1},
        ${ing2}, ${ing3}`);
    }

}

// const chek = [{
//     name: 'Md',
//     dept: 'CSE',
//     id: 382,
//     age: 22
// }
// ];

// const checking = chek[0]?.name;
// console.log(checking);
// // console.log(chek[0]?.name); // 1

// const obj = {
//     firstName: 'Md',
//     secondName: 'Juwel',
//     age: 22
// }

// const checkObj = obj?.age;
// console.log(checkObj); // 2

// const obj = {
//     firstName: 'Md',
//     secondName: 'Juwel',
//     age: 22
// } 

// const chain = obj?.realName ?? 'There is no name';
// console.log(chain); // 3 