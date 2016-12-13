/**
 * 应用下载轮播图JS
 */
window.onload=function(){
    var curIndex = 0; //当前index
//  alert(imgLen);
// 定时器自动变换秒每次
    var autoChange = setInterval(function(){
        if(curIndex < $(".imgList li").length-1){
            curIndex ++;
        }else{
            curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex);
    },2000);

    $(".indexList").find("li").each(function(item){
        $(this).hover(function(){
            clearInterval(autoChange);
            changeTo(item);
            curIndex = item;
        },function(){
            autoChange = setInterval(function(){
                if(curIndex < $(".imgList li").length-1){
                    curIndex ++;
                }else{
                    curIndex = 0;
                }
                //调用变换处理函数
                changeTo(curIndex);
            },2000);
        });
    });
    function changeTo(num){
        $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
        $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
    }
}