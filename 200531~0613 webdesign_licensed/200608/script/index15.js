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
    $('.slide li:last').after(' <li><h2>이미지1</h2><a href="#"><img src="images/img1.jpg" alt="img1.jpg"></a></li> ');
});

var index15 = 1;

setInterval(function(){
    
    var leng15 = $('.slide li').length;
    
    $('.slide li:first').animate({
        marginTop: -300
    }, function(){
        $('.slide li:last').after('<li><h2>이미지'+index15+'</h2><a href="#"><img src="images/img'+index15+'.jpg" alt="img'+index15+'.jpg"></a></li>')
        $('.slide li:first').remove()
    });
    
    if(index15 == leng15 -1){
        index15 = 1;
    } else {
        index15++;
    }
    
},1000);



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
    
    
    