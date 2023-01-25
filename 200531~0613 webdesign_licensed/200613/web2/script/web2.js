/*menu*/
$(function(){
    $('.mainmenu>li').hover(function(){
        $('.submenu').stop().slideDown();
        $(this).addClass('active').siblings().removeClass('active');
    },function(){
        $('.submenu').stop().slideUp();
        $(this).removeClass('active');
    });
});

/*slide*/

$(function(){    
    setInterval(function(){
        
    $('.slide').animate({
        marginLeft : -1200
    }, 500, function(){
        var web2 = $('.slide li:nth-child(1)').detach();
        $('.slide').append(web2);
        $('.slide').css("margin-left","0px");
    });        
    },1000); 
    
});

/*popup*/

$(function(){
    
    $('.cont1_2').click(function(){
        $('#popup').show();
    });
    
    $('.pop_up>span').click(function(){
        $('#popup').hide();
    });
    
});