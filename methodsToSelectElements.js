//some methods
//1.select  elements by id
/*
console.log( document.getElementById("Home")); //here output will be  an object of html elemnet having id ="home" 
console.log(typeof document.getElementById("Home")); // op: object
const Home=console.log( document.getElementById("Home")); // store object in Hone
console.log(Home);

*/
//2.select elements using query selector
 
const Home=document.querySelector("#Home") // for id=Home
console.log(Home)
//as we know multiple elemenet can have same class , but it will return first element having class as conatiner and ignore rest.
//but if we  want to get all elements for tis class then use querySelectorsAll(.container)
console.log(document.querySelector(".container"))
console.log(document.querySelectorAll(".container"))


