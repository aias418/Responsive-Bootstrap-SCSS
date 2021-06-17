$(document).ready(function($) {
	const swiperRateSelector = ".check-slider";
	if (document.querySelectorAll(".check-slider").length) 
		var initSwiperRate = new Swiper(".check-slider", {
			navigation: {
				nextEl: ".nav-next",
				prevEl: ".nav-prev"
			},
			pagination: {
				el: ".check-page",
				clickable: !0,
				type: "bullets",
				bulletClass: "page-item",
				bulletActiveClass: "page-item-active",
				renderBullet: function(index, className) {
					return '<span class="' + className + " page-item-" + (index + 1) + '">' + (index + 1) + "</span>"
				}
			}
		});
})