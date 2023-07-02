
//arrays creation
let fruits=["mango" ,1 ,2,null];
console.log(fruits);// this will print all values of fruits array

//changing value in array
fruits[1]="mango";
console.log(fruits);//value at fruits[0] becomes "fruits"

//join("seperator ") arrays element using a seperator

let t=fruits.join("_");
console.log(t)

// shift() , removes first elemnet from array and return removed element
let r=fruits.shift(); 
console.log(r) ;//op : mango

//unshift(n1): add n1 to start of array and return new array length
console.log(fruits.unshift("apple")) 
// const number=[2,3,4,5]
// number.splice(1,)

// function to sort an array
/*
function compare(a,b)
{
    return a-b// this tells 1st > 2nd for +ve so , ascending order
    //if we use return b-a instead of return a-b , then decreasing order.  
}
    

let a3=[4,3,6,7]
a3.sort(compare)
console.log(a3) */

