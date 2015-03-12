head.ready(function() {
	$(".js-drop-toggle").on("click", function(){
		$(this).parents(".js-drop").toggleClass("is-active").find(".js-drop-list").slideToggle(200);
	});
	$(".js-nav-toggle").on("click", function(){
		$("html").toggleClass("has-open-nav");
		$(this).toggleClass("is-active");
		$(".js-nav").toggleClass("is-active");
	});

	$(".js-slider").slick({
		fade: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		speed: 300,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
		    {
		      breakpoint: 960,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
		]
	});
	$(".js-slider-prev").on("click", function(){
		$(this).parent().prev().slick('slickPrev');
		return false;
	});
	$(".js-slider-next").on("click", function(){
		$(this).parent().prev().slick('slickNext');
		return false;
	});

});