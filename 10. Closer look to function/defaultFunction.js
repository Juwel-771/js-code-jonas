const bookings = [];

const createBooking = function(flightName, passengerNumber=1, price=200){
    const booking = {
        flightName,
        passengerNumber,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking("20LH");

//NOTE: By defining value in function parameter in ES6 way.