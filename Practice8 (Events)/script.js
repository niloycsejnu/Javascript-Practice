/*
let btn = document.querySelector("#btn");
btn.onclick = () =>{
    console.log("The button is clicked");
    alert("Hello!");
    let a = 25;
    a++
    console.log(a);
}
*/

/*
let box = document.querySelector(".box");
box.ondblclick = () =>{
    box.innerText = "Niloy";
    console.dir(box);
}
*/

// Alternative way is in the below..
/*
let box = document.querySelector(".box");
box.addEventListener("click",(e) =>{   // e is an object used as an argumnet
    box.innerText = "Niloy";
    console.dir(box);
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
})
*/

/*
let box = document.querySelector(".box");
box.addEventListener("click",()=>{
    console.log("Clicked 1");
})
box.addEventListener("click",()=>{
    console.log("Clicked 2");
})

let del = ()=>{
    console.log("Clicked 3");
}
box.addEventListener("click",del)

box.addEventListener("click",()=>{
    console.log("Clicked 4");
})

box.removeEventListener("click",del)  //remove an event 
*/
// ----------------------------------------------------------------------

/*
let mode = document.querySelector("#mode");
let currMode = "light";
mode.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        mode.innerText = "dark";
        document.querySelector("body").style.backgroundColor ="black";
    }
    else {
        currMode = "light";
        mode.innerText = "light";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currMode);
})
*/

//-------------------------------------------------------------------------------

/*
let btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    let result = close();  // alert,confirm,promt,close,open
    console.dir(result);
})

setTimeout(()=>{
    alert("This is Niloy Datta");
},10000);
*/

/*
navigator.geolocation.getCurrentPosition((position)=>{
    let latitude = position.coords.latitude;
    let altitude = position.coords.altitude;
    let longitude = position.coords.longitude;
    let speed = position.coords.speed;
    console.log(`Latitude is ${latitude}`);
    console.log(`Longitude is ${longitude}`);
    console.log(`Altitude is ${altitude}`);
    console.log(`Speed is ${speed}`);
})
*/

/*
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(`Latitude is ${position.coords.latitude}`);
    console.log(`Longitude is ${position.coords.longitude}`);
    console.log(`Altitude is ${position.coords.altitude}`);
    console.log(`Speed is ${position.coords.speed}`);
})
*/