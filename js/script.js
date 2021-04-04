const slides_01 = document.querySelectorAll('.slide_01');
const pagination_01 = document.querySelectorAll('.pagination_01_item');


const activeItemPagination = function(event){
    let target = event.target;
    document.querySelector('.pagination_01_item_active').classList.remove('pagination_01_item_active')
    target.classList.add('pagination_01_item_active');
    activeSlide();
}

const activeSlide = function(){
    let slide = document.querySelector('.pagination_01_item_active').getAttribute('data_pagination');    
    document.querySelector('.slide_01_active').classList.remove('slide_01_active');    
    slides_01[slide].classList.add('slide_01_active');
}


let slideNumber = 0;

const nextSlide = function() {
    if(slideNumber < slides_01.length - 1 ){
        slideNumber++;
        pagination_01[slideNumber - 1 ].classList.remove('pagination_01_item_active');
        pagination_01[slideNumber ].classList.add('pagination_01_item_active');
        slides_01[slideNumber - 1 ].classList.remove('slide_01_active');
        slides_01[slideNumber ].classList.add('slide_01_active');
        // console.log(document.querySelector('.pagination_01_item_active').getAttribute('data_pagination'));
        // if(document.querySelector('.pagination_01_item_active').getAttribute('data_pagination') == slideNumber){
        //     slideNumber=0;
        //     pagination_01[slideNumber].classList.add('pagination_01_item_active');
        //     pagination_01[slides_01.length - 1].classList.remove('pagination_01_item_active');
        //     slides_01[slideNumber].classList.add('slide_01_active');
        //     slides_01[slides_01.length - 1].classList.remove('slide_01_active');
        // }
    }
    else {
        slideNumber = 0;
        pagination_01[slideNumber].classList.add('pagination_01_item_active');
        pagination_01[slides_01.length - 1].classList.remove('pagination_01_item_active');
        slides_01[slideNumber].classList.add('slide_01_active');
        slides_01[slides_01.length - 1].classList.remove('slide_01_active');

    }
}


setInterval(nextSlide, 4000);


for (let i = 0; i < pagination_01.length; i++){
    pagination_01[i].addEventListener('click', activeItemPagination);
    pagination_01[i].setAttribute('data_pagination', i);
}



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