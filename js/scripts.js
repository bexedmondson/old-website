$(document).ready(function(){
  $('.slider').slick({
    accessibility: false,
    draggable: false,
    mobileFirst: true,
    prevArrow: '<button class="slick-prev slick-button"><img src="/assets/bullet.svg"></button>',
    nextArrow: '<button class="slick-next slick-button"><img src="/assets/bullet.svg"></button>',
    vertical: false,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                vertical: true
            }
        }
    ]
  });
});
$('.slider__back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 350);
});
