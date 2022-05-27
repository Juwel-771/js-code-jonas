const juwel = {
    firstName: "Md",
    secondName: "Juwel",
    age: 22,
    job: "Software Engineering",
    institute: "PCIU",
}

const detailsInt = prompt("Tell me what you want know about me");

if((juwel[detailsInt])){
    console.log(juwel[detailsInt]);
}else{
    console.log("Details not found");
}