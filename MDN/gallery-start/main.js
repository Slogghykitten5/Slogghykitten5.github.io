const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

let imgSrc = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"]

for(let i = 0;i<imgSrc.length;i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', imgSrc[i]);
thumbBar.appendChild(newImage);
}


thumbBar.onclick = function(e){
    s = e.target.getAttribute('src')
    displayedImage.setAttribute('src', s)
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    if(btn.textContent==="Darken"){
        btn.textContent = "Lighten"
        overlay.style.backgroundColor = ' rgba(0,0,0,0.5)'
    }
    else{
        btn.textContent = "Darken"
        overlay.style.backgroundColor = ' rgba(0,0,0,0)'
    }
}



