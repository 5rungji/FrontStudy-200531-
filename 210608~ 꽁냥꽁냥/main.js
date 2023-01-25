
/* header_top *//* header_top *//* header_top */


/* submenu slide*/
$(document).ready(function(){
    $('.header_top_submenu').hover(function(){
        $(this).find("ul").stop().slideDown();
        $(this).addClass('active');
    },function(){
        $(this).find("ul").stop().slideUp();
        $(this).removeClass('active');
    });
});


/* search */
$(document).ready(function(){
    $("#search>div")
    .focusin(function(){
        $(this)
        .animate({
            width : "150px",        
        }, 100)
        .css({
            "backgroundColor": "gray"
        })
        
        $(this)>$("input")
        .animate({
            width: "120px"
        }, 100)
        .css({
            "backgroundColor": "gray"
        })
    })

    .focusout(function(){
        $(this)
        .animate({
            width : "110px"
        }, 100)
        .css({
            "backgroundColor": "rgb(206, 206, 206)"
        })

        $(this)>$("input")
        .animate({
            width: "80px"
        }, 100)
        .css({
            "backgroundColor": "rgb(206, 206, 206)"
        })
    })
})


/*header_bottom*//*header_bottom*//*header_bottom*/

/* fullmenu slide */
$(document).ready(function(){
    $("#header_bot_fullbutton").hover(function(){
        $("#header_bot_fullmenu").stop().fadeIn();
        $(this).addClass('active');
    },function(){
        $("#header_bot_fullmenu").stop().fadeOut();
        $(this).removeClass('active');
    });
});

/* linemenu slide */
$(document).ready(function(){
    $(".header_bot_linemenu_sub").hover(function(){
        $(this).find("ul").stop().slideDown();
        $(this).addClass('active');
    },function(){
        $(this).find("ul").stop().slideUp();
        $(this).removeClass('active');
    });
});




/* banner_top *//* banner_top *//* banner_top */
$(document).ready(function(){    
    setInterval(function(){
        
    $('#banner_top').animate({
        marginLeft : -1000
    }, 2000, function(){
        var banner_top = $('#banner_top a:nth-child(1)').detach();
        $('#banner_top').append(banner_top);
        $('#banner_top').css("margin-left","0px");
    });        
    },8000); 
    
});


/* banner_bottom *//* banner_bottom *//* banner_bottom */


$(document).ready(function(){    
    setInterval(function(){

    var banner_bottom1 = $('#banner_bottom>ul>li:nth-child(1)>a>img:nth-child(1)').detach();
    $("#banner_bottom>ul>li:nth-child(1)>a").append(banner_bottom1);

    var banner_bottom2 = $('#banner_bottom>ul>li:nth-child(2)>a>img:nth-child(1)').detach();
    $("#banner_bottom>ul>li:nth-child(2)>a").append(banner_bottom2);

    var banner_bottom3 = $('#banner_bottom>ul>li:nth-child(3)>a>img:nth-child(1)').detach();
    $("#banner_bottom>ul>li:nth-child(3)>a").append(banner_bottom3);

    var banner_bottom4 = $('#banner_bottom>ul>li:nth-child(4)>a>img:nth-child(1)').detach();
    $("#banner_bottom>ul>li:nth-child(4)>a").append(banner_bottom4);

    },5000);     
});




/* BEST50 */


$(document).ready(function(){    
    setInterval(function(){

    var best1_1 = $('.best50>li:nth-child(1)>a>img:nth-child(1)').detach();
    $(".best50>li:nth-child(1)>a").append(best1_1);

    var best1_2 = $('.best50>li:nth-child(2)>a>img:nth-child(1)').detach();
    $(".best50>li:nth-child(2)>a").append(best1_2);

    var best1_3 = $('.best50>li:nth-child(3)>a>img:nth-child(1)').detach();
    $(".best50>li:nth-child(3)>a").append(best1_3);

    },4000);     
});
