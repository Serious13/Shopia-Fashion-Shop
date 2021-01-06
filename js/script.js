$(document).ready(()=> {
    //movement of accordion button 
    var button = $("#accordionMenu");
    var menuUpper=$(".upper-panel");
    button.on("click", function (){
        button.fadeOut("slow");
        menuUpper.fadeIn();
        //menuBottom.fadeIn();
    })
})