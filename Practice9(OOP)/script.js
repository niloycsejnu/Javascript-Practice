/*
let mySelf ={
    fullName : "Niloy Datta",
    marks : 94,
    func : function(){
        console.log("Marks",this.marks);
    }
}
console.log(mySelf);
*/

/*
let employee ={
    tax(){
        console.log("Salary is increased 10%");
    }
}

let niloy ={
    salary:50000
}
niloy.__proto__ = employee;

*/

/*
let employee ={
    tax(){
        console.log("Salary is increased 10%");
    }
}

let niloy ={
    salary:50000,
    tax(){
        console.log("Salary is increased 30%");
    }
}
niloy.__proto__ = employee;
*/

/*
class toyota{
    color(){
        console.log("White");
    }
    structure(){
        console.log("Big");
    }
    seat(brand){
        this.brandZone = brand;

    }
}

let premio = new toyota();
premio.seat("Comfort");
let corola = new toyota();
corola.seat("Not Comfort");
*/

/*
class employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    post(){
        console.log("Manager")
    }
    salary(){
        console.log("50000")
    }
}
let niloy = new employee("niloy",25);
console.log(niloy);
let rafi = new employee("rafi",27);
console.log(rafi);
*/

/*
class Person{
    constructor(walk){
        this.walk = walk;
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Coding for solving problems");
    }

}

class Doctor extends Person{
    work(){
        console.log("Treating patient");
    }
}

let niloy = new Engineer("Walking");
let ahad = new Doctor();
*/

/*
class Person{
    constructor(walk,name){
        this.walk = walk;
        this.name = name;
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{
    constructor(walk,name){
        super(walk);
        this.name = name;
    }
    work(){
        console.log("Coding for solving problems");
    }

}
let niloy = new Engineer("Walking","Niloy");
*/


//Practice

/*
let data = "Secret";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`Website Data is ${data}`);
    }
}

let user1 = new User("Niloy","niloy@gmail.com");

class Admin extends User{
    
    constructor(name,email){
        super(name,email)

    }
    editData(){  
        data = "Secret also edited";
        console.log("Website Data that is",data);
    }
}
let admin1 = new Admin("Aminul","aminul@gmail.com");
*/





















































