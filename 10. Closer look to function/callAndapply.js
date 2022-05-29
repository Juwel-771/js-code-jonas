const lufthasa = {
    airline: 'Lufthanasa',
    iataCode: 'LH',
    bookings: [],
    book(flightName, name){
        console.log(`${name} booked on seat on ${this.airline} 
        flight ${this.iataCode} ${flightName}`);
        this.bookings.push({flight: `${this.iataCode} ${flightName} name`});
    },
}

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthasa.book;

book.call(lufthasa, 239, 'Md Juwel');
book.call(euroWings, 277, 'Juwel Ahmed');

//Using Apply method

book.apply(euroWings, [250, 'Abir']);

const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array);

const number = [25,36,23,54,77];
let max = Math.max.apply(null, number);
console.log(max);

let min = Math.min.apply(null, number);
console.log(min);