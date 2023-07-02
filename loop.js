let a1=["hari", "ram", "shyam"];
// below making upper case of each string element of a1 and store in second array a2
 let a2=[];
 console.log(a1);
 // for loop
 for(let i=0;i<a1.length;i++)
 {
    a2.push(a1[i].toUpperCase()); // making upper case of each string of a1.

 }
 console.log(a2);
 
 // Slice() USE:
 console.log(a1);
 let anew=a1.slice(2);
 console.log(anew);

//concattenation in string OR a number and string 
 let a='shashi';
 console.log(a + 5);
//object o
 let o={
   shashi:98,
   ram:87
 }

 //for in loop , traverse throug key of objects
for(let i in o)
{
   console.log("marks of" + i + "=" + o[i] ); //op: shashi =98 
                                                   //,ram=87
}

//for of loop: ,applied  for iterable objects( string and arrays only)
for(let i of "harry")
{
   console.log(i );//     op: h 
   //                        a 
   //                        r
   //                        r 
   //                        y
}

