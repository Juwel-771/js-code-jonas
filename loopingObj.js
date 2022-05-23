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

// Accessing on properties and getting properties name.
const properties = Object.keys(obj);
console.log(properties);

for(const day of Object.keys(obj)){
    console.log(day);
}

// Accessing the properties values.
const values = Object.values(obj);
console.log(values);

for(const valu of Object.values(obj)){
    console.log(valu);
}

// Entire Object 
const entire = Object.entries(obj);
console.log(entire);

const copyValue = [...values];
console.log(copyValue);