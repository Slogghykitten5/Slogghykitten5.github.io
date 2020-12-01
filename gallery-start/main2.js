const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.darken');
const overlay = document.querySelector('.overlay');

const img_bg = document.querySelector('.full_img_bg');
const body = document.querySelector('body')

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

body.style.width=window.width;

function check(){
    src = displayedImage.getAttribute('src');
    for(let i = 0;i<imgSrc.length;i++){
        need_img = thumbBar.querySelector('.img_'+i);
        if(src === imgSrc[i]){
            need_img.style.border = '10px double black';
            need_img.style.borderRadius = "20px";
        }
        else{
            need_img.style.border = '';
            need_img.style.borderRadius = "0px";
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
        body.style.backgroundColor = 'rgba(0,0,0,0.6)'
        img_bg.style.backgroundColor = 'rgb(117, 137, 139)'
        img_bg.style.background = "linear-gradient(180deg, rgba(135,9,9,1) 0%, rgba(88,87,107,1) 50%, rgba(18,98,113,1) 100%)"
    }
    else{
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        body.style.backgroundColor = ''
        img_bg.style.background = ""
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


