/**
 * Created by Administrator on 2016/10/8.
 */
window.onload = function () {
    // 1. ���Ҫ�����Ķ���
    var box = document.getElementById("quanbu");
    var lis = box.getElementsByTagName("li");

    // 2. ��̬�ĸ�ÿһ��li��ӱ���ͼƬ
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundImage = "url(images/lun" + (i + 1) + ".jpg)";
    }
    // 3. ������뵱ǰ��li��ʱ�����õ�ǰli��ȣ�������li�Ŀ��
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            // 4. ��������li�Ŀ�ȶ���Ϊ100
            for (var j = 0; j < lis.length; j++) {
                animate(lis[j], {
                    "width": 100
                })
            }
            // 5. ��������������¼��ĵ�ǰ�����li���800
            animate(this, {
                "width": 800
            })
        }
        // 6. ����뿪��ʱ���ٸ��͸�λ���ص�ԭ����λ��
        lis[i].onmouseout = function () {
            for (var j = 0; j < lis.length; j++) {
                animate(lis[j], {
                    "width": 240
                })
            }
        }
    }

}
$(function () {
    $("#li-phone").mouseenter(function (e) {
        $("#earphone").css("display", "none")
        $("#beike").css("display", "none")
        $("#qinghuai").css("display", "none")
        $("#qita").css("display", "none")
        $("#baoxiu").css("display", "none")
        $("#quanbu").css("display", "none")
        $("#nav-phone").slideDown(600)
        e.preventDefault();
    })
    $("#li-phone").mouseleave(function (e) {
        $("#nav-phone").slideUp(600)
        e.preventDefault();
    })
    $("#ear-li-phone").mouseenter(function (e) {
        $("#nav-phone").css("display", "none")
        $("#beike").css("display", "none")
        $("#qinghuai").css("display", "none")
        $("#qita").css("display", "none")
        $("#baoxiu").css("display", "none")
        $("#quanbu").css("display", "none")
        $("#earphone").slideDown(600)
        e.preventDefault();
    })
    $("#ear-li-phone").mouseleave(function (e) {
        $("#earphone").slideUp(600)
        e.preventDefault();
    })
    $("#beike-li").mouseenter(function (e) {
        $("#nav-phone").css("display", "none")
        $("#earphone").css("display", "none")
        $("#qinghuai").css("display", "none")
        $("#qita").css("display", "none")
        $("#baoxiu").css("display", "none")
        $("#quanbu").css("display", "none")
        $("#beike").slideDown(600)
        e.preventDefault();
    })
    $("#beike-li").mouseleave(function (e) {
        $("#beike").slideUp(600)
        e.preventDefault();
    })
    $("#qinghuai-li").mouseenter(function (e) {
        $("#nav-phone").css("display", "none")
        $("#earphone").css("display", "none")
        $("#beike").css("display", "none")
        $("#qita").css("display", "none")
        $("#baoxiu").css("display", "none")
        $("#quanbu").css("display", "none")
        $("#qinghuai").slideDown(600)
        e.preventDefault();
    })
    $("#qinghuai-li").mouseleave(function (e) {
        $("#qinghuai").slideUp(600)
        e.preventDefault();
    })
    $("#qita-li").mouseenter(function (e) {
        $("#nav-phone").css("display", "none")
        $("#earphone").css("display", "none")
        $("#beike").css("display", "none")
        $("#qinghuai").css("display", "none")
        $("#baoxiu").css("display", "none")
        $("#quanbu").css("display", "none")
        $("#qita").slideDown(600)
        e.preventDefault();
    })
    $("#qita-li").mouseleave(function (e) {
        $("#qita").slideUp(600)
        e.preventDefault();
    })
    $("#baoxiu-li").mouseenter(function (e) {
        $("#nav-phone").css("display", "none")
        $("#earphone").css("display", "none")
        $("#beike").css("display", "none")
        $("#qinghuai").css("display", "none")
        $("#qita").css("display", "none")
        $("#quanbu").css("display", "none")
        $("#baoxiu").slideDown(600)
        e.preventDefault();
    })
    $("#baoxiu-li").mouseleave(function (e) {
        $("#baoxiu").slideUp(600)
        e.preventDefault();
    })
    $("#quanbu-li").mouseenter(function (e) {
        $("#nav-phone").css("display", "none")
        $("#earphone").css("display", "none")
        $("#beike").css("display", "none")
        $("#qinghuai").css("display", "none")
        $("#qita").css("display", "none")
        $("#baoxiu").css("display", "none")
        $("#quanbu").slideDown(600)
        e.preventDefault();
    })
    $("#jingxuan").mouseenter(function (e) {
        $("#nav-phone").css("display", "none")
        $("#earphone").css("display", "none")
        $("#beike").css("display", "none")
        $("#qinghuai").css("display", "none")
        $("#qita").css("display", "none")
        $("#baoxiu").css("display", "none")
        $("#quanbu").css("display", "none")
        e.preventDefault();
    })
    $(".zj-zj ul li a").click(function () {
        $(".zj-zj ul li a").css("color", "#999999")
        $(this).css("color", "#FFFFFF")
    })
    $(".nav ul li a").mouseenter(function () {
        $(".nav ul li a").css("font-weight", "normal")
        $(this).css("font-weight", "bold")
    })
    $(window).scroll(function () {
        var stHeight = $(window).scrollTop();
        if (stHeight > 600) {
            $("#goTop").css("display", "block")
        } else {
            $("#goTop").css("display", "none")
        }
    })
})