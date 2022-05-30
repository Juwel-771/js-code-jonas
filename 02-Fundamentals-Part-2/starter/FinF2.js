const retakeCourse = function (sub1){
    return sub1 + 2;
}

function versityCourse(sub1){
    const fail = retakeCourse(sub1);
    if(fail > 5){
        console.log('You Passed this Semester');
        return fail;
    }
    
}

console.log(versityCourse(5));