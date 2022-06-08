let status = true;
console.log("Task 1");

// console.log("Task 2");


// promise definition 
const promise = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        if(status){
            resolve("Task 2");
        }else{
            reject("Failed")
        }
    }, 2000)

});

// promise call
promise.then(function(value){
    console.log(value);
}).catch(function(err){
    console.log(err);
});

console.log("Task 3");