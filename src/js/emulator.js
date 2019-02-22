$(function () {

    $('.dropdown').click(function (e) {
        var dd = $(e.target);
        if (!dd.hasClass('.dropdown')) {
            dd = dd.parents('.dropdown');
        }
        dd.toggleClass('opened');
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    var win = $(window);
    var header = $('.header.transparent');
    if (header.length > 0) {
        win.scrollTop() > 0 ? header.removeClass("transparent") : header.addClass("transparent");
        win.on("scroll", function () {
            win.scrollTop() > 0 ? header.removeClass("transparent") : header.addClass("transparent");
        });
    }

});