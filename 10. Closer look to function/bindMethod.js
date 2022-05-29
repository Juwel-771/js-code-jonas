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

const swiss = {
    airline: 'SwissAir',
    iataCode: 'SA',
    bookings: []
}

const book = lufthasa.book;

const bookLUF = book.bind(lufthasa);
bookLUF(23, 'Juwel');

const bookEW = book.bind(euroWings);
bookEW(25, 'Xaphan');

const bookSW = book.bind(swiss);
bookSW(26, 'Xavier');

const bookFlight = book.bind(euroWings, 14);
bookFlight('Juwel');
bookFlight('Sarah');
bookFlight('Xenia');
bookFlight('Winesia');

console.log(bookLUF);