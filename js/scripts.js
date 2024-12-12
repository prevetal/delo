WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// History slider
	const historySliders = [],
		history = document.querySelectorAll('.history .swiper')

	history.forEach((el, i) => {
		el.classList.add('history_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			}
		}

		historySliders.push(new Swiper('.history_s' + i, options))
	})



	// Boss slider
	const bossSliders = [],
		boss = document.querySelectorAll('.boss .swiper')

	boss.forEach((el, i) => {
		el.classList.add('boss_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			spaceBetween: 20,
			slidesPerView: 1
		}

		bossSliders.push(new Swiper('.boss_s' + i, options))
	})


	// Clients slider
	const clientsSliders = [],
		clients = document.querySelectorAll('.clients .swiper')

	clients.forEach((el, i) => {
		el.classList.add('clients_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: -30,
					slidesPerView: 'auto'
				},
				1024: {
					spaceBetween: -24,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: -32,
					slidesPerView: 5
				},
				1440: {
					spaceBetween: -40,
					slidesPerView: 5
				}
			}
		}

		clientsSliders.push(new Swiper('.clients_s' + i, options))
	})


	// Photo gallery slider
	const photoGallerySliders = [],
		photoGallery = document.querySelectorAll('.photo_gallery .swiper.big')

	photoGallery.forEach((el, i) => {
		el.classList.add('photo_gallery_s' + i)

		let options = {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1,
			allowTouchMove: false
		}

		photoGallerySliders.push(new Swiper('.photo_gallery_s' + i, options))
	})


	const photoGalleryThumbsSliders = [],
		photoGalleryThumbs = document.querySelectorAll('.photo_gallery .thumbs .swiper')

	photoGalleryThumbs.forEach((el, i) => {
		el.classList.add('photo_gallery_thumbs_s' + i)

		let options = {
			loop: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			controller: {
				control: photoGallerySliders[i]
			},
			breakpoints: {
				0: {
					speed: 500
				},
				768: {
					speed: 750
				},
				1440: {
					speed: 1000
				}
			}
		}

		photoGalleryThumbsSliders.push(new Swiper('.photo_gallery_thumbs_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('header').fadeIn(300)
			: $('header').fadeOut(200)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Services
	$('.services .service .head .spoler_btn').click(function(e) {
		e.preventDefault()

		let service = $(this).closest('.service')

		$(this).toggleClass('active')
		service.find('.head').toggleClass('active')

		service.find('.data').slideToggle(300)
	})


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})