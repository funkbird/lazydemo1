/**
 * Ӧ�������ֲ�ͼJS
 */
window.onload=function(){
    var curIndex = 0; //��ǰindex
//  alert(imgLen);
// ��ʱ���Զ��任��ÿ��
    var autoChange = setInterval(function(){
        if(curIndex < $(".imgList li").length-1){
            curIndex ++;
        }else{
            curIndex = 0;
        }
        //���ñ任������
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
                //���ñ任������
                changeTo(curIndex);
            },2000);
        });
    });
    function changeTo(num){
        $(".imgList").find("li").removeClass("imgOn").hide().eq(num).fadeIn().addClass("imgOn");
        $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
    }
}