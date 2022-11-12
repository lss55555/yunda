$(document).ready(function () {
	$("#head").load("public/header.html")
})
$(function () {
	$("body").mousemove(function (e) {
		var xx = e.pageX;
		var yy = e.pageY;
		//console.log(yy)
		if (yy > 540) {
			$("#head").removeClass("active");
			$("header").removeClass("active");
		}
	});
	console.log($(".nav ul li:eq(0)").attr("class"))
})
// swiper插件
$(function () {
	// 全屏
	var swiper1 = new Swiper(".mySwiper1", {
		direction: "vertical",
		slidesPerView: 'auto',
		mousewheel: true,
		speed: 1000,
		on: {
			slideChange: function () {
				if (this.activeIndex != 0) {
					$("header").addClass("open");
				} else {
					$("header").removeClass("open");
				}

				if (this.activeIndex == 2) {
					setTimeout(function () {
						var one = new CountUp("one", 0, $("#one").text(), 0, 2.5);
						var two = new CountUp("two", 0, $("#two").text(), 0, 2.5);
						var three = new CountUp("three", 0, $("#three").text(), 0, 2.5);
						one.start();
						two.start();
						three.start();

					}, 1500)
				}
			}
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
	});
	// 第一屏大屏轮播
	var swiper2 = new Swiper('.swiper-container1', {
		loop: true,
		speed: 3000,
		autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fade: {
			crossFade: true,
		},
		keyboard: true,
		pagination: {
			el: '.swiper-pagination2',
			clickable: true,
		},
	});
	// 第二屏小屏轮播
	var swiper3 = new Swiper(".mySwiper3", {
		navigation: {
			nextEl: ".swiper-button-next1",
			prevEl: ".swiper-button-prev1",
		},
		on: {
			init: function (swiper) {
				if (this.activeIndex == 0) {
					$(".mySwiper3 .swiper-button-prev1").css("display", "none");
				} else if (this.activeIndex == 1) {
					$(".mySwiper3 .swiper-button-prev1").css("display", "block");
					$(".mySwiper3 .swiper-button-next1").css("display", "block");
				} else if (this.activeIndex == 2) {
					$(".mySwiper3 .swiper-button-next1").css("display", "none");
				}
			},
			slideChangeTransitionEnd: function () {
				if (this.activeIndex == 0) {
					$(".mySwiper3 .swiper-button-prev1").css("display", "none");
				} else if (this.activeIndex == 1) {
					//console.log(2)
					$(".mySwiper3 .swiper-button-prev1").css("display", "block");
					$(".mySwiper3 .swiper-button-next1").css("display", "block");
				} else if (this.activeIndex == 2) {
					$(".mySwiper3 .swiper-button-next1").css("display", "none");
				}
			},
		}
	});
	// 第六屏轮播图
	var swiper4 = new Swiper(".mySwiper4", {
		slidesPerView: 3,
		scrollbar: {
			el: ".swiper-scrollbar4",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			767: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
		},
	});
})

$(function () {
	//动画背景图
	var $li1 = $(".li1");
	if ($li1.length > 0) {
		$li1.each(function () {
			var transform;
			var width = $(window).width(),
				transform = 0;

			function fn() {
				transform += 1;
				if (transform + 1 >= width) {
					transform = 0
				}
				$li1.css({
					"-webkit-transform": "translateX(" + -transform + "px) translateY(-50%)"
				})
				requestAnimationFrame(fn);
			}

			if (width * 2 > window.innerWidth) {
				fn()
			}
		})
	}
	var $active = $(".xzj ul li");
	// $active.mouseover(function() {
	// 	var $i = $(this).index();
	// 	$(this).addClass("active").siblings().removeClass("active");
	// 	$(".nro ul li:eq("+$i+")").addClass("active").siblings().removeClass("active");
	// 	var $url = $(this).attr("data-url");
	// 	$.each((["img/center1.jpg", "img/center2.jpg", "img/center3.jpg"]), function(i, v) {
	// 		if (i == $i) {
	// 			$(".jjGerlly .jjGerllyThum .pic").css({
	// 				"background-image": "url(" + v + ")"
	// 			})
	// 		}
	// 	})

	// })
	$active.hover(function () {
		TweenMax.fromTo('.maskBall', 1, {
			y: 600
		}, {
			y: -1800
		});
		var $i = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".nro ul li:eq(" + $i + ")").addClass("active").siblings().removeClass("active");
		setTimeout(function () {
			var $url = $(this).attr("data-url");
			$.each((["img/center1.jpg", "img/center2.jpg", "img/center3.jpg"]), function (i, v) {
				if (i == $i) {
					$(".jjGerlly .jjGerllyThum .pic").css({
						"background-image": "url(" + v + ")"
					})
				}
			})
		}, 300)
	}, function () {
		TweenMax.fromTo('.maskBall', 1, {
			y: 600
		}, {
			y: 600
		});
	})
})
