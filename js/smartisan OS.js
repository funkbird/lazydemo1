/**
 * Created by Administrator on 2016/10/7.
 */
$(function () {
    //顶部精灵图特效
    $(".content-lis li").mouseenter(function () {
        $(this).stop().animate({"backgroundPositionY":0,"opacity":.7},300).siblings().stop().animate({"backgroundPositionY":20,"opacity":1},300);
        $(this).css("color","red").siblings().css("color","");
    })
    $(".content-lis").mouseleave(function () {
        $(this).children().animate({"backgroundPositionY":20,"opacity":1},300);
        $(this).children().css("color","");
    })

    //viewbox轮播特效
    $(".viewbox-a .tab").mouseenter(function () {
        var index = $(this).index();
        console.log(index);
        var ulOperation = $(".change-plate").find(".operation");
        var lisOperation = ulOperation.children();
        ulOperation.stop(false,true).animate({"left":-lisOperation[index].offsetLeft});
    })

 //message切换特效
    $(".message .content").mouseenter(function () {
        $(this).css("color","red").siblings().css("color","");
        var index = $(this).index();
        var lis = $(".show-fun .viewbox .operation").children();
        console.log(lis)
        lis.eq(index).stop().fadeIn(400).siblings().stop().fadeOut(400);
    }).mouseleave(function () {
        $(this).css("color",'');
    })

    //放大镜特效
    $(".fdj").mouseenter(function (event) {
        $("#mask").css("display","block");
        $("#bigBox").css("display","block");
        $(document).mousemove(function (event) {
            var x = event.pageX - $("#box").offset().left - $("#mask").width()/2;
            var y = event.pageY - $("#box").offset().top - $("#mask").height()/2;
            x = x < 0 ? 0 : x;
            x = x > $("#smallBox").width() - $("#mask").width() ? $("#smallBox").width() - $("#mask").width() : x;
            y = y < 0 ? 0 : y;
            y = y > $("#smallBox").height() - $("#mask").height() ? $("#smallBox").height() - $("#mask").height() : y;
            $("#mask").css("left",(x + "px"));
            $("#mask").css("top",(y + "px"));
            var ratio = (parseInt($("#bigImg").width() - $("#bigBox").width()))/(parseInt($("#smallBox").width() - $("#mask").width()));
            $("#bigImg").css("left",-x * ratio);
            $("#bigImg").css("top",-y * ratio);
        })
    })
    $("#smallBox").mouseleave(function () {
        $("#mask").css("display","none");
        $("#bigBox").css("display","none");
    })

    //navLadder特效

    $(".navLadder li").find("i").mouseenter(function () {
        $(this).animate({"width":12,"height":12},20).parent().siblings("li").children("i").animate({"width":6,"height":6},20);
        $(this).siblings().show().parent().siblings().children("span").hide();
    }).mouseleave(function () {
        $(this).animate({"width":6,"height":6},20)
        $(".navLadder span").hide();
    })
    var target = 0, leader = 0, timer = null;
    $(".navLadder").find("i").click(function () {
        clearInterval(timer)
        $(this).css("backgroundColor","green").parent().siblings("li").children("i").css("backgroundColor","#ccc");
        var index = $(this).parent().index();
        var mainLis = $(".main").children();
        target = $(mainLis[index]).offset().top;
        timer = setInterval(function () {
            step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            if(leader == target) {
                clearInterval(timer);
            }
            window.scrollTo(0,leader);
        },30)

    })

    $(".navLadder .weibo s,.navLadder .weichat").mouseenter(function () {
        $(this).animate({"backgroundPositionY":-23},200);
        $(this).siblings("span").show();
        $(this).children("span").show();
    }).mouseleave(function () {
        $(this).animate({"backgroundPositionY":0},200);
        $(this).siblings("span").hide();
        $(this).children("span").hide();
    })


})