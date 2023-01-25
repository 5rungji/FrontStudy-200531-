/*슬라이드탭*/

$(function(){
    $('.slide li:last').after('<li><img src="images/img1.jpg" alt="img1"></li>');
});


slide12();
var now1 = 1;

function slide12(){
  var leng12 = $('.slide li').length;
    
    $('.slide li:first').animate({
        marginLeft:-700
    
    }, function(){
        $('.slide li:last').after('<li><img src="images/img'+now1+'.jpg" alt="img'+now1+'"></li>');
        $('.slide li:first').remove();
    });
    
    if(now1 == leng12-1){
        now1=1;
    }
    else{
        now1++;
    }
        
        setTimeout('slide12()',1000);
        
};





/*공지사항 탭*/
$(function(){
    $('.cont1_1>li').click(function(){
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active'); 
        $('.cont1_2 div:eq('+index+')').addClass('on').siblings().removeClass('on');    
    })
});