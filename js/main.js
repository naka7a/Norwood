$(document).ready(function(){

	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$("header nav ul").toggleClass("open-menu");
	});

	// Open About
	var about = document.getElementById('about')
	var button = document.getElementById('more')
	var button2 = document.getElementById('button2')
	var openDescription = function openDescription () {
	if (about.className == 'open') {
		//expand the box
		about.className = '';
		button.innerHTML = 'more about';
	} else {
		//shrink the box
		about.className = 'open';
		button.innerHTML = 'less about';
		}
	};

	button.onclick = openDescription;
	button2.onclick = openDescription;
	// End About


	// Gallery

	$('#slider-height div').on('click', function (){

		$('#slider-height .active').removeClass('active')
		$(this).toggleClass('active')


		//figure which image to show
		var divId = $(this).attr('data-divid');

		//hide current image
		$('.slides-left .show').fadeOut(1000, function() {
			$(this).removeClass('show')
			$('#'+ divId).fadeIn(1000, function() {
			$(this).addClass('show')
			});
		});
		
	}); //End Gallery

	// Fieldset 
	var nameData = $('input[type="name"');
	var emailData = $('input[type="email"');
	var phoneData = $('input[type="telephone"');
	var textData = $('textarea');
	var sendButton = $('button[type="send"]');
	var sendButton2 = $('button[type="send2"]');

	var checkIfValid = function checkIfValid () {
		if (nameData.is(":valid") && emailData.is(":valid") && phoneData.is(":valid") && textData.is(":valid")) {
			$('fieldset button').css({
				"background-color" : "#2B542B"
			});

		} else {
			$('fieldset button').css({
				"background-color" : "#333"
			});
		}
	};

	var buttonAnimate = function buttonAnimate () {
		
    	if (nameData.is(":invalid") || emailData.is(":invalid") || phoneData.is(":invalid") || textData.is(":invalid")) {
    		nameData.addClass('invalid');
	        emailData.addClass('invalid');
	        phoneData.addClass('invalid');
	        textData.addClass('invalid');

    	} else if (nameData.is(":valid") && emailData.is(":valid") && phoneData.is(":valid") && textData.is(":valid")) {
	       nameData.val('').removeClass('invalid');
	       emailData.val('').removeClass('invalid');
	       phoneData.val('').removeClass('invalid');
	       textData.val('').removeClass('invalid');
	       $('#send').addClass('send');
			setTimeout (function(){
				$('button span').addClass('load')
				}, 700)
				setTimeout (function(){
					$('button span').removeClass('load')
				}, 2700)
				setTimeout (function(){
					$('#thick').addClass('thick')
				}, 3700)
				setTimeout (function(){
					$('#thick').removeClass('thick')
				}, 7000)
				// RETURN TO DEFAULT
				setTimeout (function(){
					$('#send').removeClass('send');
				}, 7000)	       
	   	}
	};

	$('input').keypress(checkIfValid);
	textData.keypress(checkIfValid);

	$(sendButton).click(buttonAnimate);
	$(sendButton2).click(buttonAnimate); // End Fieldset




	//SCROLL FUNCTIONS

	// define window position and scroll tracking variables
	var windowHeight, windowScrollPosTop, windowScrollPosBottom = 0;
	
	// calculate window position and scroll tracking variables
	function calcScrollValues() {
		windowHeight = $(window).height();
		windowScrollPosTop = $(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
	} // end calcScrollValues
	
	// create revealOnScroll method
	$.fn.revealOnScroll = function(direction, speed, ease) {
		return this.each(function() {
			
			var objectOffset = $(this).offset();
			var objectOffsetTop = objectOffset.top;
			
			// only hide and offset elements once
			if (!$(this).hasClass("hidden")) {
				
				// if argument is "right"
				if (direction == "normal") {
					$(this).css({
						"opacity"	: 0,
						"position"	: "relative"
					});

				} else if (direction == "pink") {
					$(this).css({
					"opacity"	: 0,
					"top"		: "-300px",
					"position"	: "relative"
					});
				} else {
					$(this).css({
					"opacity"	: 0,
					"top"		: "100px",
					"position"	: "relative"
					});
				}

				$(this).addClass("hidden");	
			} // end only hide and offset elements once logic
			
			// only reveal the element once
			if (!$(this).hasClass("animation-complete")) {
				
				// if the page has been scrolled far enough to reveal the element
				if (windowScrollPosBottom > objectOffsetTop) {
					$(this).animate({"opacity" : 1, "top" : 0}, speed, ease).addClass("animation-complete");
				} // end if the page has scrolled enough check

			} // end only reveal the element once
			
		});
	} // end revealOnScroll function


	// reveal commands
	function revealCommands() {
	/*	$("img:nth-of-type(1)").revealOnScroll("right", 800);
		$("img:nth-of-type(2)").revealOnScroll("left", 400);
		$("img:nth-of-type(3)").revealOnScroll("right", 1200);
		$("ul li:even").revealOnScroll("left", 800);
		$("ul li:odd").revealOnScroll("right", 800); */
		$(".cat").revealOnScroll("normal", 2000);
		$("#icon1").revealOnScroll("pink", 1700, "easeOutBounce");
		$("#icon2").delay(50).revealOnScroll("pink", 1700, "easeOutBounce");
		$("#icon3").delay(100).revealOnScroll("pink", 1700, "easeOutBounce");
		$("#icon4").delay(100).revealOnScroll("pink", 1700, "easeOutBounce");
		$("#icon5").delay(130).revealOnScroll("pink", 1700, "easeOutBounce");
		$('.upupup').revealOnScroll("", 1000, "swing")
	} // end reveal commands
	
	// run the following on initial page load
	calcScrollValues();
	if ($(window).width() > 480) {
    	revealCommands();
	}
	
	
	// run the following on every scroll event
	jQuery(window).scroll(function() {
		calcScrollValues()
		if ($(window).width() > 480) {
    	revealCommands();
		}
	}); // end on scroll

});

//GOOGLE MAPS
function initMap() {
    var uluru = {lat: 34.2387923, lng: -118.4947822};
    var map = new google.maps.Map(document.getElementById('map'), {
      scrollwheel:  false,
      zoom: 15,
      center: uluru,
      styles: [
	            {
	        "featureType": "administrative",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#444444"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#f2f2f2"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 45
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#e5e5e5"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    }
      ]
    });

    var newIcon = {
	path: "M31.5 0C14.1 0 0 14.1 0 31.6c0 5.2 1.3 9.9 3.5 14.2 6.6 16.9 25.4 37.7 25.4 58.7 0.8 0 4.5 0 5.2 0 0-21 18.7-41.8 25.4-58.7 2.2-4.3 3.5-9.1 3.5-14.3C62.9 14 48.8 0 31.5 0zM53.1 19.3c0.3 0.4 0.5 0.8 0.7 1.3 -0.2 0.1-0.4 0.3-0.6 0.4 -0.2 0.1-0.5 0.2-0.7 0.4 0 0-0.1 0.1-0.1 0.1 -0.5 0-1 0.2-1.5 0.2 0 0 0 0-0.1 0C51.6 20.9 52.5 20.3 53.1 19.3zM48.3 27.2c0.2-0.2 0.4-0.4 0.6-0.7 0.3-0.3 0.6-0.5 1-0.7 0.5-0.3 0.8-0.6 1.1-1 0.3-0.4 0.8-0.7 1.2-1 0.1-0.1 0.3-0.2 0.5-0.2 -0.2 0.5-0.4 1-0.7 1.3 -0.2 0.2-0.3 0.5-0.4 0.8 -0.1 0.3-0.3 0.5-0.5 0.7 -0.1 0.1-0.3 0.2-0.4 0.3 -0.3 0.2-0.5 0.3-0.9 0.4 -0.6 0.1-1.2 0.4-1.7 0.7 -0.1 0.1-0.3 0.1-0.4 0.2C47.8 27.8 48.1 27.5 48.3 27.2zM46.9 25.1c0-0.1 0.1-0.1 0.1-0.1 0.5-0.3 0.9-0.6 1.3-1.1 0.2-0.3 0.5-0.5 0.8-0.7 0.1-0.1 0.3-0.2 0.5-0.2 0.5 0 0.8-0.2 1.3-0.3 0.1 0 0.3-0.1 0.5-0.1 -0.4 0.4-0.7 0.7-1.1 1 -0.2 0.1-0.4 0-0.6 0.2 0 0 0 0-0.1 0 -0.5 0.5-1.1 0.5-1.6 1 0 0-0.1 0-0.1 0C47.7 24.9 47.3 25 46.9 25.1zM14.2 48.8c-0.1 0-0.2-0.2-0.3-0.2 -2.8-2.9-4.9-6.2-6.1-10.1 -0.5-1.7-0.9-3.5-1-5.3 -0.4-5.9 1-11.3 4.4-16.2 3.8-5.3 8.9-8.7 15.3-10 2-0.4 4.1-0.6 6.1-0.4 5.4 0.3 10.2 2.1 14.4 5.6 1.7 1.4 3.1 2.9 4.4 4.7 0.1 0.2 0.1 0.3 0 0.4 -0.4 0.7-1.1 1.1-1.6 1.6 -0.5 0.4-1 0.9-1.3 1.4 -0.1 0.1-0.2 0.2-0.3 0.3 -0.7 0.5-1.3 1.1-1.9 1.7 -0.1 0.1-0.1 0.2-0.2 0.2 -0.2 0-0.2-0.1-0.2-0.2 -0.4-0.7-0.8-1.3-1.3-1.9 -0.3-0.3-0.4-0.6-0.3-1 0.2-1 0.2-2.1-0.4-3 -0.5-0.8-1.3-1.2-2.2-1.4 -0.5-0.1-0.9-0.1-1.4-0.1 -0.6-0.1-1.1-0.4-1.6-0.6 -1.5-0.6-2.9-1.1-4.5-1.4 -1.4-0.3-2.9-0.5-4.4-0.5 -2 0-4.1 0-6 0.6 -0.8 0.2-1.6 0.5-2.4 1 -0.2 0.1-0.4 0.3-0.4 0.6 0 0.2-0.1 0.5 0 0.7 0 0.1-0.1 0.2-0.2 0.3 -0.9 0.7-0.8 0.9-0.8 1.6 0 0.4 0.1 0.8 0 1.2 0 0.4 0.1 0.8-0.2 1.2 -1.1 1.7-2 3.5-2.7 5.5 -0.3 0.6-0.4 1.3-0.5 2 0 0.1-0.1 0.3 0 0.5 0.1 0.2 0.2 0.3 0.5 0.3 0.4-0.1 0.8-0.2 1.2-0.4 0.5-0.2 1-0.3 1.5-0.5 0.7-0.2 1.2-0.5 1.6-1.2 0.2-0.3 0.5-0.6 0.8-0.9 0.3-0.3 0.6-0.2 0.7 0.1 0.3 0.9 0.3 1.9 0 2.8 -0.1 0.4-0.4 0.7-0.8 0.9 -1.5 0.9-2.8 1.8-4.2 2.8 -0.8 0.6-1.5 1.4-2.1 2.2 -0.7 1-1.4 2-1.8 3.1 -0.5 1.3-0.7 2.7-0.7 4.1 0.1 1.4 0.5 2.7 0.9 4 0.1 0.2 0.1 0.4 0.2 0.6 0.1 0.3 0.1 0.5 0 0.7 -0.4 0.6-0.3 1.2-0.1 1.7 0.1 0.2 0.1 0.3 0.2 0.5C14.5 48.5 14.4 48.6 14.2 48.8zM29.7 40.6c0-0.1 0.1-0.1 0.1-0.1 0.5-0.4 1.1-0.6 1.6-0.9 -0.3 0.7-0.6 1.4-1.4 1.7 -0.8 0.3-1.4 1-1.9 1.7 -0.2 0.3-0.4 0.6-0.7 0.8 -0.4 0.3-0.7 0.6-1 1 -0.2 0.2-0.4 0.3-0.6 0.5 -0.2 0.1-0.4 0.2-0.7 0.2 -0.4-0.1-0.8 0.1-1.2 0.1 -0.1 0-0.2 0-0.3 0 0.2-0.2 0.4-0.3 0.6-0.5 0.5-0.4 1-0.9 1.5-1.2 0.2-0.1 0.4-0.3 0.5-0.5 0.3-0.5 0.8-0.7 1.3-1 0.3-0.2 0.6-0.4 0.8-0.5 0.1-0.1 0.3-0.2 0.3-0.4 0 0 0.1-0.1 0.1-0.1 0.2-0.2 0.4-0.3 0.6-0.5C29.7 40.8 29.8 40.7 29.7 40.6zM26.4 33.9c-0.6 0.6-0.7 1.3-0.5 2 0.1 0.3 0 0.5-0.2 0.8 -0.2 0.3-0.4 0.6-0.6 0.9 -0.2 0.4-0.2 0.8-0.1 1.2 0.2 0.8 0.4 1.6 0.8 2.4 -0.3 0.3-0.7 0.6-1 0.8 -0.1 0-0.1 0.1-0.2 0.1 -0.2 0.2-0.2 0.3-0.5 0 -0.4-0.5-0.8-1-1.1-1.6 -0.4-0.8-0.8-1.6-1-2.5 -0.3-1-0.4-2.1-0.2-3.2 0-0.1 0.1-0.2 0.1-0.3 0.7-1.2 1.5-2.2 2.8-2.9 0.4-0.2 0.8-0.4 1.2-0.7 0.3-0.2 0.7-0.2 1-0.2 0.6 0 1.2-0.1 1.7-0.3 1-0.6 2-1.3 2.5-2.4 0.1-0.2 0.2-0.5 0.3-0.8 0.1-0.2 0.2-0.3 0.4-0.3 0.1 0.2 0.1 0.5 0.1 0.7 -0.1 0.8-0.3 1.6-0.8 2.3 0 0.1-0.1 0.2 0 0.3 0.2 0 0.4 0 0.6-0.1 0.8-0.3 1.1-1 1.4-1.7 0.4-1.1 0.4-2.3-0.1-3.4 -0.2-0.5-0.5-0.9-0.8-1.3 0.2-0.1 0.4 0 0.5 0.1 0.6 0.4 1.1 0.9 1.4 1.5 0.6 0.9 1 2 1.2 3.1 0 0 0 0 0 0.1 0.1 0.2 0 0.5 0.3 0.5 0.2 0 0.4-0.2 0.4-0.4 0.2-0.5 0.2-1 0.2-1.6 -0.2-1.7-1.1-3.1-2.2-4.3 -0.6-0.7-1.3-1.2-2.1-1.7 -0.1 0-0.2-0.1-0.2-0.2 0.1-0.2 0.2-0.2 0.4-0.2 0.3 0.1 0.6 0.2 0.8 0.4 1 0.6 1.9 1.4 2.7 2.3 0.5 0.5 0.9 0.9 1.3 1.5 0.1 0.2 0.2 0.4 0.4 0.5 0.1 0.1 0.2 0.1 0.3 0 0.1-0.1 0.1-0.2 0.1-0.3 0-0.5-0.1-1.1-0.3-1.5 -0.8-1.5-2-2.8-3.4-3.8 -0.6-0.4-1.1-0.9-1.8-1.2 -0.7-0.4-1.4-0.7-2.2-0.8 -0.3-0.1-0.6-0.1-1-0.2 -0.4-0.1-0.6-0.4-0.8-0.7 -0.4-0.7-0.7-1.4-1.2-2.1 1.5-0.1 2.9-0.1 4.4 0.1 -0.1 0.1-0.2 0.1-0.3 0.2 -0.5 0.3-0.8 0.7-1 1.2 -0.1 0.3 0 0.4 0.2 0.4 0.9 0.2 1.7 0.6 2.5 1 0.4 0.2 0.7 0.3 1.1 0 0.4-0.3 0.6-0.7 0.5-1.3 -0.2-0.6-0.5-1.2-1.1-1.5 -0.1-0.1-0.2-0.1-0.1-0.3 0.4 0 0.8 0.1 1.1 0.4 0.1 0.1 0.1 0.1 0.2 0.2 0.2 0.5 0.7 0.6 1.1 0.7 0.6 0.2 1.1 0.4 1.7 0.6 0 0.1-0.1 0.1-0.2 0.2 -0.3 0.2-0.5 0.4-0.7 0.7 -0.2 0.2-0.1 0.4 0 0.6 0.2 0.2 0.4 0.2 0.6 0.1 0.9-0.5 1.8-0.6 2.7-0.2 0.5 0.2 0.7 0.6 0.8 1.1 0.1 0.6-0.2 0.8-0.8 1 -0.6 0.1-1.1 0-1.7-0.1 -0.3-0.1-0.5 0-0.8 0.1 -0.2 0.1-0.2 0.2-0.3 0.3 0 0.2 0.1 0.4 0.3 0.5 1 0.5 1.9 1 2.9 1.4 1.3 0.4 2 1.4 2.6 2.5 0.1 0.2 0.1 0.3 0 0.5 -0.2 0.3-0.4 0.5-0.7 0.8 -0.9 0.8-1.7 1.7-2.6 2.4 -0.5 0.4-0.9 0.8-1.4 1.2 -0.3 0.2-0.6 0.4-1 0.4 -2.1 0.1-4.1 0.5-6.1 1.2 -1.6 0.6-3.2 1.3-4.4 2.6C26.7 33.6 26.5 33.7 26.4 33.9zM19.8 44c-0.2 0-0.3-0.1-0.2-0.4 0.2-0.6 1.2-1 1.7-0.4 0.5 0.5 0.8 1.1 0.6 1.9 0 0.2-0.2 0.5-0.4 0.6 -0.1-0.1-0.1-0.2-0.2-0.3C21.3 44.5 20.7 44 19.8 44zM20 46.2c0 0.4-0.1 0.7-0.2 1.1 0 0.1-0.1 0.2-0.3 0.2 -0.2 0-0.2-0.1-0.2-0.2 -0.1-0.4-0.3-0.6-0.6-0.9 -0.2-0.2-0.4-0.4-0.5-0.6 -0.1-0.3 0-0.7 0.2-1 0.2-0.2 0.6-0.3 0.9-0.1 0.2 0.1 0.2 0.2 0.3 0.4C19.9 45.3 20 45.8 20 46.2zM19.3 25.2c0.3-1 0.7-1.9 1.1-2.8 0.3-0.6 0.6-1.2 0.9-1.7 0.3-0.5 0.7-0.7 1.3-0.6 0.3 0 0.6 0 0.9 0.2 0.1 0 0.1 0 0.1 0.1 0 0.1 0 0.1-0.1 0.2 -1.1 1.4-2.1 2.9-3 4.4 -0.2 0.3-0.4 0.5-0.7 0.6 -0.1 0-0.1 0.1-0.2 0.1 -0.1 0-0.2 0.1-0.3 0.1C19.1 25.6 19.2 25.3 19.3 25.2zM18.3 25.4c-0.1 0.3-0.2 0.7-0.2 1 -0.2 0.1-0.3 0.2-0.6 0.2 0.4-1.5 0.9-2.8 1.8-4.1 0.1 0.2 0 0.2 0 0.3C18.8 23.7 18.5 24.5 18.3 25.4zM16.4 53.4c-0.1 0.1-0.1 0-0.2 0.1 0 0.3-0.1 0.6-0.1 0.9 -0.2-0.1-0.2-0.2-0.3-0.4 0-0.2-0.1-0.4-0.3-0.6 -0.1-0.1-0.2-0.3-0.2-0.5 0-0.1 0-0.1 0.1-0.1 0.2 0 0.4-0.1 0.5 0 0.2 0.1 0.3 0.3 0.5 0.4C16.4 53.2 16.4 53.3 16.4 53.4zM16.2 45.5c-0.3-0.3-0.1-1 0.3-1.4 -0.3-1-0.6-2.1 0.3-3.1 0 0.7 0.1 1.3 0.9 1.6 0.5-0.3 0.9-0.7 1.5-0.6 0.1 0 0.1 0 0.2 0.2 -0.4 0.3-0.9 0.5-1 1 -0.6 0-1 0.3-1.1 0.8 -0.1 0.4-0.3 0.6-0.6 0.8 -0.1 0.1-0.2 0.2-0.3 0.4C16.3 45.4 16.3 45.5 16.2 45.5zM17.2 46.1c0.3-0.2 0.5-0.1 0.7 0.2 0.1 0.3 0 0.6-0.1 0.9 -0.1 0.4-0.2 0.7-0.2 1.1 0 0 0 0 0 0.1 0 0.1 0 0.3-0.1 0.3 -0.2 0.1-0.2-0.1-0.3-0.2 -0.3-0.5-0.5-0.9-0.5-1.4C16.6 46.8 16.8 46.4 17.2 46.1zM17.3 51.1c-0.1-0.1-0.1 0-0.2 0 0.3-0.5 0.7-0.8 1.2-0.9 0 0.2 0 0.3-0.1 0.4 -0.2 0.1-0.3 0.4-0.5 0.5C17.5 51.1 17.4 51.2 17.3 51.1zM22.6 50.9c-0.4 0.2-0.9 0.4-1.3 0.6 -0.5 0.2-1 0.4-1.4 0.6 -0.6 0.3-1.2 0.6-1.8 0.9 -0.2 0.1-0.3 0-0.5-0.1 0.2-0.2 0.4-0.4 0.7-0.6 0.5-0.4 1-0.8 1.5-1.3 0.2-0.2 0.3-0.3 0.6-0.3 0.4-0.1 0.8-0.1 1.2-0.1 0.5 0.1 0.9 0 1.4-0.1C22.8 50.7 22.7 50.8 22.6 50.9zM23.1 49.2c-0.5 0-1.1 0.1-1.6 0.1 0 0-0.1 0-0.1 0 0.2-0.2 0.4-0.3 0.5-0.5 0.5-0.7 1.2-0.9 1.9-1.1 0.6-0.1 1.1-0.4 1.6-0.7 0.2-0.1 0.4-0.1 0.5 0.1 -0.3 0.5-0.5 0.9-1.1 1.1 -0.5 0.1-0.9 0.4-1.2 0.7C23.5 49.1 23.3 49.2 23.1 49.2zM29.1 48.2c-0.3 0.3-0.6 0.7-0.9 1.1 -0.4 0.5-0.9 0.9-1.5 1.2 -0.8 0.4-1.5 0.9-2.4 1.1 0.5-0.5 0.8-1.2 1.6-1.4 0.2 0 0.3-0.2 0.4-0.4 0.4-0.7 1.1-1 1.7-1.5 0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.4-0.1 0.5-0.3 0.1-0.1 0.2-0.1 0.3 0C29.2 48 29.2 48.1 29.1 48.2zM28.3 45.4c0 0-0.1 0.1-0.2 0 0.2-0.4 0.3-1 0.7-1.2 0.7-0.4 1.1-1 1.6-1.6 0.4-0.4 0.8-0.8 1.3-1 0.3-0.2 0.6-0.4 0.7-0.7 0.1-0.2 0.2-0.4 0.3-0.6 0.1-0.1 0.1-0.2 0.2-0.2 0.2 0.1 0.4 0.3 0.5 0.5 0.1 0.1 0.1 0.2-0.1 0.3 -0.5 0.1-0.8 0.5-1 0.9 -0.2 0.5-0.5 0.9-0.6 1.5 0 0.1-0.2 0.1-0.3 0.2 -0.8 0.3-1.5 0.7-2.1 1.2C29.1 44.8 28.7 45.1 28.3 45.4zM29.8 46.3c0.1-0.2 0.2-0.4 0.4-0.5 0.2-0.1 0.3-0.2 0.5-0.3 0-0.1-0.1-0.1-0.1-0.2 0.1-0.1 0.2-0.3 0.3-0.3 0.5-0.2 1.1-0.5 1.6-0.6 0.3-0.1 0.6-0.1 0.8 0.1 0 0.1-0.2 0.2-0.3 0.2 -0.5 0.2-1 0.5-1.5 0.6 -0.1 0-0.2 0.2-0.2 0.3 -0.1 0.4-0.4 0.4-0.7 0.5C30.4 46.2 30.1 46.3 29.8 46.3zM38.9 52.2c-0.2 1.1-0.9 1.9-1.9 2.5 -0.7 0.4-1.4 0.6-2.1 0.8 -0.8 0.2-1.6 0.2-2.4 0.3 -0.5 0-0.9-0.2-1.2-0.6 -0.2-0.3-0.2-0.6-0.2-0.9 0-0.2 0.1-0.2 0.2-0.3 0.3-0.2 0.6-0.5 0.9-0.8 0.3-0.3 0.7-0.6 1.1-0.8 0.4-0.2 0.7-0.6 1-0.8 0.7-0.5 1.3-1 2-1.4 0.6-0.4 1.3-0.9 1.7-1.5 0 0 0.1-0.1 0.1-0.1 0.1-0.1 0.2-0.2 0.3-0.2 0.3 0.4 0.4 0.9 0.4 1.4C39.1 50.5 39.1 51.3 38.9 52.2zM33.8 43.1c0.2-0.5 0.4-0.9 0.8-1.2 0.3-0.2 0.8-0.2 1 0.1 0.2 0.2 0.3 0.3 0.5 0.5C35.3 42.9 34.6 43.2 33.8 43.1zM45 40.3c-0.1 0-0.1 0-0.1 0 -1-1-2.1-1.7-3.4-2.3 -0.7-0.3-1.4-0.5-2.1-0.7 -0.1 0-0.3 0-0.4 0 -0.1 0-0.3 0.1-0.3 0.2 -0.1 0.2 0 0.3 0.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2 0.9 0.5 1.8 1.1 2.6 1.7 1.2 0.9 2 2 2.6 3.3 0.1 0.3 0.3 0.6 0.4 0.9 0 0.1 0.1 0.2 0 0.3 -0.2-0.3-0.4-0.5-0.6-0.8 -0.9-1.2-2.1-2.1-3.4-2.7 -0.2-0.1-0.4-0.2-0.6-0.2 -0.1 0-0.2 0-0.3 0.1 -0.1 0.1 0 0.2 0.1 0.3 0.6 0.7 1.1 1.5 1.5 2.3 0.5 1 0.8 2.1 1.1 3.3 0.1 0.6 0.2 1.1 0.2 1.7 0 0 0 0.1 0 0.2 -0.1-0.1-0.2-0.2-0.2-0.3 -0.7-1.8-1.6-3.4-2.7-5 -0.7-1-1.4-2.1-2.3-3 -1.2-1.3-2.5-2.3-4.2-2.9 -0.5-0.2-1-0.2-1.5-0.2 -0.7 0.1-1.3 0.2-1.9 0.4 -0.3 0.1-0.6 0.4-0.8 0.6 -0.3 0.3-0.6 0.6-0.8 1 0 0.1-0.1 0.2-0.3 0.2 -0.1 0-0.2-0.1-0.2-0.2 -0.2-0.8-0.3-1.6 0.3-2.2 0.2-0.2 0.3-0.4 0.5-0.6 0.1-0.1 0.1-0.1 0.1-0.2 0-0.2 0.1-0.4 0.1-0.6 0-0.4 0.2-0.7 0.5-1 1.1-0.8 2.3-1.4 3.6-1.8 2.3-0.7 4.6-0.7 6.9 0.1 1 0.3 1.9 0.7 2.7 1.4 0.6 0.5 1.2 1 1.6 1.6 0.1 0.1 0.2 0.3 0.1 0.4 -0.1 0.1-0.3 0-0.4-0.1 -1.3-0.9-2.6-1.5-4.1-1.9 -0.6-0.2-1.1-0.2-1.7-0.1 -0.2 0-0.3 0.1-0.4 0.3 1.1 0.2 2.1 0.8 3 1.5 1.4 1 2.8 2 4 3.3 0.2 0.3 0.4 0.6 0.6 0.9C45 40.1 45.1 40.2 45 40.3zM45.8 30.1c-0.3 0.5-0.7 0.9-1.1 1.3 -0.4-0.1-0.6-0.4-0.9-0.5 0.7-0.4 1.4-0.7 2-1.2C45.9 29.8 45.9 30 45.8 30.1zM46.1 27.9c-0.8 0.6-1.6 1.4-2.7 1.4 1.1-1.1 2.3-2.2 3.7-2.8C46.8 27 46.6 27.6 46.1 27.9zM49.8 31.1c-0.1 0.2-0.3 0.3-0.5 0.4 -0.6 0.3-1 0.7-1.4 1.1 -0.2 0.2-0.3 0.2-0.6 0.1 -0.1-0.1-0.3-0.2-0.4-0.2 -0.1 0-0.2-0.1-0.2-0.2 0.1-0.1 3-1.3 3.1-1.4C50 30.9 49.9 31 49.8 31.1zM46.8 30.8c0.3-0.6 0.7-1 1.3-1.3 1-0.4 2-0.7 2.9-1.3 0.1-0.1 0.2-0.1 0.3 0C51.1 28.7 47.8 30.6 46.8 30.8zM54 41c-0.7-1.6-1.8-2.9-2.9-4.3 0.4-0.2 0.6-0.6 0.9-0.9 0.6-0.6 1.3-1.2 1.9-1.8 0.7-0.6 1.3-1.3 1.9-2 0.1-0.1 0.2-0.2 0.3-0.2C56.4 33.1 55 39.7 54 41z",
	fillColor: '#1A1A1A',
	fillOpacity: 1,
	scale: 1,
	strokeColor: 'white',
	strokeWeight: 0
};

    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: newIcon,
      title: 'NORWOOD'
    });
  }

