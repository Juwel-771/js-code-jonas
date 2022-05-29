const greet = function(name){
    return function(msg){
        console.log(`${name} ${msg}`);
    }
}

const greter = greet('Juwel');
greter('Hi');

// using arrow function 

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Ahmed');