const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperWord = function(str){
    const [first, ...rest] = str.split(' ');
    return [first.toUpperCase(),...rest].join(' ');
}


// Higher-Order function
const transform = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed By: ${fn.name}`);
}

transform('JavaScript is the Best',upperWord);
transform('JavaScript is the Best', oneWord);