// Import the apps styles
import sass from "../scss/app.scss";

// Import our modules
import "./modules/_header.js";
import "./modules/_aboutpage.js";

console.log("hello");

$(window).scroll(function() {
	var scroll = $(window).scrollTop();

	if (scroll >= 150) {
		$(".astro").addClass("astro-invert");
	} else {
		$(".astro").removeClass("astro-invert");
	}
	if (scroll >= 6200) {
		$(".everywhere").addClass("everywhere-invert");
	} else {
		$(".everywhere").removeClass("everywhere-invert");
	}
});

$(document).ready(function() {
	const fadeIn = document.querySelector(".content-wrap");
	fadeIn.classList.add("fade-in");
});
$(document).ready(function() {
	const fadeInFooter = document.querySelector(".page-footer");
	fadeInFooter.classList.add("fade-in");
});
$(document).ready(function() {
	const contentFade = document.querySelector(".image-wrap");
	contentFade.classList.add("content-fade");
});
$(document).ready(function() {
	const pageFade = document.querySelector(".page-214");
	pageFade.classList.add("active");
});

$(document).ready(function() {
	const imageFade = document.querySelector(".project-wrapper");
	imageFade.classList.add("image-fade");
});

$(document).ready(function() {
	feather.replace();

	$(".slider-wrap").slick({
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: "linear",
		autoplay: true,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		arrows: false,
		mobileFirst: true
	});

	$(".scrolling-wrapper").on("init", function(event, slick) {
		console.log("initialized");
		feather.replace();
	});

	$(".scrolling-wrapper").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: '<button><i data-feather="chevron-left"></i></button>',
		nextArrow: '<button><i data-feather="chevron-right"></i></button>'
	});
});
