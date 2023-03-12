$(document).ready(function(){


    //hambtn
    $('.hambtn').click(function (e) { 
        $( this ).toggleClass('bx-x');
        $( '.navbar' ).toggleClass('nav-toggle animate__animated animate__fadeIn');
    });

    //btn anime
    $('.footer-link, .btn, .navbar li, .work-pic, .animpic-block').hover(function (e) { 
        $( this ).toggleClass('animate__animated animate__pulse');
    });

    //magnific-popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

    // var videosrc = $("#video").attr("src");
    // var video_appendJq = "?autoplay=1" + "&enablejsapi=1" + "&modestbranding=1" + "&rel=0";
    // $(".open-btn").click(function(e) {
    //     $(".video-box").fadeIn(400);
    //     $( this ).fadeOut(400);
    //     $("#video")[0].src += video_appendJq;
    // });
    // $(".close-btn").click(function(e) {
    //     $("#video")[0].src = videosrc;
    //     $(".video-box").fadeOut(400);
    //     $(".open-btn").fadeIn(400);
    // });


});

