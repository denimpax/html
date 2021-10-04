$(document).ready(function(){

	$(window).on("orientationchange", function() {
		// alert( "This device is in " + event.orientation + " mode!" );
		var t = $(window).width();
		if (t<960) {
			$('.car-desktop').css('display', 'none');
			$('.car-mobile').css('display', 'block');
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 1,
				slidesPerGroup: 1,
				speed: 1000,
				centeredSlides: false,
				nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
				spaceBetween: 30
			});
		}
		else {
			$('.car-mobile').css('display', 'none');
			$('.car-desktop').css('display', 'block');
			var swiper = new Swiper('.swiper-container', {
			slidesPerView: 2,
			slidesPerGroup: 2,
			speed: 1000,
			centeredSlides: false,
			nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
			spaceBetween: 30
		});
		}
	});

	$(window).orientationchange();

// Desktop & Mobile
var t = $(window).width();
if (t<960) {
	$('.car-desktop').css('display', 'none');
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		speed: 1000,
		centeredSlides: false,
		nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
		spaceBetween: 30
	});
}
else {
	$('.car-mobile').css('display', 'none');

	$('.car-desktop-cars-vesta').click(function(){
		$(this).removeClass('hide');
		$('.test').slideUp();
		$('.car-desktop-cars-vesta, .car-desktop-info-vesta').removeClass('hide');
		$('.car-desktop-cars-xray .repair, .car-desktop-info-xray .repair').slideUp();
		$('.car-desktop-cars-xray, .car-desktop-info-xray').toggleClass('hide');
		$('.form-title').toggleClass('vesta').removeClass('xray');
	});

	$('.car-desktop-cars-xray').click(function(){
		$(this).removeClass('hide');
		$('.test').slideUp();
		$('.car-desktop-cars-xray, .car-desktop-info-xray').removeClass('hide');
		$('.car-desktop-cars-vesta .repair, .car-desktop-info-vesta .repair').slideUp();
		$('.car-desktop-cars-vesta, .car-desktop-info-vesta').toggleClass('hide');
		$('.form-title').toggleClass('xray').removeClass('vesta');
	});

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 2,
		slidesPerGroup: 2,
		speed: 1000,
		centeredSlides: false,
		nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
		spaceBetween: 30
	});
}

	$('body').on('click', '.js-repair', function(){
		$(this).toggleClass('active');
		$(this).closest('.resources').next('.repair').slideToggle();
	});

	$('body').on('click', '.js-mob-repair', function(){
		$(this).toggleClass('active');
		$(this).closest('.wrapp').next('.repair').slideToggle();
	});

	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tClose: 'Закрыть',
		tLoading: 'Загрузка фотографии #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '%curr% из %total%',
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">Не могу загрузить #%curr%</a> картинку.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Фото: Вячеслав Малунов</small>';
			}
		}
	});

	$('.js-more').click(function(){
		$(this).hide();
		$.ajax({
			type: "GET",
			url: "data/ajax/spec/lada-vx/blog.html",   
			dataType: 'html',
			cache: false,
			async: true,
			success: function(html){
				$("#blog").append(html);
			},
			error: function(){},
			beforeSend: function(){},
			complete: function() {
				$('.mp-popup-blog').magnificPopup({
					type: 'ajax',
					alignTop: true,
					overflowY: 'scroll',
				});
			}
		});
	});

	$('.js-reports-more').click(function(){
		$.ajax({
			type: "GET",
			url: "data/ajax/spec/lada-vx/report.html",   
			dataType: 'html',
			cache: false,
			async: true,
			success: function(html){
				$(".reports-wrapp").append(html);
			},
			error: function(){},
			beforeSend: function(){},
			complete: function() {}
		});
	});

	$('.mp-popup-blog').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll',
	});

	$('.tooltip').tooltipster({
		contentAsHTML: true,
	});

	//Demo
	$('.js-demo-form-error').click(function(){
		$('.form-wrapp-row').toggleClass('error');
	});

});