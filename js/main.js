console.log('JavaScript is runing!');

//for shorter coment note
/* longer js coment
- const is atype of variable - a bit of memory that can hold a value 

JS Uses (can use) ANY valid selector to make a connection to ANY element on the page - it works the same way as CSS, ]
selectors do, because its USING css selectors to find matching element(s).

the document is the DOM - the web page and all of its elements 
 */

//step 1 - make the connection to the elements you want to interact with
//const jpgGraphic = document.querySelector("#bitmap");
const icon001 = document.querySelector("#vinil");
const icon002 = document.querySelector("#oldtape");
const icon003 = document.querySelector("#playbt001");
const icon004 = document.querySelector("#oldtape");
const icon005 = document.querySelector("#pausebutton");
const icon006 = document.querySelector("#nexttrack");
const icon007 = document.querySelector("#oldtape");
const icon008 = document.querySelector("#oldtape");
const icon009 = document.querySelector("#radio_new");
const icon010 = document.querySelector("#volumecontrol");
//here calls the elements, selectors


//here defines the function
function logthisID(){
    console.log('clicked in this element', this.id);
}


//step 2 - decide how you want the user to interact with the object you created in step 1
icon001.addEventListener('click', logthisID);
icon002.addEventListener('click', logthisID);
icon003.addEventListener('click', logthisID);
icon004.addEventListener('click', logthisID);
icon005.addEventListener('click', logthisID);
icon007.addEventListener('click', logthisID);
icon008.addEventListener('click', logthisID);
icon009.addEventListener('click', logthisID);
icon010.addEventListener('click', logthisID);
//here its the items calling the function to be applied


