
$(document).ready(function(){



	var waypoints = $('.header').waypoint({
		handler: function(direction) {
			$('.header').addClass('slider');
		}
	});

	$("#portfolio-contant-active").mixItUp();

	$("#action").owlCarousel({
	    paginationSpeed : 500,
		loop:true,
	    singleItem:true,
	    autoPlay: 3000,
	});

	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

		$("#header-menu").hide();

		$("#btn-menu").click(function () {
			var headerMenu = $("#header-menu");
			var siteNav = $("#site-nav");
			headerMenu.fadeIn();
			siteNav.fadeIn(300)
		});

	$("#btn-close").click(function () {
		var headerMenu = $("#header-menu");
		var siteNav = $("#site-nav");
        headerMenu.fadeOut();
        siteNav.fadeOut()

	});
});
window.sr = new ScrollReveal();

sr.reveal(".about-us",{delay: 250});



