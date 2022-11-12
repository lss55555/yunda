// 初始化加载头部尾部
$(function () {
    $("#head").load("../public/header.html");
    $("#footer").load("../public/footer.html");
})
$(function () {
    // 收起下拉菜单
    $(window).mousemove(function (e) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var yy = e.pageY;
        var num;
        //console.log(scrollTop)
        //console.log(yy)
        if (scrollTop > 1) {
            num = scrollTop + 540
            if (yy > num) {
                $("#head").removeClass("active");
                $("header").removeClass("active");
            }
        } else {
            if (yy > 540) {
                $("#head").removeClass("active");
                $("header").removeClass("active");
            }
        }

    });
    //线条
    $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 1) {
            $(".b0").removeClass("bShow");
        } else {
            $(".b0").addClass("bShow");
        }
    });
    // 点击回到顶部
	$(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
       if (scrollTop > 500) {
           $(".backTop").addClass("active");
       } else {
           $(".backTop").removeClass("active");
       }
   });
   $(".backTop").click(function () {
       $('body,html').animate({
           scrollTop: 0
       }, 500);
   })

});
