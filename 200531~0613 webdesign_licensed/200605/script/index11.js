$(function(){
   
    var tabBtn = $(".tab-btn>ul>li");
    var tabCont = $(".tab-cont>div");
    
    tabCont.hide().eq/*인덱스를 불러옴*/(0).show();    
    
    tabBtn.click(function(e/*target*/){
        e.preventDefault();
        var target=$(this);
        var index = target.index();
        
        tabBtn.removeClass("active");
        target.addClass("active");
        
        tabCont.css("display","none")
        tabCont.eq(index).css("display","block");
    })
    
    
});