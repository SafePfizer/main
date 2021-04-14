(function($) {


"use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
    
    
	
	var ssMain = function() {

		$(document).on('click', 'a[href=""], a[href^="#"]', function (e) {
		    e.preventDefault();
		});

		$('.hamburger-icon').click (function(){
            $(this).toggleClass('open');
            $('header nav').slideToggle();
        });

		$(".scrollTo").on('click', function(e) {
		     e.preventDefault();
		     var target = $(this).attr('href');
		     $('html, body').animate({
		       scrollTop: ($(target).offset().top - 60)
		     }, 500);
		});
		
		

	};
	
	
	



/* Preloader
    * -------------------------------------------------- */
    var ssPreloader = function() {
        
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        
        });
    };



/* initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        
        ssPreloader();
        ssMain();

    })();


})(jQuery);