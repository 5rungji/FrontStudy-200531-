/*menu*//*menu*/

$(function(){
    
    $('.mainmenu>li').hover(function(){
        $(this).find('.submenu').stop().slideDown();
        $(this).addClass('active');
    },function(){
        $(this).find('.submenu').stop().slideUp();
        $(this).removeClass('active');
    });
    
});

/*slide*//*slide*/
$(function(){
    
    var web4_1 = 1;
    
    setInterval(function(){
        leng4_1 = $('.slide li').length;
        
        $('.slide li').eq(web4_1).fadeIn().siblings().fadeOut();
        
        if(web4_1 == leng4_1 - 1){
            web4_1 = 0;
        } else {
            web4_1++;
        }
        
    },1000);
    
});

/*contents*/
$(function(){
    
    $('.cont1_1>li').click(function(){
        
        var web4_2 = $(this).index();
        $('.cont1_2 div:eq('+web4_2+')').addClass('active').siblings().removeClass('active');
        
    });
    
    
});