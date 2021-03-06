const airline = 'TAP Air Portugal';
const plane = 'A320';

// taking value by index number
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

// string length
console.log(airline.length);
console.log(plane.length);

// string method
console.log("AIR: " + airline.indexOf('Air'));
console.log("Last:" + airline.lastIndexOf('r'));
console.log("index: " + airline.indexOf('r'));

// slide 
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddle = function(seat){
    const sliceValue = seat.slice(-1)
    if(sliceValue === 'B' || sliceValue === 'C'){
        console.log("Congratulation You got the Middle Seat " +seat);
    }else{
        console.log("Sorry, YOU did not got that one " + seat);
    }
}

checkMiddle('11B');
checkMiddle('23C');
checkMiddle('3E');

// Simple string method

const passenger = 'jUwEL';
const passengerLower = passenger.toLowerCase();
const passengerUpper = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerUpper);

const priceGB = '299.94%';
const replaceMethod  = priceGB.replace('%', '$');
console.log(replaceMethod);

const events = 'All passenger come to boarding door 23. Boarding door 23';

console.log(events.replaceAll('door', 'gate'));

// Booleans 
const planeTow = 'Airbus A320neo';
console.log(planeTow.includes('A320'));
console.log(planeTow.includes('Boeing'));
console.log(planeTow.startsWith('Airb'));
console.log(planeTow.endsWith('neo'));

// Practice Execrise

const baggage = function(item){
    const goods = item.toLowerCase();

    if(goods.includes('knife') || goods.includes('gun')){
        console.log('Please put this thing down');
    }else{
        console.log('You are welcome to abroad');
    }

};

baggage('I have Knife');
baggage('I have Gun');
baggage('I have nothing to show');


// Split and join

console.log('a+very+nice+string'.split('+'));
console.log('Md Juwel'. split(' '));

const [firstName, lastName] = 'MD Juwel'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);