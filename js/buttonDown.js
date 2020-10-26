var $but=$("main .bonus button");
$but.click(function(e){
    $(window).scrollTop(0);
});
$but.hide();
$(window).scroll(function(e) {
    var $height = $(window).scrollTop();
    if($height > 10) {
        $but.show();
    }
    else {
        $but.hide();
    }
});