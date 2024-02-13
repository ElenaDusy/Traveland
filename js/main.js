$(document).ready(function () {
 $('.sliders').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:true,
    
    prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='images/open.svg' alt='open'></button>",
    nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='images/close.svg' alt='close'></button>",
    responsive: [
        {
            breakpoint: 1401,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 1101,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
        },  
        {
            breakpoint: 851,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
        },  
        {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
        },  
    ]
}); 

$(".mobile-menu").click(function(){
    $(".mobile-menu span").toggleClass('active');
    $(".menu").toggleClass('active');  
    $("body").toggleClass('overlay');  
})

// /делаем фиксированное меню вверху первой страницы/ 

$(window).scroll(function(){
  if($(this).scrollTop() > 99){
    $('.header-top').addClass('header-top__fixed')
  }else{
  $('.header-top').removeClass('header-top__fixed')
  }
})
});
// duration делает анимацию медленнее
AOS.init({
  duration:1200
});