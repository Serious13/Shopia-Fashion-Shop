$(document).ready(()=> {
    var button = $("#accordionMenu");
    var menuUpper=$(".upper-panel");
    var menuUpperPhone = $("header .upper-panel .phone");
    var menuUpperNav=$("header .upper-panel .menu");
    var menuBottom=$("header .bottom-panel");
    var buttCurr=$("header .upper-panel .currency");
    //console.log(button,menu);
    button.on("click", function (){
        button.fadeOut("slow");
        menuUpper.fadeIn();
        //menuBottom.fadeIn();
    })
    buttCurr.on("click",fucntion() {
        
    })
})