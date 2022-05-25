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

// if(restaurant.openingHours && restaurant.openingHours.mon){
//     console.log(restaurant.openingHours.sat.open);
// }

console.log(restaurant.openingHours?.sat || 'Sorry we don\'t open that time');

const days = ['mon','tue','wed','thu','fri','sat','sun'];

for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'Sorry we don\'t open on this day';
    console.log(open);
}

// Method
console.log(restaurant.order?.(0, 1) ?? 'Method Does not exits');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method Does not exist');

// Array 
const users = [{
    name: 'Juwel',
    email: 'juwelmd@gmail.com',
    age: 22
}];

console.log(users[20]?.name);
