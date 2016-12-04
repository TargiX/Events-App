$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 65
		}, 1300, 'easeInOutExpo');
		event.preventDefault();
	});
})

$('body').scrollspy({
  target: '#myNavbar',
  offset: 115
});


