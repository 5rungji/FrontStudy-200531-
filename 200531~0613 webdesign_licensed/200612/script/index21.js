/*menu*//*menu*/

$(function(){
    $('.mainmenu>li').hover(function(){
        $(this).find('.submenu').stop().slideDown();
        $(this).addClass('on');
    }, function(){
        $(this).find('.submenu').stop().slideUp();
        $(this).removeClass('on');
    });   
    
});


/*slide*//*slide*/

$(function(){
        var index21 = 1;
    
   setInterval(function(){
       
       var leng21 = $('.slide li').length;
       $('.slide li').eq(index21).fadeIn().siblings().fadeOut();
       
       if(index21 == leng21-1){
           index21=0;
       } else{
           index21++;
       }
       
   },2000);
});


/*cont1*//*cont1*/

$(function(){
    
    $('.cont1_1>h3').click(function(){
        var index21 = $(this).index();
        $('.con1_2 div:eq('+index21+')).removeClass('off').siblings().addClass('off');
    });
    
});



  