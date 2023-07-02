// for each loop in ARRAY
const num=[1,2,3,4]

//1. first way
// num.forEach(function(n, index , num)
// {
//  console.log(`index is ${index} and resul is ${n*3} and array is ${num}`)
// })

 // 2nd way to use for each loop in array
num.forEach((value,index,array)=>
{
    console.log(value+1 , index)
})
//Note:if we need to do opreation on array element use forEachLoop But when need to create a new array after doing opreation on array elements we use map.

//MAP METHOD OF ARRAY(ORIGINAL ARRAY REMAINS UNCHNAGED)
// map method do opreation on array elements and return output which is stored in array 'a' as a new modifies array WITHOUT CHANGING ORIGINAL ARRAY
// if not returned anything then undefined will be stored in new array .
let a=num.map((value , index)=>
{
    return value+1;
})

console.log(a)
console.log(num)

//FILTER METHOD OF ARRAY (ORIGINAL ARRAY REMAINS UNCHNAGED)

//filter method : used to create a  array after filtering arrays element based on given filter function.
//filter method returns will be collected by   an array a3
let a2=[12, 34,56, 1, 2 , 3]
let a3=a2.filter((value)=>
{
   return value<5 
})
console.log(a3) // op:[1,2,3]