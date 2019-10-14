$(document).ready(function () {
    $('a').smoothScroll({
        speed: 550,
        offset: -60,
    });
    $('.hamburger').on('click', function () {
        $(this).toggleClass('openNav');
        $('header nav').toggleClass('show');
    });
    $('.click-link').on('click', function () {
        $('header nav').toggleClass('show');
        $('.hamburger').toggleClass('openNav');
    });

});