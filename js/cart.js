$(function(){
    //鼠标移入 内部阴影
    $(".hot-pro>ul>li").mouseenter(function(){
        $(this).addClass("shadow")
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


    //鼠标移入 加入购物车显示
    $(".hot-pro>ul>li").mouseenter(function(){
        $(this).children(".pro-detail").show();
        $(this).children(".pro-price").hide();

    })

    $(".hot-pro>ul>li").mouseleave(function(){
        $(this).children(".pro-detail").hide();
        $(this).children(".pro-price").show();
    })

//点击加入购物车按钮  将商品降入购物车
    var num1=0;
    var num2=0;
    var num3=0;
    var num4=0;


    $(".lis1 .pro-detail input:last-child").on("click",function(){
        num1++;
        $(".cart").show();

      if($(".zone1").length==0){

          $(".cart").prepend("<div class='zone1'></div>");

          $(".zone1").html("<div class='cart-img'>" +
              "<img src='' alt=''/>" +
              "</div>" +
              "<p class='cart-name'></p>" +
              "<p class='cart-price'>价格：<span></span> 数量：<span></span></p>" +
              "<div class='del'>X</div>");

        //删除算中的商品

          $(".del").click(function(){
              console.log($(this).parent());
              $(this).parent().remove();
              num1=0;
              if($(".cart").children().length==1){
                  $(".cart").hide();
              }
          })

          //图片src
          $(".zone1 .cart-img img").attr("src",$(this).parent().parent().children(0).attr("src"));
          //名称
          $(".zone1 .cart-name").html($(this).parent().parent().children(".pro-name").html());
          //价格
          $(".zone1 .cart-price span:first-child").html($(this).parent().parent().children(".pro-price").children(1).html());
          //数量
          $(".zone1 .cart-price span:last-child").html(num1);
      }else{
          $(".zone1 .cart-price span:last-child").html(num1);
      }













  });
    $(".lis2 .pro-detail input:last-child").on("click",function(){

        num2++;
        $(".cart").show();

        if($(".zone2").length==0){
            $(".cart").prepend("<div class='zone2'></div>");

            $(".zone2").html("<div class='cart-img'>" +
                "<img src='' alt=''/>" +
                "</div>" +
                "<p class='cart-name'></p>" +
                "<p class='cart-price'>价格：<span></span> 数量：<span></span></p>" +
                "<div class='del'>X</div>");

            //删除算中的商品

            $(".del").click(function(){
                console.log($(this).parent());
                $(this).parent().remove();
                num2=0;
                if($(".cart").children().length==1){
                    $(".cart").hide();
                }
            })

            //图片src
            $(".zone2 .cart-img img").attr("src",$(this).parent().parent().children(0).attr("src"));
            //名称
            $(".zone2 .cart-name").html($(this).parent().parent().children(".pro-name").html());
            //价格
            $(".zone2 .cart-price span:first-child").html($(this).parent().parent().children(".pro-price").children(1).html());
            //数量
            $(".zone2 .cart-price span:last-child").html(num2);
        }else{
            $(".zone2 .cart-price span:last-child").html(num2);
        }













    });
    $(".lis3 .pro-detail input:last-child").on("click",function(){

        num3++;
        $(".cart").show();

        if($(".zone3").length==0){
            $(".cart").prepend("<div class='zone3'></div>");

            $(".zone3").html("<div class='cart-img'>" +
                "<img src='' alt=''/>" +
                "</div>" +
                "<p class='cart-name'></p>" +
                "<p class='cart-price'>价格：<span></span> 数量：<span></span></p>" +
                "<div class='del'>X</div>");

            //删除算中的商品

            $(".del").click(function(){
                console.log($(this).parent());
                $(this).parent().remove();
                num3=0;
                if($(".cart").children().length==1){
                    $(".cart").hide();
                }
            })

            //图片src
            $(".zone3 .cart-img img").attr("src",$(this).parent().parent().children(0).attr("src"));
            //名称
            $(".zone3 .cart-name").html($(this).parent().parent().children(".pro-name").html());
            //价格
            $(".zone3 .cart-price span:first-child").html($(this).parent().parent().children(".pro-price").children(1).html());
            //数量
            $(".zone3 .cart-price span:last-child").html(num3);
        }else{
            $(".zone3 .cart-price span:last-child").html(num3);
        }













    });
    $(".lis4 .pro-detail input:last-child").on("click",function(){

        num4++;
        $(".cart").show();
        if($(".zone4").length==0){
            $(".cart").prepend("<div class='zone4'></div>");

            $(".zone4").html("<div class='cart-img'>" +
                "<img src='' alt=''/>" +
                "</div>" +
                "<p class='cart-name'></p>" +
                "<p class='cart-price'>价格：<span></span> 数量：<span></span></p>" +
                "<div class='del'>X</div>");

            //删除算中的商品

            $(".del").click(function(){
                console.log($(this).parent());
                $(this).parent().remove();
                num4=0;
                if($(".cart").children().length==1){
                    $(".cart").hide();
                }
            })

            //图片src
            $(".zone4 .cart-img img").attr("src",$(this).parent().parent().children(0).attr("src"));
            //名称
            $(".zone4 .cart-name").html($(this).parent().parent().children(".pro-name").html());
            //价格
            $(".zone4 .cart-price span:first-child").html($(this).parent().parent().children(".pro-price").children(1).html());
            //数量
            $(".zone4 .cart-price span:last-child").html(num4);
        }else{
            $(".zone4 .cart-price span:last-child").html(num4);
        }













    });




})