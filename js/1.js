/**
 * Created by Administrator on 2016/10/7 0007.
 */
$(function() {
    var box = document.getElementById("banner-box");
    console.log(box);
    var ul = box.children[0];
    var ol = box.children[1];
    var lis = ul.children;
    var timerId = null;

    for (var i = 0; i < lis.length; i++) {
        var li = document.createElement("li");
        ol.appendChild(li);
    }
    var ollis = ol.children;
    ollis[0].className = 'current';
    for (var i = 0; i < ollis.length; i++) {
        ollis[i].index = i;
        ollis[i].onclick = function () {

            for (var j = 0; j < ollis.length; j++) {
                ollis[j].className = ""
            }
            this.className = 'current';
            $("#banner-ul").children().eq(this.index).fadeIn().siblings().fadeOut();
            pic = this.index;
        }
    }
    timerId = setInterval(autoPlay, 1500);

    box.onmouseover = function () {
        clearInterval(timerId);
    }
    box.onmouseout = function () {
        timerId = setInterval(autoPlay, 1500);
    }
    var li1 = lis[0].cloneNode(true);
    ul.appendChild(li1);
    var pic = 0;

    function autoPlay() {
        if (pic == lis.length - 1) {
            pic = 0;
            $("#banner-ul").children().eq(0).fadeIn().siblings().fadeOut();
        }
        for (var i = 0; i < ollis.length; i++) {
            ollis[i].className = '';
        }
        ollis[pic].className = 'current';
        $("#banner-ul").children().eq(pic).fadeIn().siblings().fadeOut();
        pic++;
    }


})




$(function () {

    $(".activity-panel .box ul li").mouseover(function () {
        $(this).find('img').stop().animate({width: '315px', top: '-5px', left: '-5px', height: '210px'});
        $(".box").css("overflow", "visible");
        $(".activity-panel .box ul li img").eq($(this).index()).addClass("big");
        $(this).css("zIndex", 1);

    })
    $(".activity-panel .box ul li").mouseout(function () {
        $(this).find('img').stop().animate({width: '305px', top: '0', left: '0', height: '200px'});
        $(".box").css("overflow", "hidden");
        $(".activity-panel .box ul li img").eq($(this).index()).removeClass("big");
        $(this).css("zIndex", 0);
    })


    $(".app-panel .box ul li.launcher").mouseover(function () {
        $(".launcher .app-content").css("display", "none");
        $(".launcher .operation").css("display", "block")
    })
    $(".app-panel .box ul li.launcher").mouseleave(function () {
        $(".launcher .app-content").css("display", "block");
        $(".launcher .operation").css("display", "none")
    })
    $(".app-panel .box ul li.handshaker").mouseover(function () {
        $(".handshaker .app-content").css("display", "none");
        $(".handshaker .operation").css("display", "block")
    })
    $(".app-panel .box ul li.handshaker").mouseleave(function () {
        $(".handshaker .app-content").css("display", "block");
        $(".handshaker .operation").css("display", "none")
    })
    $(".app-panel .box ul li.reader").mouseover(function () {
        $(".reader .app-content").css("display", "none");
        $(".reader .operation").css("display", "block")
    })
    $(".app-panel .box ul li.reader").mouseleave(function () {
        $(".reader .app-content").css("display", "block");
        $(".reader .operation").css("display", "none")
    })
    $(".app-panel .box ul li.notes").mouseover(function () {
        $(".notes .app-content").css("display", "none");
        $(".notes .operation").css("display", "block")
    })
    $(".app-panel .box ul li.notes").mouseleave(function () {
        $(".notes .app-content").css("display", "block");
        $(".notes .operation").css("display", "none")
    })
});