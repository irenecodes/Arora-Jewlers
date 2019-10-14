$(document).ready(function () {
    // $('.hamburger').on('click', function () {
    //     $('.menu').toggleClass('open');
    // });
    // $('.exit-responsive').on('click', function () {
    //     $('.menu').toggleClass('show');
    // });
    // $('.click-link').on('click', function () {
    //     $('.menu').toggleClass('show');
    // });

    $('a').smoothScroll({
        speed: 750,
        // to offset from beginning of where section is
        offset: -60,
    });


    $('.hamburger').on('click', function () {
        $(this).toggleClass('openNav');
        $('header nav').toggleClass('show');
    });
    
});