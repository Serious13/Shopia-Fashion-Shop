$(document).ready(function () {
    console.log('asd');
    $('.slider').slick(
        {
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        }
    );
});