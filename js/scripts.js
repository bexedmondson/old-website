/*$(document).ready(function() {
    var slider = $(".slider").lightSlider({
        item: 1,
        slideMove: 1,
        slideMargin: 0,
        prevHtml: '<img src="/assets/bullet.svg">',
        nextHtml: '<img src="/assets/bullet.svg">',
        vertical:true,
        verticalHeight:'100%',
        pager: false,
        currentPagerPosition: 'first',
        enableDrag: false,
        responsive: [
            {
                breakpoint:770,
                settings: {
                    vertical:false,
                    //adaptiveHeight: true,
                }
            }
        ]
    });
    $(window).resize(function(){
        if
    });
});*/
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
