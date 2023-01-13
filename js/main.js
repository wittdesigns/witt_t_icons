console.log('JavaScript is runing!');

//for shorter coment note
/* longer js coment
- const is atype of variable - a bit of memory that can hold a value 

JS Uses (can use) ANY valid selector to make a connection to ANY element on the page - it works the same way as CSS, ]
selectors do, because its USING css selectors to find matching element(s).

the document is the DOM - the web page and all of its elements 
 */

//step 1 - make the connection to the elements you want to interact with
const jpgGraphic = document.querySelector("#bitmap");
const vectorGraphic = document.querySelector("#vector");
//here calls the elements, selectors


//here defines the function
function logID(){
    console.log('clicked in this element', this.id);
}


//step 2 - decide how you want the user to interact with the object you created in step 1
jpgGraphic.addEventListener('click', logID);
vectorGraphic.addEventListener('click', logID);
//here its the items calling the function to be applied


