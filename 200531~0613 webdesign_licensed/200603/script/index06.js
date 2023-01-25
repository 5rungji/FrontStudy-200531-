$(function(){
    
    $('.mainmenu>li').mouseover(function(){
        $('.submenu').stop().slideDown(200);
    });
    
    $('.mainmenu>li').mouseout(function(){
        $('.submenu').stop().slideUp(200);
    });
    
});


/*mouseover=mouseenter
mouseout=mouseleave*/