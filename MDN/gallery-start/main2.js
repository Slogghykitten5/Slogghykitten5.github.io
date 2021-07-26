const favicon = document.querySelector('.favicon')
const doc_body = document.querySelector('body')

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const thumb_img = document.querySelector('thumbar img')

const btn = document.querySelector('.darken');

const img_bg = document.querySelector('.full_img_bg');
const right = document.querySelector('right')
const left = document.querySelector('left')

const zoom_bg = document.querySelector('.zoom_bg')
const zoom_img = document.querySelector('.zoom_img')
const zoom_img_wrap = document.querySelector('.img_wrap')

const query_more_700 = window.matchMedia('(min-width:700px)');

let big_left = document.querySelector('.big_left')
let big_right = document.querySelector('.big_right')
let exit = document.querySelector('.close')
let src = displayedImage.getAttribute('src')

/* Looping through images */

let imgSrc = ["images/balloon-sq1.jpg","images/balloon-sq2.jpg","images/balloon-sq3.jpg","images/balloon-sq4.jpg","images/balloon-sq5.jpg","images/balloon-sq6.jpg","images/leopardskin.jpg","images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];

function change_favicon(){
    src = displayedImage.getAttribute('src');
    favicon.setAttribute("href", src);
}


displayedImage.setAttribute('src',imgSrc[0]);

function load_thumb_img() {
    for(let i = 0;i<imgSrc.length;i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', imgSrc[i]);
        newImage.setAttribute('class',('img_'+i));
        newImage.style.width = `${((100/imgSrc.length).toFixed(4))}%`;
        thumbBar.appendChild(newImage);
    }
}
   
load_thumb_img()

function check_image_border(){
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

    change_favicon()
}

check_image_border()

thumbBar.onclick = function(e){
    s = e.target.getAttribute('src');
    displayedImage.setAttribute('src', s);
    check_image_border();
    change_favicon()
}
    


/* Wiring up the Darken/Lighten button */
let overlay = document.querySelector('.dark_cover');
btn.onclick = function(){
    if(btn.textContent==="Darken"){
        darken()
    }
    else{
        lighten()
    }
}

function darken() {
    btn.textContent = "Lighten";
    overlay.className = 'dark_cover_dis'
    overlay.style.animation = 'fade-in .5s both'
}

function lighten() {
    btn.textContent = "Darken";
    overlay.style.animation = 'fade-out 0.5s ease-out both'    
}

/*Done wiring up the Darken/Lighten Button*/


const but_left = document.querySelector('.left');
const but_right = document.querySelector('.right');


but_right.onclick = display_check_right()

but_left.onclick = display_check_left()

function display_check_right() {
    return function () {
        src = displayedImage.getAttribute('src');
        for (let i = 0; i < imgSrc.length; i++) {
            if (src == imgSrc[i]) {
                if (i === imgSrc.length - 1) {
                    displayedImage.setAttribute('src', imgSrc[0]);
                    zoom_img.setAttribute('src',imgSrc[0])
                    break;
                }
                else {
                    i = i + 1;
                    displayedImage.setAttribute('src', imgSrc[i]);
                    zoom_img.setAttribute('src', imgSrc[i]);
                    break;
                }
            }
            else {
                continue;
            }
        }
        check_image_border();
        change_favicon();
    };
}

function display_check_left() {
    return function () {
       src = displayedImage.getAttribute('src');
        for (let i = 0; i < imgSrc.length; i++) {
            if (src == imgSrc[i]) {
                if (i === 0) {
                    displayedImage.setAttribute('src', imgSrc[imgSrc.length - 1]);
                    zoom_img.setAttribute('src', imgSrc[imgSrc.length - 1]);
                    break;
                }
                else {
                    i = i - 1;
                    displayedImage.setAttribute('src', imgSrc[i]);
                    zoom_img.setAttribute('src', imgSrc[i]);
                    break;
                }
            }
            else {
                continue;
            }
        }
        check_image_border();
        change_favicon();
    };
}

function leave(){
    zoom_bg.style.animation = 'fade-out 0.5s  both'
    zoom_img_wrap.className = 'img_wrap'
    zoom_img.className = 'zoom_img'
    doc_body.className = ''
    big_left.className = 'big_left'
    big_right.className = 'big_right'
    exit.className = 'close'
}



if(query_more_700.matches){
    displayedImage.onclick = function(){
        zoom_bg.style.animation = 'fade-in 0.5s  both'
        zoom_img_wrap.className = 'img_wrap_dis'
        zoom_img.setAttribute('src',src)
        zoom_img.className = 'zoom_img_full'
        zoom_bg.className ='zoom_bg_full';
        doc_body.className = 'doc_body'
        big_left.className = 'big_left_dis'
        big_right.className = 'big_right_dis'
        exit.className = 'close_dis'
    }

    big_left.onclick = display_check_left()

    big_right.onclick = display_check_right()

    exit.onclick = function(){leave()}
    zoom_img.onclick = function(){leave()}

    console.log('hi')
}
else{
    displayedImage.onclick = function(){console.log('it works')}
    zoom_bg.style.animation = 'fade-out 0.5s  both'
    zoom_img_wrap.className = 'img_wrap'
    zoom_img.className = 'zoom_img'
    doc_body.className = ''
    big_left.className = 'big_left'
    big_right.className = 'big_right'
    exit.className = 'close'
    console.log('bye')
}

console.log('test')