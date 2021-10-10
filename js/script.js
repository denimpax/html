$(document).ready(function(){

	$(window).scroll(function(){
      var width = $(window).width(),
          upButton = $('.up-button'),
          scrollPosCurrent = $(document).scrollTop();

      if(width > 960) {
          if(typeof window.scrollPos !== 'undefined') {
              if(scrollPosCurrent > window.scrollPos) {
                  upButton.children('.arrow').removeClass('down');
                  delete window.scrollPos;
              }
          } else if ($(window).scrollTop() < 100) {
              upButton.fadeOut(150)
          } else {
              upButton.fadeIn(150)
          }
      }
  });

  var t = $(window).width();
	if (t<960) {
		// mobile
	}
	else {
		// desktop
		$('body').on('click', '.head-right-search .search', function(){
	    $('.head-right-search').addClass('active');
	    $('.head-left-nav').addClass('none');
	    $('#search-input').focus();
	  });

	  $('body').on('click', '.head-right-search .closed', function(){
	    $('.head-right-search').removeClass('active');
	    $('.head-left-nav').removeClass('none');
	  });
	}

  $('.up-button').on('click', function() {
      var arrow = $(this).children('.arrow'),
          scrollPosCurrent = $(document).scrollTop();

      if(typeof window.scrollPos !== 'undefined' && window.scrollPos > scrollPosCurrent) {
          arrow.removeClass('down');
          $('html,body').animate({scrollTop: window.scrollPos}, 200);
          delete window.scrollPos;
      } else {
          arrow.addClass('down');
          $('html,body').animate({scrollTop: 0}, 200);
      }
      window.scrollPos = scrollPosCurrent;
  });

  var swiper = new Swiper('.swiper-containers', {
      slidesPerView: 7,
      spaceBetween: 10,
      speed: 700,
      autoplay: 3000,
			loop: true,
      breakpoints: {
      	1920: {
            slidesPerView: 7,
            spaceBetween: 10
        },
    		1280: {
            slidesPerView: 7,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        }
      }
  });

  $('.ajax-popup').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll'
	});

	$('body').on('click','.mp-popup-login',function(){
		$.magnificPopup.open({
			items: {
				src: 'data/ajax/popup/login.html',
				type: 'ajax',
				alignTop: true,
				overflowY: 'scroll',
			}
		});
	});

	$('body').on('click','.mp-popup-registration',function(){
		$.magnificPopup.open({
			items: {
				src: 'data/ajax/popup/registration.html',
				type: 'ajax',
				alignTop: true,
				overflowY: 'scroll',
			}
		});
	});

	$('body').on('click','.mp-popup-remind',function(){
		$.magnificPopup.open({
			items: {
				src: 'data/ajax/popup/remind.html',
				type: 'ajax',
				alignTop: true,
				overflowY: 'scroll',
			}
		});
	});

	$('body').on('click', '.js-menu', function(){
		$.ajax({
			type: 'GET',
			url: 'data/ajax/layout/nav.html',   
			dataType: 'html',
			cache: false,
			async: true,
			success: function(html){
				$('header').append(html);
			},
			error: function(){},
			beforeSend: function(){
				$('.head-right-menu').addClass('active');
			},
			complete: function() {
				$('.head-right-menu').removeClass('active');
				$('.js-nav-closed').click(function(){
					$('nav').detach();
				});
			}
		});
	});

	$('body').on('click', '.js-profil', function(){
		$.ajax({
			type: 'GET',
			url: 'data/ajax/layout/profil.html',   
			dataType: 'html',
			cache: false,
			async: true,
			success: function(html){
				$('.head-right-profil-loger').append(html);
			},
			error: function(){},
			beforeSend: function(){},
			complete: function() {
				$('.js-profil-closed').click(function(){
					$('.head-right-profil-loger .item').detach();
				});
			}
		});
	});

	// Chat
	function scrollWidth() {
		var div = $('<div>').css({
			position: "absolute",
			top: "0px",
			left: "0px",
			width: "100px",
			height: "100px",
			visibility: "hidden",
			overflow: "scroll"
		});

		$('body').eq(0).append(div);
		var width = div.get(0).offsetWidth - div.get(0).clientWidth;
		div.remove();
		return width;
	}
	$('body').on('click', '.js-show-chat', function(){
		$('html').css({'overflow':'hidden', 'margin-right':scrollWidth()});
		$(this).removeClass('js-show-chat').addClass('active js-hide-chat');
		$('body').after('<div class="chat-overlay"></div>');
		setTimeout(function() {
			$('.chat-overlay').addClass('active')
		}, 50);
		$('.chat-site').addClass('active');
	});

	$('body').on('click', '.js-hide-chat', function(){
		$(this).removeClass('active js-hide-chat').addClass('js-show-chat');
		$('.chat-overlay').removeClass('active')
		setTimeout(function() {
			$('.chat-overlay').detach();
		}, 350);
		$('.chat-site').removeClass('active');
		$('html').removeAttr('style');
	});

	// Tooltip
	$('.tooltip').tooltipster({
		contentAsHTML: true,
		theme: 'black',
	});

	$('.tooltip-left').tooltipster({
		contentAsHTML: true,
		position: 'left',
		theme: 'black',
	});

	$('.tooltip-right').tooltipster({
		contentAsHTML: true,
		position: 'right',
		theme: 'black',
	});

	$('.tooltip-bottom').tooltipster({
		contentAsHTML: true,
		position: 'bottom',
		theme: 'black',
	});

	$('.tooltip-bottom-right').tooltipster({
		contentAsHTML: true,
		position: 'bottom-right',
		theme: 'black',
	});

  // Demo
  $('.js-login_demo').click(function(){
  	$(this).hide();
  	$('.head-right-profil-loger').show();
  });

	// Cordiant
	$(document).on('click', '.cordiant-normal', function(){
		$('.cordiant-active').addClass('active');
	});

	$(document).on('click', '.js_form_show', function(){
		$('.js_p').addClass('active');
		$('.js_city_form').addClass('active');
	});

	$(document).on('click', '.js_form_hide', function(){
		$('.js_p').removeClass('active');
		$('.js_city_form').removeClass('active');
	});

	$(document).on('click', '.closed', function(){
		$('.cordiant-active').removeClass('active');
	});

	$(document).mouseup(function (e){
		var div = $('.cordiant');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.children('.cordiant-active').removeClass('active');
		}
	});

});