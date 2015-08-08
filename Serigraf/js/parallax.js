$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.inicio').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	});
    	return false;
	});
    
    $('a.noticias').click(function(){
    	$('html, body').animate({
    		scrollTop:1500
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.produtos').click(function(){
    	$('html, body').animate({
    		scrollTop:3000
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.portfolio').click(function(){
    	$('html, body').animate({
    		scrollTop:4600
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
	
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#content').css('left',(0-(scrolled*.9))+'px');
	$('#parallax-bg1').css('left',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('left',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('left',(0-(scrolled*.9))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
//	var section1Top =  0;
//	// The top of each section is offset by half the distance to the previous section.
//	var section2Top =  $('#noticias').offset().left + 1000;
//	var section3Top =  $('#produtos').offset().left +3000;
//	var section4Top =  $('#portfolio').offset().left +4000;
//	$('nav#primary a').removeClass('active');
//	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
//		$('nav#primary a.inicio').addClass('active');
//	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
//		$('nav#primary a.noticias').addClass('active');
//	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
//		$('nav#primary a.produtos').addClass('active');
//	} else if ($(document).scrollTop() >= section4Top){
//		$('nav#primary a.portfolio').addClass('active');
//	}
	
}
