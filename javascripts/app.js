$(document).ready(function(){

  $('.parallax').parallax();

  $(".button-collapse").sideNav();


///////     Smooth Scroll     ///////

  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 60
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
