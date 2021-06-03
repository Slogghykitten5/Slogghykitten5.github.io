let myimage = document.querySelector('img');
myimage.onclick = function(){
    let mysrc = myimage.getAttribute('src');
    if(mysrc === "images/firefox-icon.png") {
        myimage.setAttribute( 'src' , "images/image2.png");
    } else{
            myimage.setAttribute('src' , "images/firefox-icon.png")
        }
}
/*
let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUserName() {
    let myname = prompt('Please Enter your name:');
    localStorage.setItem('name', myName);
    myheading.textContent = 'You are stupid, '+ myname;
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else{
    let storedName = localStorage.getItem('name');
    myheading.textContent= 'Mozilla is cool, '+ storedName;
}

mybutton.onclick = function() {
    setUserName();
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName()
    }   else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}