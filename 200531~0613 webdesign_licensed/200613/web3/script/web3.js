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
    
    var web3_1 = 1;
    
    setInterval(function(){
    
    var leng3 = $('.slide>li').length
    
    $('.slide>li').eq(web3_1).fadeIn().siblings().fadeOut();    
        
        if(web3_1 == leng3-1){
            web3_1 = 0;
        } else{
            web3_1++;
        }
        
        
    },2000);
    
});

/*cont1*//*cont1*/

$(function(){
    
    $('.cont1_1>li').click(function(){
        var web3_2 = $(this).index();        
        
        $(this).addClass('active').siblings().removeClass('active');
        $('.cont1_2>div:eq('+web3_2+')').addClass('active').siblings().removeClass('active');
        
    });

    
});



  