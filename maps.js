// setting values
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories',['Italian', 'Pizzeria','Vegetarian','Organic'])
    .set('open', 11)
    .set('close',21)
    .set(true,'We are open :D')
    .set(false,'We are close :(');

    console.log(rest);

    // Do -> 15 times

// getting values

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// checking values
console.log(rest.has('categories'));

// deleting  values
rest.delete(2);
console.log(rest);

// clearing all values 
// rest.clear();