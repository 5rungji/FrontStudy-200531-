$(function(){
    
/*   $('.mainmenu>ul').mouseover(function(){
      $(this).find('.submenu').stop().slideDown(); 
   });
    
   $('.mainmenu>ul').mouseout(function(){
      $(this).find('.submenu').stop().slideUp(); 
   });*/
    
    $('.mainmenu>ul>li').hover(
        function(){
                $(this).find('.submenu').stop().slideDown();
            }, function(){
                $(this).find('.submenu').stop().slideUp();
        });
                                
    
});