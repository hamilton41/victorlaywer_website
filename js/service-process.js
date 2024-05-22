$(document).ready(function(){
    init();
    $(".service-process .section-2-left-main-list-item").on("click", function(){
        $(this).toggleClass("active");
        var container = $(this).find('.section-2-left-main-list-item-content');
        if ($(this).hasClass('active')) {
            var autoHeight = container.css('height', 'auto').height();
            container.height(0).animate({ height: autoHeight }, 200);
        } else {
            container.animate({ height: 0 }, 200);
        }
    });
});


function init(){
    var listItemContent = $(".service-process .section-2-left-main-list-item-content");
    listItemContent.each(function() {
        var container = $(this);
        if (container.parent().hasClass('active')) {
            var autoHeight = container.css('height', 'auto').height();
            container.height(0).animate({ height: autoHeight }, 200);
        } else {
            container.css('height', 0);
        }
    });
}