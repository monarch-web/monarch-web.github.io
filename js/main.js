$(document).ready(function(){AOS.init();var mySwiper=new Swiper('.swiper-container',{direction:'horizontal',loop:!0,slidesPerView:4,autoplay:{delay:2000,},breakpoints:{1024:{slidesPerView:4,},768:{slidesPerView:2,},420:{slidesPerView:2,},320:{slidesPerView:1}}})
$('.form__btn').on('click',function(e){e.preventDefault()
$(this).toggleClass('btn--active')})
let acc=document.getElementsByClassName("accordion");let i;for(i=0;i<acc.length;i++){acc[i].addEventListener("click",function(){this.classList.toggle("acc-active");let panel=this.nextElementSibling;if(panel.style.display==="block"){panel.style.display="none"}else{panel.style.display="block"}})}
$('.hamburger').click(()=>{$('.hamburger').toggleClass('is-active');$('.header__nav').slideToggle(300)})})