(function( $ ){

  $.fn.containedStickyScroll = function( options ) {
  
	var defaults = {  
		unstick : true,
		easing: 'linear',
		duration: 500,
		queue: false,
		closeChar: '^',
		closeTop: 0,
		closeRight: 0  
	}  
                  
	var options =  $.extend(defaults, options);
    var $getObject = $(this).selector;
    
	if(options.unstick == true){  
		this.css('position','relative');
		this.append('<a class="scrollFixIt">' + options.closeChar + '</a>');
		jQuery($getObject + ' .scrollFixIt').css('position','absolute');
		jQuery($getObject + ' .scrollFixIt').css('top',options.closeTop + 'px');
		jQuery($getObject + ' .scrollFixIt').css('right',options.closeTop + 'px');
		jQuery($getObject + ' .scrollFixIt').css('cursor','pointer');
		jQuery($getObject + ' .scrollFixIt').click(function() {
			jQuery($getObject).animate({ top: "0px" },
				{ queue: options.queue, easing: options.easing, duration: options.duration });
			jQuery(window).unbind();
			jQuery('.scrollFixIt').remove();
		});
	} 
  	jQuery(window).scroll(function() {
        if(jQuery(window).scrollTop() > (jQuery($getObject).parent().offset().top) &&
           (jQuery($getObject).parent().height() + jQuery($getObject).parent().position().top + 130) > (jQuery(window).scrollTop() + jQuery($getObject).height())){
        	jQuery($getObject).animate({ top: (jQuery(window).scrollTop() - jQuery($getObject).parent().offset().top) + "px" }, 
            { queue: options.queue, easing: options.easing, duration: options.duration });
        }
        else if(jQuery(window).scrollTop() < (jQuery($getObject).parent().offset().top)){
        	jQuery($getObject).animate({ top: "0px" },
            { queue: options.queue, easing: options.easing, duration: options.duration });
        }
	});

  };
})(jQuery);

function limitText(limitField, limitCount, limitNum) { if (limitField.value.length > limitNum) { limitField.value = limitField.value.substring(0, limitNum); } else { limitCount.value = limitNum - limitField.value.length; } }
(function($) {
    $.fn.extend( {
        limiter: function(limit, elem) {
            $(this).on("keyup focus", function() {
                setCount(this, elem);
            });
            function setCount(src, elem) {
                var chars = src.value.length;
                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;
                }
                elem.html( limit - chars );
            }
            setCount($(this)[0], elem);
        }
    });
})(jQuery);

$(window).on('load',function(){
	$('.header-search, .header-menu').show();

	var t = $(window).width();
	if (t<960) {
		// mobile
	}
	else {
		// desktop
		// Search
		$('body').on('click', '.js-show-search', function(){
			$(this).removeClass('js-show-search').addClass('js-hide-search');
			$('.menu-right-burger').removeClass('js-hide-menu').addClass('js-show-menu');
			$('.header-menu').removeClass('active zindex');
			$('.header-search').addClass('active');
			setTimeout(function() {
				$('.header-search').addClass('zindex')
			}, 350);
		});
		$('body').on('click', '.js-hide-search', function(){
			$(this).removeClass('js-hide-search').addClass('js-show-search');
			$('.menu-right-burger').removeClass('js-hide-menu').addClass('js-show-menu');
			$('.header-menu').removeClass('active zindex');
			$('.header-search').removeClass('zindex');
			setTimeout(function() {
				$('.header-search').removeClass('active');
			}, 350);
		});

		// Sub menu
		var heightAjaxMenu = $('.header-menu').height();
		$('.header-menu').css('top', -heightAjaxMenu-6);
		$('body').on('click', '.js-show-menu', function(){
			$(this).removeClass('js-show-menu').addClass('js-hide-menu');
			$('.menu-right-search').removeClass('js-hide-search').addClass('js-show-search');
			$('.header-search').removeClass('active zindex');
			$('.header-menu').addClass('active');
			setTimeout(function() {
				$('.header-menu').addClass('zindex')
			}, 350);
		});
		$('body').on('click', '.js-hide-menu', function(){
			$(this).removeClass('js-hide-menu').addClass('js-show-menu');
			$('.menu-right-search').removeClass('js-hide-search').addClass('js-show-search');
			$('.header-search').removeClass('active zindex');
			$('.header-menu').removeClass('zindex');
			setTimeout(function() {
				$('.header-menu').removeClass('active');
			}, 350);
		});

		// Main page photo block
		$('.main-head-closed').click(function(){
			$(this).fadeOut();
			$('.main-head').slideUp();
		});

		// Ticker
		$('.marquee').liMarquee({
			drag: false,
			runshort: false,
			hoverstop: true,
			inverthover: true,
		});

		$('.discussion .title').mouseleave(function(){
			$('.str_origin').css('left', '0');
		});

		$('body').on('click','.mp-popup-anons',function(){
			$.magnificPopup.open({
				items: {
					src: 'data/ajax/popup/club-anons.html',
					type: 'ajax',
					alignTop: true,
					overflowY: 'scroll',
				}
			});
		});

		// Scroll bar
		$('.chat-site').mCustomScrollbar({
			theme: 'minimal-dark',
			scrollInertia: 250,
		});

		// Tooltip
		$('.tooltip-bottom-forum').tooltipster({
			contentAsHTML: true,
			position: 'bottom',
			theme: 'forum-tip',
		});

		// Fixed block
	  $('.topics').containedStickyScroll({
			duration: 0,
			closeTop: 500,
			unstick: true,
			closeChar: '' 
		});
	}
});

$(document).ready(function(){

	setTimeout(function() {
		$('select, input[type="file"], input[type="checkbox"], input[type="radio"]').styler();
	}, 500);

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

	$('.blog-wrapp-page img, .discussion-wrapp-page img, .meeting-wrapp-page img').each(function() {
    var $this = $(this),
      title = $this.attr('title');
    $this.after($('<span>').text(title));
  });

	// Anchor Link
	$('a[rel*="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('rel')).offset().top
		}, 1000);
		e.preventDefault();
	});

	var elem = $("#chars");
	$("#title").limiter(100, elem);

	// Demo
	$('.like, .item-star').click(function(){
		$(this).toggleClass('active');
	});

	$('.js-demo-discussion').click(function(){
		$('.discussion-wrapp-contents .item').show();
		$('.discussion-favorites, .discussion-youpost').hide();
	});

	$('.js-demo-favorites').click(function(){
		$('.discussion-favorites').show();
		$('.discussion-wrapp-contents .item, .discussion-youpost').hide();
	});

	$('.js-demo-youpost').click(function(){
		$('.discussion-youpost').show();
		$('.discussion-wrapp-contents .item, .discussion-favorites').hide();
	});

});