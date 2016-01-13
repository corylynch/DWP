$(document).ready(function(){

	var aboutMe = $('#about-me-button');
	var portfolio = $('#portfolio-button');
	var contact = $('#contact-button');

	$(function animate() {
    $('#nav').find('a').on('click',function(event){
        var $anchor = $(this);
 
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 700,'easeInOutExpo');
        
        event.preventDefault();
    });
});

});