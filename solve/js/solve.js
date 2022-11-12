// 初始化加载头部尾部
$(function () {
    // $("#head").load("../../../public/header.html");
    $("#footer").load("../public/footer.html");
})
$(function () {
    // // 添加模态框
    $(".nav ul li").mouseover(function () {
        $("header").addClass("active");
        $("#head").addClass("active");
    });
    $(".nav ul li").mouseout(function () {
        $("header").addClass("active");
        $("#head").addClass("active");
    });
    // 下拉菜单改变
    $(".nav ul li").hover(function () {
        $(this).addClass("show");
        var $index = $(".show").index();
        console.log($(".navBar ul li:eq(" + $index + ")"))
        $(".navBar ul li:eq(" + $index + ")").addClass("active").siblings().removeClass("active");
    }, function () {
        $(this).removeClass("show");
    })
    // 小屏按钮
    $(".menu_btn").click(function () {
        $(this).toggleClass("active");
        $(".navigator").toggleClass("active");
    });
    // 小屏菜单
    $(".first_li").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next().removeClass("active");
        } else {
            $(".first_li ,.second-li").removeClass("active");
            $(this).addClass("active");
            $(this).next().addClass("active");
        }

    });
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 90) {
            $("header").addClass("open");
        } else {
            $("header").removeClass("open");
        }

    }
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
            $(".soluSwiper").removeClass("bShow");
        } else {
            $(".soluSwiper").addClass("bShow");
        }
    });
    // 初始化swiper插件
    var swiper1 = new Swiper(".mySwiper1", {
        autoplay: false,
        pagination: {
            el: ".mySwiper1 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".mySwiper1 .swiper-button-next",
            prevEl: ".mySwiper1 .swiper-button-prev",
        },
        on: {
            slideChange: function () {
                $(".sloganNav a").removeClass("active");
                if (this.activeIndex == 0) {
                    $(".sloganNav.so0 a").eq(0).addClass("active");
                    $(".b1").addClass("block").siblings().removeClass("block");
                } else if (this.activeIndex == 1) {
                    $(".sloganNav.so1 a").eq(0).addClass("active");
                    $(".b4").addClass("block").siblings().removeClass("block");
                } else if (this.activeIndex == 2) {
                    $(".sloganNav.so2 a").eq(0).addClass("active");
                    $(".b5").addClass("block").siblings().removeClass("block");
                }
            },

        }
    });
    //根据页面跳转显示对应块
    var url = window.location.href;
    if (url.indexOf("&") != -1) {
        var i = url.split("&")[1];
        console.log(i)
        if (i.indexOf("1") != -1) {
            swiper1.slideTo(0, 1000, false);
            $("#1").addClass("active").siblings().removeClass("active");
            $(".b1").addClass("block").siblings().removeClass("block");
        } else if (i.indexOf("2") != -1) {
            console.log(3)
            swiper1.slideTo(0, 1000, false);
            $("#2").addClass("active").siblings().removeClass("active");
            $(".b2").addClass("block").siblings().removeClass("block");
        } else if (i.indexOf("3") != -1) {
            swiper1.slideTo(0, 1000, false);
            $("#3").addClass("active").siblings().removeClass("active");
            $(".b3").addClass("block").siblings().removeClass("block");
        } else if (i.indexOf("4") != -1) {
            console.log(666)
            swiper1.slideTo(1, 1000, false);
            $("#4").addClass("active").siblings().removeClass("active");
            $(".b4").addClass("block").siblings().removeClass("block");
        } else if (i.indexOf("5") != -1) {
            swiper1.slideTo(2, 1000, false);
            $("#5").addClass("active").siblings().removeClass("active");
            $(".b5").addClass("block").siblings().removeClass("block");
        }
        $(".navFocus a").click(function () {
            $(".navFocus a").removeClass("active");
            $(this).addClass("active").siblings().removeClass("active");
            var $index = $(this).index();
            $(".mySwiper" + ($index + 2)).addClass("active").siblings().removeClass("active");
        });
    }
    console.log($(".slove1"));
    $(".solve1").click(function () {
        swiper1.slideTo(0);
    });
    $(".solve11").click(function () {
        swiper1.slideTo(0);
        $(".so0 a:eq(0)").addClass("active").siblings().removeClass("active");
        $(".b1").addClass("block").siblings().removeClass("block");
    });
    $(".solve12").click(function () {
        swiper1.slideTo(0);
        $(".so0 a:eq(1)").addClass("active").siblings().removeClass("active");
        $(".b2").addClass("block").siblings().removeClass("block");
    });
    $(".solve13").click(function () {
        swiper1.slideTo(0);
        $(".so0 a:eq(2)").addClass("active").siblings().removeClass("active");
        $(".b3").addClass("block").siblings().removeClass("block");
    });
    $(".solve2").click(function () {
        console.log(666)
        swiper1.slideTo(1);
    });
    $(".solve3").click(function () {
        swiper1.slideTo(2);
    });
    // 最后内容的轮播图
    var swiper2 = new Swiper(".mySwiper2", {
        speed: 500,
        autoplay: {
            delay: 50000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".mySwiper2 .swiper-button-next",
            prevEl: ".mySwiper2 .swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
    var swiper3 = new Swiper(".mySwiper3", {
        speed: 500,
        autoplay: {
            delay: 50000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".mySwiper3 .swiper-button-next",
            prevEl: ".mySwiper3 .swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
        },
    });
    // 点击切换
    $(".sloganNav a").click(function () {
        $(".sloganNav a").removeClass("active");
        $(this).addClass("active").siblings().removeClass("active");
        console.log($(this).attr("id"))
        var $id = $(this).attr("id");
        $(".b" + $id).addClass("block").siblings().removeClass("block");
    })
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
   
})
// $(function () {
//
// })