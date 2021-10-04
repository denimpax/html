$(window).on('load',function(){

	$(window).on("orientationchange", function(event) {
	  // alert( "This device is in " + event.orientation + " mode!" );
	  var t = $(window).width();
		if (t<960) {
			$('.desktop').css('display', 'none');
			$('.mobile').css('display', 'block');
			var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true
	    });
	    $('.scroll-tbl').mCustomScrollbar({
				horizontalScroll: true,
				mouseWheel: false,
				theme: 'dark',
				scrollInertia: 250,
				advanced:{pdateOnBrowserResize: true}
			});
		}
		else {
			$('.mobile').css('display', 'none');
			$('.desktop').css('display', 'block');
			$('.nav.desktop, .page-content-search').css('display', 'flex');
			// $('.page-sidebar-wrapp').mCustomScrollbar({
			// 	horizontalScroll: true,
			// 	mouseWheel: false,
			// 	theme: 'dark',
			// 	scrollInertia: 250,
			// 	advanced:{pdateOnBrowserResize: true}
			// });

			// Photo box
			$('.photobox').each(function(){
		    var count = $(this).children('a').size();
		    if (count == 1) {
		      $(this).addClass('one');
		    }
		    if (count == 2) {
		      $(this).addClass('two');
		    }
		    if (count == 3) {
		      $(this).addClass('three');
		    }
		    if (count == 4) {
		      $(this).addClass('four');
		    }
		    if (count >= 5) {
		      $(this).addClass('sliderBox');
		      $('.sliderBox').slick({
		        dots: true,
		        infinite: true,
		        speed: 500,
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        variableWidth: true
		      });
		    }
		  });

		 //  function getViewportSize(doc) {
		 //    doc = doc || document;
		 //    var elem  = doc.compatMode == 'CSS1Compat' ? doc.documentElement : doc.body;
		 //    return [elem.clientWidth, elem.clientHeight];
			// }
			// $('.page-sidebar-wrapp').css('height', getViewportSize()[1] - 20);

			// $('.page-sidebar-wrapp').containedStickyScroll({
			// 	duration: 0,
			// 	unstick: true,
			// 	closeChar: '' 
			// });

			$('.scroll-tbl').mCustomScrollbar({
				horizontalScroll: true,
				mouseWheel: false,
				theme: 'dark',
				scrollInertia: 250,
				advanced:{pdateOnBrowserResize: true}
			});
		}
	});

	$(window).orientationchange();

	var t = $(window).width();
	if (t<960) {
		$('.desktop').css('display', 'none');
		$('.mobile').css('display', 'block');
		$('body').on('click', '.js-show-menu', function(){
			$(this).removeClass('js-show-menu').addClass('js-hide-menu active');
			$('.nav-wrapp').slideDown();
		});
		$('body').on('click', '.js-hide-menu', function(){
			$(this).removeClass('js-hide-menu active').addClass('js-show-menu');
			$('.nav-wrapp').slideUp();
		});
		var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true
    });
		$('.scroll-tbl').mCustomScrollbar({
			horizontalScroll: true,
			mouseWheel: false,
			theme: 'dark',
			scrollInertia: 250,
			advanced:{pdateOnBrowserResize: true}
		});
	}
	else {
		$('.mobile').css('display', 'none');
		$('.desktop').css('display', 'block');
		$('.nav.desktop, .page-content-search').css('display', 'flex');
		// $('.page-sidebar-wrapp').mCustomScrollbar({
		// 	theme: 'minimal-dark',
		// 	scrollInertia: 250,
		// 	horizontalScroll: true,
		// 	mouseWheel: false,
		// 	advanced:{pdateOnBrowserResize: true}
		// });

		// Photo box
		$('.photobox').each(function(){
	    var count = $(this).children('a').size();
	    if (count == 1) {
	      $(this).addClass('one');
	    }
	    if (count == 2) {
	      $(this).addClass('two');
	    }
	    if (count == 3) {
	      $(this).addClass('three');
	    }
	    if (count == 4) {
	      $(this).addClass('four');
	    }
	    if (count >= 5) {
	      $(this).addClass('sliderBox');
	      $('.sliderBox').slick({
	        dots: true,
	        infinite: true,
	        speed: 500,
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        variableWidth: true
	      });
	    }
	  });

	 //  function getViewportSize(doc) {
	 //    doc = doc || document;
	 //    var elem  = doc.compatMode == 'CSS1Compat' ? doc.documentElement : doc.body;
	 //    return [elem.clientWidth, elem.clientHeight];
		// }
		// $('.page-sidebar-wrapp').css('height', getViewportSize()[1] - 20);

		// $('.page-sidebar-wrapp').containedStickyScroll({
		// 	duration: 0,
		// 	unstick: true,
		// 	closeChar: '' 
		// });

		// $('.scroll-tbl').mCustomScrollbar({
		// 	horizontalScroll: true,
		// 	mouseWheel: false,
		// 	theme: 'dark',
		// 	scrollInertia: 250,
		// 	advanced:{pdateOnBrowserResize: true}
		// });
	}
});

$(document).ready(function(){

	setTimeout(function() {
		$('select').styler();
		$('form').css('display', 'block');
	}, 500);

	$('.tooltip').tooltipster({
		contentAsHTML: true,
		position: 'top',
		theme: 'black',
	});

	$('.tooltip-tl').tooltipster({
		contentAsHTML: true,
		position: 'top-left',
		theme: 'black',
	});

	$('.tooltip-tr').tooltipster({
		contentAsHTML: true,
		position: 'top-right',
		theme: 'black',
	});

	$('.tooltip-b').tooltipster({
		contentAsHTML: true,
		position: 'bottom',
		theme: 'black',
	});

	// Alt for html
  $('.photobox img').each(function() {
  	var $this = $(this),
      alt = $this.attr('alt');
    	$this.after($('<span>').html(alt));
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
				return item.el.attr('title');
			}
		}
	});

	$('.gallery-box').magnificPopup({
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
				return item.el.attr('title');
			}
		}
	});

	$('.mp-popup-cap').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll',
	});
});

