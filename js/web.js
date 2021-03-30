(function (){
    console.log(1);
    const accordion_trigger = document.querySelectorAll(".faq-accordion__item-trigger");
    console.log(accordion_trigger);
    for(let i = 0; i < accordion_trigger.length; i++){
        accordion_trigger[i].addEventListener('click', () =>{
            console.log("click");
            const accord_active = document.querySelector(".faq-accordion__item__active");
            const accord_content = document.querySelectorAll(".faq-accordion__item");
            accord_content[i].classList.toggle("faq-accordion__item__active");
        });
    }
}());

(function (){
    const burger_btn = document.querySelector(".button__burger");
    burger_btn.addEventListener('click', () =>{
        
        
        document.querySelector(".header").classList.toggle("header--active-nav");
    });
}());

const scroll__button = document.querySelector(".scroll__up");
const body = document.getElementById("body");
scroll__button.addEventListener('click', () => {
    body.scrollIntoView({block: "start", behavior:"smooth"});
    
});



 

 


