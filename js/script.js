// -----Googs-----

const goodsItems = document.querySelectorAll('.goods_item_link');

const activeGood = function(event){
    let target = event.target;      
    if(!target.classList.contains('active')){
        document.querySelector('.active').classList.remove('active');
        target.classList.add('active');
    }   
}

let activeImg = function(event){
    let target = event.target; 
    let images = document.querySelectorAll('.goods_img');
    
    for (let i = 0; i < images.length; i++){
        let imgGoogs = images[i].classList[1];        
        if (target.classList[1] === imgGoogs) {
            document.querySelector('.img_active').classList.remove('img_active');
            images[i].classList.add('img_active');
        }
    }       
}

for (let i = 0; i < goodsItems.length; i++){
    goodsItems[i].addEventListener('mousemove', activeGood);
    goodsItems[i].addEventListener('mousemove', activeImg);
}


// // -----Slider-----

// const slides = document.querySelectorAll('.slide_01');
// const paginations =document.querySelectorAll('.paginationItem_01');

// let slideNumber = 0;

// const activeSlide = function(){
//     for (let slide of slides) {       
//         slide.classList.remove('activeSlide');
//     }
//     slides[slideNumber].classList.add('activeSlide');
// }

// const activePagination = function(){
//     for (let pagination of paginations) {       
//         pagination.classList.remove('activePagination');
//     }
//     paginations[slideNumber].classList.add('activePagination');
// }

// const nextSlide = function() {
//     if(slideNumber >= slides.length){
//         slideNumber = 0;              
//         activePagination();
//         activeSlide();        
//     }
//     else{          
//         activePagination();
//         activeSlide();    
//         slideNumber++;
//     }
// } 

// const slideShow = function(event){
//     if(event == undefined){
//             nextSlide();
//         }
//     else {
//         slideNumber = event.target.getAttribute('data_pagination');
//         nextSlide();
//     }      
// }

// for (let i = 0; i < paginations.length; i++){
//     paginations[i].addEventListener('click', slideShow);    
//     paginations[i].setAttribute('data_pagination', i);
// }

// setInterval(slideShow, 2000);

// -----Slider-----

const slides_01 = document.querySelectorAll('.slide_01');
const paginations_01 =document.querySelectorAll('.paginationItem_01');

const slides_02 = document.querySelectorAll('.slide_02');
const paginations_02 =document.querySelectorAll('.paginationItem_02');

let slideNumber_01 = 0;
let slideNumber_02 = 0;

const activeSlide = function(el,num){  
    // console.log(el);  
    for (let slide of el) { 
        slide.classList.remove('activeSlide');
    }
    el[num].classList.add('activeSlide');
}

const activePagination = function(el, num){
    for (let pagination of el) {  
        pagination.classList.remove('activePagination');
    }
    el[num].classList.add('activePagination');
}




// для 1го слайдера
const nextSlide_01 = function(sl, p) {
    if(slideNumber_01 >= sl.length){
        slideNumber_01 = 0;              
        activePagination(p, slideNumber_01);
        activeSlide(sl, slideNumber_01);        
    }
    else{          
        activePagination(p, slideNumber_01);
        activeSlide(sl, slideNumber_01);    
        slideNumber_01++;
    }
} 

const slideShow_01 = function(event){
    if(event == undefined){
            nextSlide_01(slides_01, paginations_01);
        }
    else {
        slideNumber = event.target.getAttribute('data_pagination_01');
        nextSlide_01(slides_01, paginations_01);
    }      
}


for (let i = 0; i < paginations_01.length; i++){
    paginations_01[i].addEventListener('click', slideShow_01);    
    paginations_01[i].setAttribute('data_pagination_01', i);
}

setInterval(slideShow_01, 3000);


// для 2го слайдера
const nextSlide_02 = function(sl, p) {
    if(slideNumber_02 >= sl.length){
        slideNumber_02 = 0;              
        activePagination(p, slideNumber_02);
        activeSlide(sl, slideNumber_02);        
    }
    else{          
        activePagination(p, slideNumber_02);
        activeSlide(sl, slideNumber_02);    
        slideNumber_02++;
    }
} 

const slideShow_02 = function(event){
    if(event == undefined){
            nextSlide_02(slides_02, paginations_02);
        }
    else {
        slideNumber = event.target.getAttribute('data_pagination_02');
        nextSlide_02(slides_02, paginations_02);
    }      
}


for (let i = 0; i < paginations_02.length; i++){
    paginations_02[i].addEventListener('click', slideShow_02);    
    paginations_02[i].setAttribute('data_pagination_02', i);
}

setInterval(slideShow_02, 2000);
