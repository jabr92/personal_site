$(document).ready(function() {
    scale_image();
    center_button_texts();
    adjustFontSize(".name_header", $(window).height() * .19, $(window).width() * .98)
});

$(window).scroll(function() {
    scale_image();
});

$(window).resize(function() {
    adjustFontSize(".name_header", $(window).height() * .19, $(window).width() * .98)
    scale_image();
    center_button_texts();
});

var center_button_texts = function(){
	divs = $(".buttons").children().children();
    $("i").css("margin-top", (divs.height() - $("i").height() - divs.children().children().filter("span").height())/2);
}

var scale_image = function() {

    max_scroll = $(document).height() - $(window).height();
    cur_scroll = $(window).scrollTop();
    height = 100 - cur_scroll / max_scroll * 42;
    $(".main_img").css("height", height + "vh");

    position = ($(window).width() - $(".main_img").width()) / 2;
    $(".main_img").css("left", position);

}
var adjustFontSize = function(el, max_height, max_width) {
    text = $(el).children().filter("span");
    text.css('font-size', 100);
    do {
        cur_height = text.height();
        cur_width = text.width();
        text.css('font-size', parseInt(text.css('font-size').slice(0, -2)) - 1);
    } while (cur_height > max_height || cur_width > max_width);
    return [text.css('font-size'), text.height()];
}