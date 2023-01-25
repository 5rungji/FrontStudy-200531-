$(function(){
    
    $('.mainmenu>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(200);
    });
        
    $('.mainmenu>li').mouseout(function(){
        $(this).find('.submenu').stop().slideUp(200);
    });
    
    
    
});