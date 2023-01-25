/*header_menu*/

$(function(){
    $('.mainmenu>li').hover(function(){
        $('.submenu, .backmenu').stop().slideDown()
    },function(){
        $('.submenu, .backmenu').stop().slideUp()
    });
});


/*content_banner*/

$(function(){
   $('.slide li:last').after('<li><a href="#"><img src="images/banner_1.jpg" alt="banner_1.jpg"></a></li>'); 
});

slide13();
var now1 = 1;

function slide13(){
    var leng13 = $('.slide li').length;
    
    if(now1 == leng13 -1){
        now1 = 1;
    }
    
    else{
        now1++;
    }
    
    $('.slide li:first').animate({
        marginTop: -300
        
    }, function(){
        $('.slide li:last').after('<li><a href="#"><img src="images/banner_'+now1+'.jpg" alt="banner_'+now1+'.jpg"></a></li>');
        $('.slide li:first').remove();
    }); 

    setTimeout('slide13()',1000);
};



/*cont1*/
$(function(){
   $('.subcont1_1>li').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
      var index = $(this).index();
      $('.subcont1_2 div:eq('+index+')').addClass('on').siblings().removeClass('on');
   });
    
    
});


/*popup*/
$(function(){
    $('.cont3').click(function(){
        /*$('.layer').addClass('on');*/
        $('.layer, .layer_bg').show();
    });
    
    $('.close').click(function(){
        /*$('.layer').removeClass('on');*/
        $('.layer, .layer_bg').hide();
    });
});
    
    
    