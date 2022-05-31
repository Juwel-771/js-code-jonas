const myMap = new Map([
    ['name', 'Juwel'],
    ['id','352'],
    ['dpart', 'Compuer Science and Engineering']
]);

// myMap.forEach(function(value, index, array){
//     console.log(index);
//     console.log(value);
//     console.log(array);
// })

const user = 'Steve Thomas Williams';
const userName = user.toLowerCase().split(' ').map(function(name){
    return name[0];
}).join('');

console.log(userName);