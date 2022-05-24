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
