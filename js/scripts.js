// scripts.js

$(function() {
	var carousel = $('#carousel'),
		carouselList = carousel.find('.photo'),
		carouselDots = carousel.find('.dots');
	
	carouselList.find('li').each(function() {
		carouselDots.append('<li></li>');
	});

	var dot = carouselDots.find('li');
	dot.first().addClass('active');

	dot.click(function(){
		if(!$(this).hasClass('active')){
		target = $(this).index();
		dotClick(target);
		};
	});
	
	function dotClick(target) {
		carouselList.stop().animate({'left': -400 * target});
		dot.removeClass('active').eq(target).addClass('active');
	};

	var slideLeft = $("#arrow-left"),
		slideRight = $("#arrow-right"),
		carouselControls = $('.carousel-controls');

	slideLeft.click(function() {
		current = $('.active').index();
		dotCount = carouselDots.find('li').length;
			if ($('li.active').is(':first-child')) {
				carouselList.stop().animate({'left': -400 * (dotCount - 1)}, 800);
				dot.removeClass('active').last().addClass('active');
			} else {
				carouselList.stop().animate({'left': (current * -400) + 400}, 800);
				$('.active').prev().addClass('active').next().removeClass('active');		
			};
	});

	slideRight.click(function() {
		autoSlide();
	});

	function autoSlide() {
		current = $('.active').index();
			if ($('li.active').is(':last-child')) {
				carouselList.stop().animate({'left': 0}, 800);
				dot.removeClass('active').first().addClass('active');
			} else {
				carouselList.stop().animate({'left': -400 * (current + 1)}, 800);	
				$('.active').next().addClass('active').prev().removeClass('active');
			};
	};

	function interval() {
		interval = setInterval(autoSlide, 5000);
	};
	function stopInterval () {
		clearInterval(interval);
	}
	carouselControls.on('mouseenter', stopInterval).on('mouseleave', interval);
	interval();
});