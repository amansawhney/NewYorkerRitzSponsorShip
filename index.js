$(window).scroll(function(e) {

    var 	r = $(window).scrollTop(),
        t = $(".container-hero").height();

    // if container hero is less than window.scrollTop
    t > r && (
        $("header .wrapper").css({
            top: .4 * r
        }),
            $("header .wrapper").css({
                opacity: (300 - r) / 100
            })
    )
});