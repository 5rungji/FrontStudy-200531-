/*menu*/
$(function(){
    $('.mainmenu>li').hover(function(){
        $('.mainmenu>li').find('.submenu').stop().slideDown(200);
        $(this).addClass('active').siblings().removeClass('active');
    },function(){
        $('.mainmenu>li').find('.submenu').stop().slideUp(200);
        $(this).removeClass('active');
    });    
});

/*banner*/
$(function(){
    setInterval(function(){        
        $('.slide').animate({
            marginTop: -300
        },500,function(){
            var web1 = $('.slide li:nth-child(1)').detach();
            $('.slide').append(web1);
            $('.slide').css("margin-top","0");
        });        
    },1000);
    
});

/*contents*/

$(function(){
    $('.cont1_1>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        var index1 = $(this).index();
        $('.cont2_1 div:eq('+index1+')').show().siblings().hide();
        
    });  
});

/*popup*/

$(function(){
   
    $('.cont2_1_1').click(function(){        
        $('#popup').show();
    });
    
    $('.pop_up>div').click(function(){        
        $('#popup').hide();
    });
    
});