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
    setInterval(function(){
        $('.slide').animate({
           marginLeft : -1200 
        },500, function(){
            var index18 = $('.slide li:nth-child(1)').detach();
            $('.slide').append(index18);
            $('.slide').css('margin-left', '0');
        });
        
    },1000);
});


/*popup*/

$(function(){
    $('.cont1').click(function(){
        $('#popup').show();
    });
    
    $('.popup div').click(function(){
        $('#popup').hide();
    });
    
});