$(document).ready(function() {
    resizeTopBar();
    $(window).resize(function() {
        resizeTopBar();
    })
    $(".placeholder").remove();

});

var resizeTopBar = function() {
    adjustFontSize($(".name-title"), $(".top-bar").height(), $(".top-bar").width() * .3*.99);
    adjustFontSize($(".longest-main"), $(".top-bar").height(), $(".top-bar").width() * .17);
    // set other spans to same font size
    font_size = $(".longest-main>span").css("font-size");
    $(".top-button>span").css("font-size", font_size);
    // space text evenly
    total_text_width = 0;
    total_div_width = ($(".top-bar").width() - $(".name-title").width()) * .98;
    $(".top-button").each(function(i, div) {
        span = $(div).children().filter("span");
        total_text_width += span.width();
    });
    total_space = total_div_width - total_text_width;
    $(".top-button").each(function(i, div) {
        span = $(div).children().filter("span");
        $(div).width(span.width() + total_space / 4);
        span.css("padding-left", ($(div).width()-span.width())/2);
    });
        // adjust the vertical spacing for all text in top bar
        margin = ($(".top-bar").height() - $(".name-title").height())/2;
        $(".top-bar").children().children().filter("span").css("padding-top", margin);

}

var adjustFontSize = function(el, max_height, max_width) {
    text = $(el).children().filter("span");
    text.css('font-size', 50);
    do {
        cur_height = text.height();
        cur_width = text.width();
        text.css('font-size', parseInt(text.css('font-size').slice(0, -2)) - 1);
    } while (cur_height > max_height || cur_width > max_width);
    return [text.css('font-size'), text.height()];
}