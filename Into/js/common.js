// 初始化加载头部尾部
$(function () {
    $("#head").load("../../public/header.html");
    $("#footer").load("../../public/footer.html");
})
$(function () {
    //  wow插件
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		// 如果IE浏览器的版本不是6-9，就初始化插件
		new WOW().init(); // 初始化wow插件
	};
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
    // 形成内容并实现下一页功能
    var total = Math.ceil($("#page").attr("data-total") / $("#page").attr("data-size"));
    var curPage = $("#page").attr("data-page");
    var pageSize = $("#page").attr("data-size");
    var url = $("#page").attr("data-cat");
    // 初始化下一页插件
    new Paging('page', {
        nowPage: Number(curPage), // 当前页码
        pageNum: total, // 总页码
        buttonNum: pageSize, //要展示的页码数量
        canJump: 0, // 是否能跳转。0=不显示（默认），1=显示
        showOne: 1, //只有一页时，是否显示。0=不显示,1=显示（默认）
        callback: function (num) { //回调函数
            window.location.href = url+num+".html"
        }
    })
    //线条
    $(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop >1){
            $(".b0").removeClass("bShow");
			$(".detailTop").removeClass("bShow");
		}else {
            $(".b0").addClass("bShow");
			$(".detailTop").addClass("bShow");
		}
	});
});
