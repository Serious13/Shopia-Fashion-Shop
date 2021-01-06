$(function ()  {
    var i=0;
    var $but=$('.but_home');
    var $butDown=$("#arrowDown");
    var $state=$("#listCurr span:first-Child");
    var $state2;
    var $span=$("#listCurr .euro span,#listCurr .usd span, #listCurr .btc span");
    var $othCur= $("#listCurr .usd, #listCurr .btc");
    styles = {
        "background-color":"black",
        "color":"white"
    }
    styles1 = {
        "margin-left":"7px"
    }
    //changing state currency block
    $butDown.on("click",function (e) {
        $othCur.toggle().css(styles);
    });
    $state.first().addClass("selected");
    $state2=$('.selected').html();
    $span.on("click",function () {
        if (i==0) {
            $('.selected').html($(this).html());
            $(this).addClass('selected1').html($state2); 
        }
        else  {
            $("#listCurr span").removeClass("selected1 selected");
            $state.first().addClass("selected");
            $state2=$('.selected').html();
            $('.selected').html($(this).html());
            $(this).addClass('selected1').html($state2); 
        }
        i++;
    });
    //:hoover
    $othCur.on( "mouseover", function() {
        $(this).css("color","#e0cba3");
    }).on("mouseout",function () {
        $(this).css("color","white");
    })
   
    //movement button up
    $but.hide();
    $but.click(function(e){
        $(window).scrollTop(0);
    });
    $(window).scroll(function(e) {
        var $height = $(window).scrollTop();
        if($height > 10) {
            $but.show();
        }
        else {
            $but.hide();
        }
    });
})
