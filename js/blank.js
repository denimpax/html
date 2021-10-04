$(document).ready(function(){

	$('body').on('click', '.corp-form-button', function(){
		$(this).toggleClass('active');
		$('.corp-form-form').slideToggle();
	});
});