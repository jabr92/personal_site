$(document).ready(function() {
    switch (location.search){
        case "?about":
        $(".about").show();
        break;

        case "?stuff":
        $(".cool-stuff").show();
        break;

        case "?photo":
        $(".photography").show();
        break;

        case "?connect":
        $(".connect").show();
        break;

        default:
        window.location.href="home.html";
    }
    resizeTopBar();
    centerButtonTexts();
    $(".placeholder").remove();
});

$(window).resize(function() {
    resizeTopBar();
});

var resizeTopBar = function() {
    adjustFontSize($(".name-title"), $(".top-bar").height(), $(".top-bar").width() * .3 * .99);
    adjustFontSize($(".longest-main").children(), $(".top-bar").height(), $(".top-bar").width() * .17);
    // set other spans to same font size
    font_size = $(".longest-main>u>span").css("font-size");
    $(".top-button>u>span").css("font-size", font_size);
    // space text evenly
    total_text_width = 0;
    total_div_width = ($(".top-bar").width() - $(".name-title").width()) * .97;
    $(".top-button").each(function(i, div) {
        span = $(div).children().filter("span");
        total_text_width += span.width();
    });
    total_space = total_div_width - total_text_width;
    $(".top-button").each(function(i, div) {
        span = $(div).children().filter("span");
        $(div).width(span.width() + total_space / 4);
    });
    // adjust the vertical spacing for all text in top bar
    margin = ($(".top-bar").height() - $(".name-title").height()) / 2;
    $(".top-bar").children().children().filter("span").css("padding-top", margin);

}

var centerButtonTexts = function() {
    divs = $(".connect").children().children();
    $("i").css("margin-top", (divs.height() - $("i").height() - divs.children().filter("span").height()) / 2);
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