$(function () {
    $(".navFocus a").click(function(){
        var $index=$(this).index()
        $(this).addClass("active").siblings().removeClass("active");
        $(".joinList:eq("+$index+")").addClass("active").siblings().removeClass("active");
    })
    $(".joinList ul li").click(function () {
        var $txt = $(this).children("h5").text();
        $(".lightBox").addClass("active").find("h4").text($txt);
    });
    $(".close").click(function(){
        $(".lightBox").removeClass("active");
    })
})
