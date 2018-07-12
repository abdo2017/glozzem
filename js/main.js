jQuery(document).ready(function($) {
	// init carousel
$('.carousel').carousel();

$(".video").click(function(event) {
	event.preventDefault();
});

	
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

// slick init 
$(".slider").slick({
	infinite:true,
	slideToShow:1,
	slideToScroll:1
});








});
