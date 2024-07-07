
let x = BigInt(250);
console.log(x);

let y = Symbol("Hello!");
console.log(y);

const student = {
    fullName:"Niloy Datta",
    Age:24,
    Country:"Bangladesh",
    isPass:true
    } 
    student["Age"] = student["Age"]+4;
    console.log(student);
    console.log(typeof student["isPass"]);