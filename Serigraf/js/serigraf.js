$(document).ready(function () {
	$('.demo').slick({
		// Enables tabbing and arrow key navigation
		accessibility: true,

		adaptiveHeight: false,

		// Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
		appendArrows: $(element),

		// Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
		appendDots: $(element),

		// Enable Next/Prev arrows
		arrows: true,

		asNavFor: null,

		// prev arrow
		prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',

		// next arrow
		nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',

		// Enables auto play of slides
		autoplay: false,

		// Auto play change interval
		autoplaySpeed: 3000,

		// Enables centered view with partial prev/next slides. 
		// Use with odd numbered slidesToShow counts.
		centerMode: false,

		// Side padding when in center mode. (px or %)
		centerPadding: '50px',

		// CSS3 easing
		cssEase: 'ease',

		// Custom paging templates. 
		customPaging: function (slider, i) {
			return '<button type="button" data-role="none">' + (i + 1) + '</button>';
		},

		// Current slide indicator dots
		dots: false,

		// Class for slide indicator dots container
		dotsClass: 'slick-dots',

		// Enables desktop dragging
		draggable: true,

		// animate() fallback easing
		easing: 'linear',

		// Enables fade
		fade: false,
		focusOnSelect: false,

		// Infinite looping
		infinite: true,

		// Accepts 'ondemand' or 'progressive' for lazy load technique
		lazyLoad: 'ondemand',

		// Before slide change callback
		onBeforeChange: null,

		// After slide change callback
		onAfterChange: null,

		// When Slick initializes for the first time callback
		onInit: null,

		// Every time Slick (re-)initializes callback
		onReInit: null,

		// Pauses autoplay on hover
		pauseOnHover: true,

		// Pauses autoplay when a dot is hovered
		pauseOnDotsHover: false,

		// Breakpoint triggered settings
		responsive: null,

		// Change the slider's direction to become right-to-left
		rtl: false,

		// Slide element query
		slide: 'div',

		// # of slides to show at a time
		slidesToShow: 1,

		// # of slides to scroll at a time
		slidesTo < a href = "http://www.jqueryscript.net/tags.php?/Scroll/" > Scroll < /a>: 1,

/ / Transition speed
		speed: 300,

		// Enables touch swipe
		swipe: true,

		// Swipe to slide irrespective of slidesToScroll
		swipeToSlide: false,

		// Enables slide moving with touch
		touchMove: true,

		// To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider.
		touchThreshold: 5,

		// Enable/Disable CSS Transitions
		useCSS: true,

		// Disables automatic slide width calculation
		variableWidth: false,

		// Vertical slide direction
		vertical: false,

		// Ignores requests to advance the slide while animating
		waitForAnimate: true
	});
});