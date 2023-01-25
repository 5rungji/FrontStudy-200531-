$(function(){
   $('.mainmenu>li').mouseover(function(){
       $('.slid').stop().slideDown(200);
   }); 
    
   $('.mainmenu>li').mouseout(function(){
       $('.slid').stop().slideUp(200);
   }); 
    
    
});