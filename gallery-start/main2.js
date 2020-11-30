const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const img_bg = document.querySelector('.full_img_bg');

/* Looping through images */

let imgSrc = ["images/balloon-sq1.jpg","images/balloon-sq2.jpg","images/balloon-sq3.jpg","images/balloon-sq4.jpg","images/balloon-sq5.jpg","images/balloon-sq6.jpg","images/leopardskin.jpg","images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];

displayedImage.setAttribute('src',imgSrc[0]);

for(let i = 0;i<imgSrc.length;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgSrc[i]);
    newImage.setAttribute('class',('img_'+i));
    hi = newImage.style.width = `${((100/imgSrc.length).toFixed(4))}%`;
    thumbBar.appendChild(newImage);
}

function check(){
    src = displayedImage.getAttribute('src');
    for(let i = 0;i<imgSrc.length;i++){
        need_img = thumbBar.querySelector('.img_'+i);
        if(src === imgSrc[i]){
            need_img.style.border = '10px double black';
        }
        else{
            need_img.style.border = '';
        }
    }
}

check()

thumbBar.onclick = function(e){
    s = e.target.getAttribute('src');
    displayedImage.setAttribute('src', s);
    check();
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    if(btn.textContent==="Darken"){
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        img_bg.style.backgroundColor = 'rgb(132,179,185)';
    }
    else{
        btn.textContent = "Darken";
        overlay.style.backgroundColor = ' rgba(0,0,0,0)';
        img_bg.style.backgroundColor = 'rgb(214, 250, 255)';
    }
}


const but_left = document.querySelector('.left');
const but_right = document.querySelector('.right');



but_right.onclick = function(){
    src = displayedImage.getAttribute('src');
    for(let i = 0;i<imgSrc.length;i++){
        if(src==imgSrc[i]){
            if(i===imgSrc.length-1){
                displayedImage.setAttribute('src',imgSrc[0])
                break
            }
            else{
                i = i+1
                displayedImage.setAttribute('src',imgSrc[i])
                break
            }
        }
        else{
            continue;
        }
    }
    check()
}

but_left.onclick = function(){
    src = displayedImage.getAttribute('src');
    for(let i = 0;i<imgSrc.length;i++){
        if(src==imgSrc[i]){
            if(i===0){
                displayedImage.setAttribute('src',imgSrc[imgSrc.length-1])
                break
            }
            else{
                i = i-1
                displayedImage.setAttribute('src',imgSrc[i])
                break
            }
        }
        else{
            continue;
        }
    }
    check()
}

    img_bg.onmouseover = function(){/*
        but_left.style.zIndex = '1'
        but_right.style.zIndex = '1'*/
        but_left.style.backgrounImage = 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%),url("Icons/arrow-right-01-256.webp")center / 100px 120px no-repeat;'
    }

    img_bg.onmouseout = function(){/*
        but_left.style.zIndex = '-1'
        but_right.style.zIndex = '-1'*/
        but_left.style.backgroundImage = "";
    }

