$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      576:{
        items: 1.5
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    navText: ["<div class='custom-prev'><img src='./img/carousel-btn-prev.svg' alt=''></div>", "<div class='custom-next'><img src='./img/carousel-btn-next.svg' alt=''></div>"]
  });


  $(document).ready(function() {
    var $originalElement = $('.podcast-title-h4');
    var $clone1 = $originalElement.clone().addClass('podcast-title-h4-2');
    var $clone2 = $originalElement.clone().addClass('podcast-title-h4-2');
    $originalElement.after($clone1).after($clone2);
});