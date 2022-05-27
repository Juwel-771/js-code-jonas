// const bookings = [];

// const createBooking = function(flightName, passengerNumber=1, price=200){
//     const booking = {
//         flightName,
//         passengerNumber,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking("20LH");

//NOTE: By defining value in function parameter in ES6 way.

let flight = "L23H";
let check ={
    name: "Juwel Ahmed",
    passport: 234032483432
};

const crateFlight = function(flightName, passenger){
    flightName = "L342";
    passenger.name = "Mr "+ passenger.name;

    if(passenger.passport == 234032483432){
        alert('Check In');
    }else{
        alert('Wrong Passport');
    }
}

crateFlight(flight,check);
console.log(flight);
console.log(check);

const catchFault = function(pss){
    pss.passport = Math.trunc(Math.random()*10000000);
    console.log(pss);
}

catchFault(check);
crateFlight(flight,check);