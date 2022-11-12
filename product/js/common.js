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
   //点击切换
      $(".sloganNav a").click(function(){
          let $index=$(this).index();
          if($index==0){
           $(".sloganNav a:eq(0)").attr("href","../product/railway.html")
          }else if($index==1){
              $(".sloganNav a:eq(1)").attr("href","../product/urban.html")
          }else if($index==2){
           $(".sloganNav a:eq(2)").attr("href","../product/academy.html")
       }
           
      })
//    swiper插件
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1.8,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.mySwiper1 .swiper-button-next',
        prevEl: '.mySwiper1 .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        //当宽度大于等于768
        768: {
            slidesPerView: 1.8,
            spaceBetween: 0
        },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.8,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.mySwiper2 .swiper-button-next',
        prevEl: '.mySwiper2 .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        //当宽度大于等于768
        768: {
            slidesPerView: 1.8,
            spaceBetween: 0
        },
    },
  });
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1.8,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.mySwiper3 .swiper-button-next',
        prevEl: '.mySwiper3 .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        //当宽度大于等于768
        768: {
            slidesPerView: 1.8,
            spaceBetween: 0
        },
    },
  });
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1.8,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.mySwiper4 .swiper-button-next',
        prevEl: '.mySwiper4 .swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        //当宽度大于等于768
        768: {
            slidesPerView: 1.8,
            spaceBetween: 0
        },
    },
  });
  //wow初始化
  if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    // 如果IE浏览器的版本不是6-9，就初始化插件
    new WOW().init(); // 初始化wow插件
};
});
