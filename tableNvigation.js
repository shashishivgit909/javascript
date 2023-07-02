const t=document.body.firstElementChild.firstElementChild //body div table
console.log(t) // table
console.log(t.rows) // table rows collectionsi.e object
console.log(t.tHead) // use capitalof tHead becouse js support camel case
//returns thead
console.log(t.tHead.firstElementChild) //return  first element of thead
console.log(t.tFoot)//here is no foot in table so no op but it is syntax to use
console.log(t.tBodies)//collection of tbodies i.e object

