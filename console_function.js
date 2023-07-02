// syntax to write, NOt neede to learn
console.log(console) //By this we can get list of all functions of console object
//below atre some examples: 
console.info("log")
console.warn("warn")
console.error("err")
console.assert("err " !=false)
console.assert("err"==false)

//this show how much exact taken to run for loop on console
console.time("for loop")
for(let i=0;i<5;i++)
{
    console.log(i)
}
console.timeEnd("for loop")


