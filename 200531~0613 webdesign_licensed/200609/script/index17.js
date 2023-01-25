/*menu*/
$(function(){
    
    $('.mainmenu>li').hover(function(){
    $(this).addClass('point');
    $('.submenu, .backmenu').stop().slideDown();
}, function(){
    $(this).removeClass('point');
    $('.submenu, .backmenu').stop().slideUp();
});
    
});

/*banner*/
$(function(){
    
        var index17 = 1;
    
    setInterval(function(){
        
        var leng17 = $('.slide li').length;
        $('.slide li').eq(index17).fadeIn().siblings().fadeOut();
        
        if(index17 == leng17-1){
            index17 = 0;
        } else {
            index17++;
        }
        
    },1000);
});

/*
$(function(){
    setInterval(function(){
        
        $('.slide').animate({
           $('li:nth-child(1)').fadeOut();            
        }, function(){
            var index17 = $('.slide li:nth-child(1)').detach();
            $('.slide').prepend(index17);
            $('.slide li:nth-child(1)').css("opacity", "1");
        });
        
    },1000);
});
*/


/*popup*/

$(function(){
    $('.cont1').click(function(){
        $('#popup').show();
    });
    
    $('.popup div').click(function(){
        $('#popup').hide();
    });
    
});