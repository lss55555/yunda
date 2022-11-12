// 初始化加载头部尾部
$(function () {
	$("#head").load("../public/header.html");
	$("#footer").load("../public/footer.html");
})
$(function () {
	var url = window.location.href;
	if (url.indexOf("a3") != -1) {
		let num = $("#f5").offset().top;
		$('html,body').animate({
			scrollTop: num-600
		}, 0);
		$(".navFocus a:eq(2)").addClass("active").siblings().removeClass("active");
		$(".singeBox .sp").eq(2).addClass("active").siblings().removeClass("active");
	}
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
	//  wow插件
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		// 如果IE浏览器的版本不是6-9，就初始化插件
		new WOW().init(); // 初始化wow插件
	};
	//swiper插件
	// 发展历程轮播图
	var swiper = new Swiper(".mySwiper1", {
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next.one",
			prevEl: ".swiper-button-prev.one",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1070: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
	// 企业优势——tab切换制造与品质优势轮播图
	var swiper = new Swiper(".mySwiper2", {
		autoplay: true,
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination.two",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
		},
	});
	// 企业优势tab切换
	$(".navFocus a").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		$(".singeBox .sp").eq($(this).index()).addClass("active").siblings().removeClass("active");
	})
	// 激活fancybox插件
	$(".fancybox").fancybox();
	// 点击回到顶部
	$(window).scroll(function () {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > 1) {
			$(".subBanner").removeClass("subShow");
		} else {
			$(".subBanner").addClass("subShow");
		}
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