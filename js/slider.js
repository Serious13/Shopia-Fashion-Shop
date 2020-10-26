$(document).ready(function () {
    console.log('slick works');
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