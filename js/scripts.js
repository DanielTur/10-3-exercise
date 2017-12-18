// scripts.js

$(function() {
	var carouselList = $('#carousel > ul'),
		carousel_controls = $('.carousel-controls'),
		goLeft = $("#arrow-left"),
		goRight = $("#arrow-right");
	
	function changeSlide () {
		carouselList.animate({'marginLeft': -400}, 800, moveFirstSlide);
	}
	function interval () {
		interval = setInterval(changeSlide, 4000);
	}
	function stopInterval () {
		clearInterval(interval);
	}
	carousel_controls.on('mouseenter', stopInterval).on('mouseleave', interval);
	interval();

	function moveFirstSlide() { 	
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			lastItem.after(firstItem);
			carouselList.css({'marginLeft':0});
	};
	function moveLastSlide() { 	
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			firstItem.before(lastItem);
			carouselList.css({'marginLeft':-400});
	};

	goLeft.click(function() {
		carouselList.animate({'marginLeft': 0}, 800, moveLastSlide);
	});
	goRight.click(function() {
		carouselList.animate({'marginLeft': -400}, 800, moveFirstSlide);
	});
});

// to do : pagination/bullets!

