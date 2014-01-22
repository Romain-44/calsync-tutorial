'use strict';

$(document).ready(function() {
	var nextButton = $('.nextbutton');

	nextButton.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.intro').fadeOut('400', function() {
		$('.slide1').fadeIn('400');	
		});
	});
});