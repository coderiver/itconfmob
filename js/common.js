head.ready(function() {
	$(document).click(function(){
		$(".js-drop-list").slideUp(200);
		$(".js-drop").removeClass("is-active");
		$(".js-select").removeClass("is-active");
		$(".js-select-drop").fadeOut(300);
	});

	var sectionHeight = $(".js-full-section").outerHeight();

	function scrollSection (argument) {
		var heightTarget = sectionHeight - $(".header").outerHeight();
		if ($("body").scrollTop() > heightTarget) {
			$(".header").removeClass("header_no-bg");
		}
		else {
			$(".header").addClass("header_no-bg");
		}
	}
	scrollSection();
	$(window).scroll(function () {
		scrollSection();
	});

	$(".js-drop-toggle").on("click", function(event){
		$(this).parents(".js-drop").toggleClass("is-active").find(".js-drop-list").slideToggle(200);
		event.stopPropagation();
	});
	$(".js-nav-toggle").on("click", function(){
		$("html").toggleClass("no-scroll");
		$(this).toggleClass("is-active");
		$(".js-nav").toggleClass("is-visible");
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
		//autoplay: true,
		//autoplaySpeed: 5000,
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

	$(".js-select").on("click", function(event){
		$(this).toggleClass("is-active").find(".js-select-drop").fadeToggle(300);
		event.stopPropagation();
	});

	$(".js-select-drop a").on("click", function(event){
		var html = $(this).html();
		var index = $(this).parent().index();
		$(this).parents(".js-select").removeClass("is-active").find(".js-select-drop").fadeToggle(300)
		$(this).parents(".js-select").find(".js-select-active").html(html);
		$(this).parents(".js-select").next().children().addClass("is-hidden");
		$(this).parents(".js-select").next().children().eq(index).removeClass("is-hidden");
		event.stopPropagation();
		return false;
	});

	$("body").on("click",".js-popup-toggle", function(){
		var popup = $(this).attr("data-popup");
		$("."+popup).addClass("is-visible");
		$("html").addClass("no-scroll");
		return false;
	});

	$(".js-popup-close").on("click", function(){
		$(".js-popup").removeClass("is-visible");
		$("html").removeClass("no-scroll");
		return false;
	});

	$("body").on("click",".js-remove-slider", function(){
		$(this).parent().hide().prev().slick("unslick");
		return false;
	});

});