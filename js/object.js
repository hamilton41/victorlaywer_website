$(document).ready(function(){
    $(".filter-main-item").on("click", function(){
        $(this).toggleClass("active");
    });
    $(".footer-btn-to-top").on("click", function(){
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});