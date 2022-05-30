
const date = '2022-5-5';

const [year, month, day] = date.split('-');

const result = [month, day, year].join('/');
console.log(result);
