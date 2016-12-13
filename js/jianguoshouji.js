/**
 * Created by Administrator on 2016/10/7.
 */

$(function () {
    //$(".audio")[0].play();
    //console.log(document.documentElement.clientHeight);
    $(".rhythm").height(document.documentElement.clientHeight);
    $(".hexie").height(document.documentElement.clientHeight);
    $(".piaohan").height(document.documentElement.clientHeight);
    $(".liuchang").height(document.documentElement.clientHeight);

    //电梯点击特效开始
    $(".jianguo .dianti li a").click(function () {
        $(".span2").css({"left": "10px"});
        $(this).children().eq(1).css({"left": "0px"});
    })

    //音阶开始
    $(".rhythm-b").on("mouseover", function () {
        $(".rhythm-b img")[0].offsetLeft
    })
    var rhythm_b = document.getElementById("rhythm-b");
    var lis = rhythm_b.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.left = i * 190 + "px";
    }
    //鼠标移入音阶时,让音阶跟随鼠标跳动
    $(".rhythm-b li").on("mouseenter", function () {
        rhythm_b.onmousemove = function (event) {
            var baseline = (event.pageX - rhythm_b.offsetLeft);
            for (var j = 0; j < lis.length; j++) {
                var currentline = lis[j].offsetLeft + 75
                if (currentline > baseline) {
                    //$(".rhythm-b li:eq("+j+")").animate({"bottom":-(currentline-baseline)*50/190+"px"},1)
                    lis[j].style.bottom = -(currentline - baseline) * 50 / 190 + "px";
                } else if (currentline < baseline) {
                    //$(".rhythm-b li:eq("+j+")").animate({"bottom":-(baseline-currentline)*50/190+"px"},1)
                    lis[j].style.bottom = -(baseline - currentline) * 50 / 190 + "px";
                }
            }
        }
    })
    $(".rhythm-b li").each(function(index){
        $(this).on("mouseenter",function(){
            $(".audio").eq(index)[0].play();
        })
        $(this).on("mouseleave",function(){
            $(".audio").eq(index)[0].currentTime=0;
        })
    })
    //滚动页面时,让音阶跳动
    var rhythm_arr = ["-50px", "-100px", "-150px", "-200px", "-250px", "-300px", "0px"];
    $(document).on("scroll",function () {
        $(".rhythm-b li").each(function (index) {
            $(this).animate({"bottom": rhythm_arr[Math.floor(Math.random() * 7)]}, 500)
        })
    })
    //鼠标移入音阶时,滚动动画停止
    $(".rhythm-b li").on("mouseenter", function () {
        $(".rhythm-b li").finish();
    })


    var biaozhun_arr = ["#F1757D", "#FB7", "#FBDB7D", "#DDED91", "#9BE7F1", "#9DBBF1"];
    for (var i = 0; i < biaozhun_arr.length; i++) {
        $(".hexie .yanse .biaozhun li")[i].style.backgroundColor = biaozhun_arr[i];
        $(".hexie .yanse .biaozhun li")[i].style.backgroundImage = "../images/ball-veins-blue_476510e68c@2x.png"
    }
    var wenyi_arr = ["#d1bba0", "#8d7b6e", "#ad5155", "#f2c4c5"];
    for (var i = 0; i < wenyi_arr.length; i++) {
        $(".hexie .yanse .wenyi li")[i].style.backgroundColor = wenyi_arr[i];
        $(".hexie .yanse .wenyi li")[i].style.backgroundImage = "../images/ball-veins-blue_476510e68c@2x.png"
    }
    $(".hexie .yanse .heise li")[0].style.backgroundColor = "#000";

    $(".hexie .select li")[0].onclick = function () {
        $(".hexie .yanse ul").eq(0).show().siblings().hide();
        $(".phoneshow .topphone")[0].src = "images/redphone1.png";
        $(".phoneshow .bottomphone")[0].src = "images/redphone2.png";
        phoneshow1();
    }
    $(".hexie .select li")[1].onclick = function () {
        $(".hexie .yanse ul").eq(1).show().siblings().hide();
        $(".phoneshow .topphone")[0].src = "images/grayphone1.png";
        $(".phoneshow .bottomphone")[0].src = "images/grayphone2.png";
        phoneshow1();
    }
    $(".hexie .select li")[2].onclick = function () {
        $(".hexie .yanse ul").eq(2).show().siblings().hide();
        $(".phoneshow .topphone")[0].src = "images/blackphone1.png";
        $(".phoneshow .bottomphone")[0].src = "images/blackphone2.png";
        phoneshow1();
    }
    $(".hexie .yanse li").on("click", function () {
        phoneshow();
    })

    //动画函数
    function phoneshow() {
        $(".phoneshow .topphone").animate({
            "left": 0,
            "top": 0
        }, 1000, function () {
            $(".phoneshow .topphone").animate({
                "left": 0,
                "top": "-50px"
            }, 1000)
        })
        $(".phoneshow .bottomphone").animate({
            "right": "150px",
            "bottom": "-200px"
        }, 1000, function () {
            $(".phoneshow .bottomphone").animate({
                "right": "80px",
                "bottom": "-170px"
            }, 1000)
        })
    }

    function phoneshow1() {
        $(".phoneshow .topphone").css({"top": "350px"});
        $(".phoneshow .bottomphone").css({"bottom": "-450px"});
        $(".phoneshow .topphone").animate({
            "top": "-50px"
        }, 1500)
        $(".phoneshow .bottomphone").animate({
            "bottom": "-170px"
        }, 1500)
    }


    $(".piaohan .backgroundimage").on("mouseenter", function () {
        $(".videobox video")[0].play();
    })
    $(".piaohan .backgroundimage").on("mouseleave", function () {
        $(".videobox video")[0].currentTime = 0;
    })


    $(".liuchang").on("mouseenter", function () {
        $(".liuchang .leftimg").animate({
            "top": "-25px",
            "width": "350px",
            "height": "650px"
        }, 2000);
        $(".liuchang .rightimg").animate({
            "top": "-25px",
            "width": "350px",
            "height": "650px"
        }, 2000);
    })
    $(".liuchang").on("mouseleave", function () {
        $(".liuchang .leftimg").animate({
            "top": "-250px",
            "width": "600px",
            "height": "1100px"
        }, 2000);
        $(".liuchang .rightimg").animate({
            "top": "-250px",
            "width": "600px",
            "height": "1100px"
        }, 2000);
    })

    //页面滚动时,必须滚动距离大于一定高度才能跳到下一页.
    $(document).on("scroll",function () {
        console.log($("body")[0].scrollTop);
        if($("body")[0].scrollTop < window.innerHeight){
            $(".rhythm").animate({"marginTop":$("body")[0].scrollTop},30);
        }else if($("body")[0].scrollTop <= 2*window.innerHeight && $("body")[0].scrollTop > window.innerHeight) {
            $(".rhythm").animate({"marginTop":$("body")[0].scrollTop - window.innerHeight},30);
        }else if($("body")[0].scrollTop <= 3*window.innerHeight && $("body")[0].scrollTop > 2*window.innerHeight){
            $(".rhythm").animate({"marginTop":$("body")[0].scrollTop - 2*window.innerHeight},30);
        }else{
            $(".rhythm").animate({"marginTop":$("body")[0].scrollTop - 3*window.innerHeight},30);
        }
    })

})