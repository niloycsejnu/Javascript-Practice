/*
function sum(x,y){
    console.log(x+y);
}
sum(30,40);
*/

/*
const mul = (a,b) => {
    return(a*b);
    console.log(mul(2,3));
}
*/

/*
function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    console.log(`Number of Vowels in ${str} is ${count}`);
}
countVowels("NiloyDatta");
*/

/*
let arr = [1,2,3,4,5];
arr.forEach(function myVal(val){
    console.log(val);
})
*/

/*
let arr = [1,2,3,4,5];
arr.forEach(function myVal(val,idx,arr){
    console.log(val,idx,arr);
})
*/

/*
let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
})
*/

/*
let arr = [1,2,3,4,5];
arr.forEach(function sqrVal(val){
    console.log(val*val);
})
*/

/*
let arr = [1,2,3,4,5];
let newArr = arr.map(function sqrVal(val) {
    return val*val;
})
console.log(newArr);
*/

/*
let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = arr.filter((val) =>{
    return val%2 === 0;
})
console.log(newArr);
*/

/*
let arr = [1,2,3,4,5,6,7,8,9,10];
const sum = arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(sum);
*/

/*
let arr =[3,1,16,28,10,7,24,9]
const large = arr.reduce((prev,curr)=>{
    return prev>curr? prev:curr;
})
console.log(large);
*/

/*
let marks = [77,93,65,98,90,86,99,72];
let marksAbove90 = marks.filter((val)=>{
    return val>90;
})
console.log(marksAbove90);
*/

/*
let n = prompt("Enter a number:");
let arr =[];
for(let i=0;i<n;i++){
    arr[i]=i+1;
}
console.log(`The array is = [${arr}]`);
let sum = arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(`The sum of 1 to ${n} is = ${sum}`);

let mul = arr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(`The mul of 1 to ${n} is = ${mul}`);
*/

/*
let marks = [20,32,27,24,36,39,23];
let marksAbove30 = marks.filter((val)=>{
    return val>30;
})
console.log(marksAbove30);
*/

/*
let marks = [20,32,27,24,36,39,23];
let marksAbove30 = marks.find((val)=>{
    return val>30;
})
console.log(marksAbove30);
*/

/*
let marks = [20,12,37,24,36,39,23];
let marksAbove30 = marks.findIndex((val)=>{
    return val>30;
})
console.log(marksAbove30);
*/

/*
let marks = [20,12,37,24,36,39,23];
let marksAbove40 = marks.findIndex((val)=>{
    return val>40;
})
console.log(marksAbove40);
*/

/*
let marks = [20,12,37,24,36,39,23];
let check = marks.includes(22);
console.log(check);
*/

/*
let marks = [20,12,37,24,36,39,23];
let check = marks.indexOf(24);
console.log(check);
*/

/*
let marks = [20,12,37,24,36,39,23,24];
let check = marks.lastIndexOf(24);
console.log(check);
*/

/*
let country = "Bangladesh";
console.log(country.charAt(3));
*/

/*
let country1 = "Bangladesh ";
let country2 = "India";
console.log(country1.concat(country2));
*/

/*
let country = "Bangladesh";
console.log(country.replace("desh","-DESHI"));
*/

/*
let country = "Bangladesh";
console.log(country.substring(0,6));
*/

/*
let obj = new Date();
console.log(obj.getDate());
console.log(obj.getDay());
console.log(obj.getFullYear());
console.log(obj.getHours());
console.log(obj.getMonth());
console.log(obj.getTime());
console.log(obj.getMinutes());
console.log(obj.getMilliseconds());
*/

/*
let num = -7;
console.log(Math.abs(num));

let num1 = 7.5;
console.log(Math.ceil(num1));

let num2 = 7.5;
console.log(Math.floor(num2));

console.log(Math.max(14,7));
console.log(Math.min(4,9));
console.log(Math.random());

let num3 = 7.8;
console.log(Math.round(num3));
*/


/*
let num = "7.9";
console.log(Number.parseInt(num));
console.log(Number.parseFloat(num));

let num1 = 7;
console.log(Number.isFinite(num1));
console.log(Number.isInteger(num1));

let num2 = 7.57237448489;
console.log(num2.toFixed(3));
let num3 = console.log(num2.toString());
console.log(typeof(num2));
console.log(typeof(num3));
console.log(typeof(num2.toString()));
*/

// ---------------------------------------------------
