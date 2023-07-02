//3 waays to write a function in js 

/*
// 1st way function synatx:
function add(x , y)
{
    return x+y
}
//void function with  paarameter



function add1(x , y)
{
    console.log( x+y)
}

//Note : definng function above or below than revoking doesnot matter .
//revoking above funtions(without revoking or calling them they will not do anything )
let v=add(5,6)
console.log(v)
 add1(4,9)

 */
//2nd way to write function (called arrow function) here fun is name of function with two parametrer (a,b))
/*
let fun=(a,b)=>{
    //here  a, b are parameters 
    //body
 }


//VVVVVVi  .3rd way function synatx 
const hello1 = function(){
     return "helo";
 }


 //eg of defining  arrow function as argument inside a function

const hello1 = function(){
     return "helo";
 }
const hello = (data) => {

  console.log("adil");
}
/*
here hello is a function with argument as an arrow function(callback function) which is passed to above defined function hello(data) . here data stores this call back function.
*/
/*
hello(()=>{
    console.log("shahsi");
});

*/

//hosting eg: op:10  100  1
var x = 1;
a();
b(); // we are calling the functions before defining them. This will work
//properly, as seen in Hoisting.
{
  var value=5
}
console.log(value);
console.log(x);
function a() {
     data = 10; // local scope because of separate execution context
}
console.log(data);
function b() {
   x = 100;

}