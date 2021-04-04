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


// -----Slider-----

const slides = document.querySelectorAll('.slide');
const paginations =document.querySelectorAll('.paginationItem');

let slideNumber = 0;

const activeSlide = function(){
    for (let slide of slides) {       
        slide.classList.remove('activeSlide');
    }
    slides[slideNumber].classList.add('activeSlide');
}

const activePagination = function(){
    for (let pagination of paginations) {       
        pagination.classList.remove('activePagination');
    }
    paginations[slideNumber].classList.add('activePagination');
}

const nextSlide = function() {
    if(slideNumber >= slides.length){
        slideNumber = 0;              
        activePagination();
        activeSlide();        
    }
    else{          
        activePagination();
        activeSlide();    
        slideNumber++;
    }
} 

const slideShow = function(event){
    if(event == undefined){
            nextSlide();
        }
    else {
        slideNumber = event.target.getAttribute('data_pagination');
        nextSlide();
    }      
}

for (let i = 0; i < paginations.length; i++){
    paginations[i].addEventListener('click', slideShow);    
    paginations[i].setAttribute('data_pagination', i);
}

setInterval(slideShow, 2000);
