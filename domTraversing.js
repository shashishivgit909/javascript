
 

 const rootNode = document.getRootNode();op: document
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes);// NodeList(3) [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode)
console.log(textNode1)

//parent child realation
console.log(headElementNode.parentNode)//op:html object
console.log(typeof headElementNode.parentNode)//op: object

//sibling realtion
console.log(headElementNode.nextSibling)//text
console.log(headElementNode.nextSibling.nextSibling)//body

//Note: sometimes we need only element sibling for that we use 
console.log(headElementNode.nextElementSibling)//op: body 

// // console.log(headElementNode.childNodes);
// // sibling relation 
// // const h1 = document.querySelector("h1");
// // const body = h1.parentNode.parentNode;
// // body.style.color = "#efefef";
// // body.style.backgroundColor = "#333"
// // const body = document.body
// // body.style.color = "#efefef";
// // body.style.backgroundColor = "#333"
// // const head = document.querySelector("head");
// // // console.log(head);
// // const title = head.querySelector("title");
// // console.log(title.childNodes);
// // const container = document.querySelector(".container");
// // console.log(container.children);

