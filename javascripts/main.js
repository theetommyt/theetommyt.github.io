$(document).ready(function(){


  $('.parallax').parallax();

  $(".button-collapse").sideNav();

  $('.modal-trigger').leanModal();



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


///////     jQuery Animations     ///////

$('.artwork').fadeIn(4000);


////////     jQuery Carousel      ///////

$('.carousel').slick({
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  centerMode: true,
  variableWidth: true,
  focusOnSelect: true,
  mobileFirst: true,
  initialSlide: 0
});


});
