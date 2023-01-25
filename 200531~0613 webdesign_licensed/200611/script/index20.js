/*header*//*header*/

$(function(){
    $('.mainmenu>li').hover(function(){
        $(this).addClass('on');
        $(this).find('.submenu').stop().slideDown();        
        
    }, function(){
        $(this).removeClass('on');
        $(this).find('.submenu').stop().slideUp();        
    }); 
    
});


/*banner*//*banner*/

$(function(){
   setInterval(function(){
       
       $('.slide').animate({
           marginTop: -300
       },function(){
           var index20 = $('.slide li:nth-child(1)').detach();
           $('.slide').append(index20);
           $('.slide').css('margin-top','0px');
       })
       
   },1000); 
});


/*contents*//*contents*/

$(function(){
    $('.cont2_1').click(function(){
        $('#popup').show();
    });
    $('.pop_up>span').click(function(){
        $('#popup').hide();
    });
});




