$(document).ready(function () {

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

});