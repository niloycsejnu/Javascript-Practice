/*
let marks=[65, 56, 78, 39, 94];
console.log(marks);
console.log("Length of this array is:",marks.length);

let info=["Niloy Datta", 25, "CGPA-3.5", "CSEJnu", "Dhaka" ];
console.log(info);
console.log(typeof info);
*/

/*
let info=["Niloy Datta", 25, "CGPA-3.5", "CSEJnu", "Dhaka" ];

console.log(info);
console.log(info[0]);
console.log(info[3]);
console.log(info[4]);

info[1]=30;
console.log(info);
*/

/*
let info=["Niloy Datta", 25, "CGPA-3.5", "CSEJnu", "Dhaka" ];
for(let idx=0;idx<info.length;idx++){
    console.log(info[idx]);
}
*/

/*
let cities = ["Dhaka", "Narayanganj", "Munshiganj", "Narsindi"];
for(let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
}
*/

/*
let marks = [85, 97, 44, 37, 76, 60];
let sum=0;
for(let i=0; i<marks.length; i++){
    sum=sum + marks[i];
}
const avg = sum/marks.length;
console.log(`The avg marks of the students is: ${avg}`);
*/

/*
let prices=[250,645,300,900,50];
for(let i=0; i<prices.length; i++){
    console.log("The price before offer is:",prices[i]);
    prices[i] = prices[i]- prices[i]*0.1;
    console.log("The price after offer is:",prices[i]);
}
*/

/*
let foods = ["Chicken", "Rice", "Potato", "Salt"];
console.log(foods.push("Mango"));
console.log(foods.push("Sugar","Lichi"));
console.log(foods);
*/

/*
let foods = ["Chicken", "Rice", "Potato", "Salt"];
console.log(foods);
let deleteItem = foods.pop();
console.log(foods);
console.log("Deleted Item is:",deleteItem);
*/

/*
let marvelHeroes = ["Hulk", "Thor", "Iron Man"];
let dcHeroes = ["SpiderMan", "BatMan", "SuperMan"];
let heroes = marvelHeroes.concat(dcHeroes);
console.log("All the Heroes are:",heroes);
*/

/*
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
console.log("All the Heroes are:",heroes);
*/

/*
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(-3,-1);
console.log(citrus);
*/

/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm", "Netflix"];
companies.splice(0,1);
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
*/

/*
let arr = Array.from("Niloy Datta");
console.log(arr);
*/
