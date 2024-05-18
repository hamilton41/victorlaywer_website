$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 12, // 外距 10px
    nav: true, // 顯示點點
    center: true,
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      600: {
        items: 1.5 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1000: {
        items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    },
    navText: ["<div class='custom-prev'><img src='./img/carousel-btn-prev.svg' alt=''></div>", "<div class='custom-next'><img src='./img/carousel-btn-next.svg' alt=''></div>"]
  });