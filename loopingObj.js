const obj = {
    mon:{
        open: 12,
        close: 10,
    },
    thu:{
        open: 12,
        close: 10,
    },
    fri:{
        open: 12,
        close: 10,
    }
};

const properties = Object.keys(obj);
console.log(properties);

for(const day of Object.keys(obj)){
    console.log(day);
}