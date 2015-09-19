$(document).ready(function() {
    resizeTopBar();
    $(window).resize(function() {
        resizeTopBar();
    })
    $(".placeholder").remove();

});

var resizeTopBar = function() {
    adjustFontSize(".name-title");
    adjustFontSize(".longest-main");
    // set other spans to same font size
    font_size = $(".longest-main>span").css("font-size");
    $(".top-button>span").css("font-size", font_size)
        // space text evenly
    total_text_width = 0;
    total_div_width = 0;
    $(".top-button").each(function(i, div) {
        total_div_width += $(div).width();
        span = $(div).children().filter("span");
        total_text_width += span.width();
    });
    total_space = total_div_width - total_text_width;
    $(".top-button").each(function(i, div) {
        span = $(div).children().filter("span");
        $(div).width(span.width() + total_space / 4);
    });


    // adjust font size for each sub-button set

}

var adjustFontSize = function(div_sel) {
    max_height = $(div_sel).height();
    max_width = $(div_sel).width();
    console.log([max_height, max_width])
    text = $(div_sel).children().filter("span");
    text.css('font-size', 50);
    do {
        cur_height = text.height();
        cur_width = text.width();
        text.css('font-size', parseInt(text.css('font-size').slice(0, -2)) - 1)
        if (div_sel = ".longest-main") {
            console.log([cur_height, cur_width, text.css("font-size")])
        }
    } while (cur_height > max_height || cur_width > max_width);

}