const allCurrencies = new Map([
    ['USD', 'United State Dollar'],
    ['POD', 'POUND OF DOLLAR'],
    ['TK','Bangladeshi Currencies']
]);

allCurrencies.forEach(function(value, index, array){
    console.log(`${value}: ${index}`);
});

const unique = new Set(['USD','POUND','RUPEE','DOLLAR']);
unique.forEach(function(value, key, array){
    console.log(`${key} ${value}`);
});