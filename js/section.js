
$( window ).on("orientationchange", function() {
  // alert( "This device is in " + event.orientation + " mode!" );
  
  var t = $(window).width();
	if (t<960) {
		// mobile
		$('a.comments-count').removeClass('info');
		$('.item-img').each(function(){
    	$(this).children('a.tag').wrapAll('<div class="wrapp-info"></div>');
    	$(this).children('a.comments-count').removeClass('info').wrapAll('<div class="wrapp-comment"></div>');
  	});
  	$('.js-w_closed').click(function(){
			$('.banner-mobi').slideUp();
		});
	}
	else {
		// desktop
		$('.banner-mobi').detach();
		$('a.comments-count').addClass('info');
	}
});

$(window).orientationchange();

$(window).on('load',function(){

	var t = $(window).width();
	if (t<960) {
		// mobile
		$('a.comments-count').removeClass('info');
		$('.item-img').each(function(){
    	$(this).children('a.tag').wrapAll('<div class="wrapp-info"></div>');
    	$(this).children('a.comments-count').removeClass('info').wrapAll('<div class="wrapp-comment"></div>');
  	});
  	$('.js-w_closed').click(function(){
			$('.banner-mobi').slideUp();
		});
	}
	else {
		// desktop
		$('.banner-mobi').detach();
		$('a.comments-count').addClass('info');
	}

	$('.sticker').each(function(){
		var count = $(this).children('.sticker-item').size();
		if (count == 2) {
			$(this).addClass('s2');
			$(this).append('<a href="javascript:void(0);" class="sticker-item more">');
			$('body').on('click', '.s2 .more', function(e){
				$(this).addClass('close');
				$(e.target).closest('.s2').addClass('active');
			});
			$('body').on('click', '.s2 .close', function(e){
				$(this).removeClass('close');
				$(e.target).closest('.s2').removeClass('active');
			});
		}
		if (count == 3) {
			$(this).addClass('s3');
			$(this).append('<a href="javascript:void(0);" class="sticker-item more">');
			$('body').on('click', '.s3 .more', function(e){
				$(this).addClass('close');
				$(e.target).closest('.s3').addClass('active');
			});
			$('body').on('click', '.s3 .close', function(e){
				$(this).removeClass('close');
				$(e.target).closest('.s3').removeClass('active');
			});
		}
		if (count == 4) {
			$(this).addClass('s4');
			$(this).append('<a href="javascript:void(0);" class="sticker-item more">');
			$('body').on('click', '.s4 .more', function(e){
				$(this).addClass('close');
				$(e.target).closest('.s4').addClass('active');
			});
			$('body').on('click', '.s4 .close', function(e){
				$(this).removeClass('close');
				$(e.target).closest('.s4').removeClass('active');
			});
		}
		if (count == 5) {
			$(this).addClass('s5');
			$(this).append('<a href="javascript:void(0);" class="sticker-item more">');
			$('body').on('click', '.more', function(e){
				$(this).addClass('close');
				$(e.target).closest('.s5').addClass('active');
			});
			$('body').on('click', '.close', function(e){
				$(this).removeClass('close');
				$(e.target).closest('.s5').removeClass('active');
			});
		}
	});

	setTimeout(function() {
		$('.sticker').css('opacity', '1');
	}, 600);
	
});

$(document).ready(function(){

	function getViewportSize(doc) {
    doc = doc || document;
    var elem  = doc.compatMode == 'CSS1Compat' ? doc.documentElement : doc.body;
    return [elem.clientWidth, elem.clientHeight];
	}

	// $('.sidebar-gray-wrapp').css('height', getViewportSize()[1] - 100);
	$('.sidebar-gray-wrapp').css('height', 1650);
	$('.sidebar-gray-wrapp').mCustomScrollbar({
		theme: 'minimal-dark',
		scrollInertia: 250,
	});

	$('.owl-carousel').owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		margin: 10,
		smartSpeed: 1000,
		autoplayHoverPause: false
	});

	$('.tooltip-l').tooltipster({
		contentAsHTML: true,
		position: 'left',
		theme: 'black',
	});

});