





$(function(){
    $(".box li").on("mouseenter",function(){
        $(this).addClass("shadow")

    })
    $(".box li").on("mouseleave",function(){
        $(this).removeClass("shadow")

    })

})


















/**
 *
 * 底部函数
 * Created by yang on 2016/10/7.
 */
$(function(){
    $(".language-switch h3").on("click",function(event){
        $(".language-switch ul").show();
        $(".icon-sj .t-show").show();
        $(".icon-sj .show").hide();

        $(this).css("backgroundColor","#ECECFB");
        event.stopPropagation()
    });

    $(".language-switch ul li").mouseenter(function(){
        $(this).css("backgroundColor","#ffffff");
        $(this).siblings().css("backgroundColor","#F5F5F5");
    });

    $(document).on("click",function(){
        $(".language-switch ul").hide();
        $(".icon-sj .show").show();
        $("h3 .icon-sj .t-show").hide();
        $(".language-switch h3").css("backgroundColor","");
    });

})