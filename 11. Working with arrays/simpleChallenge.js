
const date = '2022-5-5';

// const [year, month, day] = date.split('-');

// const result = [month, day, year].join('/');
// console.log(result);

const newDate = date.split('-');
console.log(newDate);
const dateManage = newDate.reverse();
const finaleDate = dateManage.join('/');
console.log(finaleDate);