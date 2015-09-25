$(document).ready(function() {
    $(".slider").lightSlider({
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
                    verticalHeight:800
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
