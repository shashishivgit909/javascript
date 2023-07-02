
//select elemet by id and changes its CSS
const ctitle1=document.getElementById("card-title1")// select element with id as "card-title1"
ctitle1.style.color="red" //now it eleement and it chnages its CSS , doesnot previously css had applied to it or not

//select elements by class and changes its  css

const ctexts=document.getElementsByClassName("card-text") // here "card-text is class name" , here ctexts has collection 
console.log(ctexts) 

ctexts[0].style.color="blue"
ctexts[1].style.color="red"
ctexts[2].style.color="green"

//querySelector

const ctext2=document.querySelectorAll(".card-text") // here card-text is al class so it is a CSS selectors
//gives collection of all elements having class .
console.log(ctext2)
ctext2[1].style.color="red"
ctext2[2].style.color="green"
ctext2[2].style.color="blue"

const ctext3=document.querySelector(".card-text") // op: first one element with given class 
 
//note: in serching dome we can apply on any object not only on document eg: below same can be applied to other function
//such as: getElementsById, getElementsByClasss

document.body.querySelector("#card-title1").style.background="black"

//getelements by tag name(element name)
console.log(document.getElementsByTagName("a")) //returns collection of anchor elements 
console.log(document.querySelector(".card").getElementsByTagName("a")) //returns collection of anchor elements  for thiose with class as "card"
 
//getElementsByName : here name is an attribute used in elements
console.log(document.getElementsByName("search")) // here search is value of attribute name in some elements