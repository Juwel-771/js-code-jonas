console.log("-------------- OR --------------");
console.log(3 || 'Juwel');
console.log('' || 'Juwel');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); 

const obj = {
    firstName : 'Md',
    secondName : 'Juwel',
    age : 22
}

const guest = obj.numberGuest || 10;
console.log(guest);

console.log(obj);