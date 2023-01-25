$(function(){

        $(".nav > ul > li").mouseover(function(){
            $(this).find(".submenu").stop()/*show().*/.slideDown(200);
        });
    
        $(".nav > ul > li").mouseout(function(){
            $(this).find(".submenu").stop()/*hide*/.slideUp(200);
        });
    
    });