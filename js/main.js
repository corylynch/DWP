$(document).ready(function(){

    $(function animate() {
        $('#big-titles').find('a').on('click',function(event){
            var $anchor = $(this);


            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 400,'easeInOutExpo');

            event.preventDefault();
            
        });
    });

});