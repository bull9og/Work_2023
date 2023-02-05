$(document).ready(function(){
	$('.section-2__sliderContainer').slick({
		arrows: true,
		speed: 1200,
		infinite: false,
		draggable: true,
		dots: true,
		slidesToShow: 1,
  		slidesToScroll: 1,
	});
	$('.section-3__videoContainer').hover(function(event) {
		$(this).toggleClass('active').next().slideToggle(200);
	});
	$('#checkbox').click(function(event) {
		$(this).toggleClass('activeBox').next().slideToggle(200);
	});
});