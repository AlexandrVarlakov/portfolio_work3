let hamburger = document.querySelector('.hamburger-wrap');

let mobMenu = document.querySelector('.mob-menu-wrap');
let mobMenuContainer = document.querySelector('.mob-menu-container');
let rollMenu = document.querySelector('.roll-menu');

hamburger.onclick = function(){
    mobMenuContainer.style.visibility = 'visible';
    mobMenu.style.transform = "translate(0)";
}

rollMenu.onclick = function(){
    
    mobMenu.style.transform = "translate(100%)";
    mobMenuContainer.style.visibility = 'hidden';
}


let team_list = document.querySelector('.carousel-c__slides-list');
window.onresize = function(){
    mobMenu.style.transform = "translate(100%)";
    mobMenuContainer.style.visibility = 'hidden';
    
    team_list.style.transform = 'translateX(0)';

    let active_team_btn = document.querySelector('.carousel-c__navigate-btn_active');
    active_team_btn.classList.remove('carousel-c__navigate-btn_active');
    let team_fst_btn = document.querySelector('.carousel-c__navigate-btn');
    team_fst_btn.classList.add('carousel-c__navigate-btn_active');
    
    
}


let accordion__items = document.querySelectorAll('.accordion__item');

accordion__items.forEach((item) => {
    item.onclick = function(){
        if ( this.classList.contains('accordion__item_active') ){
            this.classList.remove('accordion__item_active');
        } else {
            let active = document.querySelector('.accordion__item_active');
            if ( active !== null ) active.classList.remove('accordion__item_active');
            this.classList.add('accordion__item_active');
        }
    }
})


let carousel_btn = document.querySelectorAll('.carousel__navigate-btn');
let carousel_slides = document.querySelectorAll('.carousel__slides-list');
let slides_list = document.querySelector('.carousel__slides-list');
carousel_btn.forEach( (btn) => {
    btn.onclick = function(){
        let active = document.querySelector('.carousel__navigate-btn_active');
        active.classList.remove('carousel__navigate-btn_active');
        this.classList.add('carousel__navigate-btn_active');
        let translateInx = +(this.getAttribute('data-num'));
        translateInx = translateInx * (-100);
        slides_list.style.transform = 'translateX('+ translateInx +'%)';
        //console.log(this.getAttribute('data-num'));
    }
});


let carouselC_btn = document.querySelectorAll('.carousel-c__navigate-btn');


carouselC_btn.forEach( (item) => {
    item.onclick = function(){
        let translateInx = +(this.getAttribute('data-num'));
        if ( window.innerWidth <= 1250 && window.innerWidth >= 671 ){
        
            translateInx = translateInx * (-50);
            
        
            
        } else if ( window.innerWidth < 671 ){
            translateInx = translateInx * (-100);
        }

        let active = document.querySelector('.carousel-c__navigate-btn_active');
        active.classList.remove('carousel-c__navigate-btn_active');
        this.classList.add('carousel-c__navigate-btn_active');

        team_list.style.transform = 'translateX('+ translateInx +'%)';
    }
} )
