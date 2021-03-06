$(function () {

	$('.header-menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
		$(this).toggleClass('menu-btn__active');
    });

	$('.header__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		prevArrow: '<button class="slider-btn slider-btn__left"><svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.5C18 4.22386 17.7761 4 17.5 4L1.5 4C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5L17.5 5C17.7761 5 18 4.77614 18 4.5Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.35355 0.646447C5.15829 0.451184 4.84171 0.451184 4.64645 0.646447L0.792894 4.5L4.64645 8.35355C4.84171 8.54882 5.15829 8.54882 5.35355 8.35355C5.54882 8.15829 5.54882 7.84171 5.35355 7.64645L2.20711 4.5L5.35355 1.35355C5.54882 1.15829 5.54882 0.841709 5.35355 0.646447Z"fill="#333333"/></svg></button>',
		nextArrow: '<button class="slider-btn slider-btn__right"><svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.935303 4.5C0.935303 4.22386 1.15916 4 1.4353 4L17.4353 4C17.7114 4 17.9353 4.22386 17.9353 4.5C17.9353 4.77614 17.7114 5 17.4353 5L1.4353 5C1.15916 5 0.935303 4.77614 0.935303 4.5Z" fill="#333333"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5817 0.646447C13.777 0.451184 14.0936 0.451184 14.2889 0.646447L18.1424 4.5L14.2889 8.35355C14.0936 8.54882 13.777 8.54882 13.5817 8.35355C13.3865 8.15829 13.3865 7.84171 13.5817 7.64645L16.7282 4.5L13.5817 1.35355C13.3865 1.15829 13.3865 0.841709 13.5817 0.646447Z"fill="#333333"/></svg></button>',
		responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: false,
                }
            },
        ]
	});

	$('.gallery__items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		}
	});

	$('.contact-page__btn').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	new WOW().init();

});