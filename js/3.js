/**
 * Created by Administrator on 2016/10/8.
 */$(function(){
    //鼠标移入 内部阴影
    $(".hot-pro>ul>li").mouseenter(function(){
        $(this).addClass("shadow");

    })
    $(".hot-pro>ul>li").mouseleave(function(){
        $(this).removeClass("shadow")
    })


    $(".hot-pro>ul>li .pro-choice li ").mouseenter(function(){
        // $(this).children(0)是指box1
        $(this).children(0).css({"backgroundColor":"#B2B2B2"});
        $(this).siblings().children(0).css({"backgroundColor":"white"});

    })
    $(".hot-pro>ul>li .pro-choice li").mouseleave(function(){

        $(this).children(0).css({"backgroundColor":"#B2B2B2"});

    })

    //滑过小点 图片切换
    var lis2=$(".lis2 img")
    var dots2=$(".lis2>.pro-choice li")
    dots2.mouseenter(function(){
        var index=$(this).index();
        lis2.eq(index).css({"display":"block"});
        lis2.eq(index).siblings("img").css({"display":"none"})
    })

    var lis3=$(".lis3 img")
    var dots3=$(".lis3>.pro-choice li")
    dots3.mouseenter(function(){
        var index=$(this).index();
        lis3.eq(index).css({"display":"block"});
        lis3.eq(index).siblings("img").css({"display":"none"})
    })

    var lis4=$(".lis4 img")
    var dots4=$(".lis4>.pro-choice li")
    dots4.mouseenter(function(){
        var index=$(this).index();
        lis4.eq(index).css({"display":"block"});
        lis4.eq(index).siblings("img").css({"display":"none"})
    })
    var lis5=$(".lis5 img")
    var dots5=$(".lis5>.pro-choice li")
    dots5.mouseenter(function(){
        var index=$(this).index();
        lis5.eq(index).css({"display":"block"});
        lis5.eq(index).siblings("img").css({"display":"none"})
    })
    var lis6=$(".lis2-1 img")
    var dots6=$(".lis2-1>.pro-choice li")
    dots6.mouseenter(function(){
        var index=$(this).index();
        lis6.eq(index).css({"display":"block"});
        lis6.eq(index).siblings("img").css({"display":"none"})
    })
    var lis7=$(".lis4-1 img")
    var dots7=$(".lis4-1>.pro-choice li")
    dots7.mouseenter(function(){
        var index=$(this).index();
        lis7.eq(index).css({"display":"block"});
        lis7.eq(index).siblings("img").css({"display":"none"})
    })
    //鼠标移入 加入购物车显示
    $("input");
    $(".hot-pro>ul>li").mouseenter(function(){
        $(this).find($(".pro-detail")).show().end().siblings().find($(".pro-detail")).hide();
        $(this).find($(".pro-price")).hide().end().siblings().find($(".pro-price")).show();
    })

    $(".hot-pro>ul>li").mouseleave(function(){
        $(".pro-detail").hide();
        $(".pro-price").show();
    })

})
