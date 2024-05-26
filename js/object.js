$(document).ready(function(){
    $(".filter-main-item").on("click", function(){
        $(this).toggleClass("active");
    });
    $(".footer-btn-to-top").on("click", function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    $(".header-btn-open-icon").on("click", function(){
        $('.header').addClass("active");
    });
    $(".header-btn-close-icon").on("click", function(){
        $('.header').removeClass("active");
    });
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
        $('body').addClass('scrolled');
    } else {
        $('body').removeClass('scrolled');
    }
});