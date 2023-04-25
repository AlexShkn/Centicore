const heroSlider = new Swiper('.hero-slider', {
	spaceBetween: 28,
	slidesPerView: 1,
	loop: true,
	speed: 800,

	loopAdditionalSlides: 0,
	preventInteractionOnTransition: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	//	Dotts
	pagination: {
		el: '.hero-slider__pagination',
		clickable: true,
		type: 'bullets',
		renderBullet: (index, className) => {
			return (
				'<span class="' +
				className +
				'"><svg class="circle" width="24" height="24" viewBox="0 0 60 60"><circle class="circle2" cx="34" cy="34" r="12" stroke="#27ACE2" stroke-width="8" fill="none"/><circle class="circle1" cx="34" cy="34" r="12" stroke="#0060AA" stroke-width="8" fill="none"/></svg></span>'
			)
		},
	},

	on: {
		init() {
			this.el.addEventListener('mouseenter', () => {
				this.autoplay.stop()
			})

			this.el.addEventListener('mouseleave', () => {
				this.autoplay.start()
			})
		},
	},
})

//====================================================================

//	effect: 'fade',
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 	},
// 	*/
// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 1,
// 	spaceBetween: 32,
// 	autoHeight: true,
// 	speed: 800,
// 	//touchRatio: 0,
// 	//simulateTouch: false,
// 	loop: true,
// 	//preloadImages: false,
// 	//lazy: true,
// 	// Dotts
// 	//pagination: {
// 	//	el: '.slider-quality__pagging',
// 	//	clickable: true,
// 	//},
// 	// Arrows
// 	navigation: {
// 		nextEl: '.slider-arrow_next',
// 		prevEl: '.slider-arrow_prev ',
// 	},
// 	breakpoints: {
// 		320: {
// 			// slidesPerView: 1,
// 			// spaceBetween: 0,
// 			autoHeight: true,
// 		},
// 		768: {
// 			// slidesPerView: 2,
// 			// spaceBetween: 20,
// 			autoHeight: false,
// 		},
// 		// 992: {
// 		// 	slidesPerView: 3,
// 		// 	spaceBetween: 20,
// 		// },
// 		// 1268: {
// 		// 	slidesPerView: 4,
// 		// 	spaceBetween: 30,
// 		// },
// 	},
//});

// const worksBulletStart = document.querySelector('[data-works-bullet-start]')
// const worksBulletMiddle = document.querySelector('[data-works-bullet-middle]')
// const worksBulletEnd = document.querySelector('[data-works-bullet-end]')

// const worksSlider = new Swiper('.works-slider', {
// 	observer: true,
// 	observeParents: true,
// 	spaceBetween: 28,
// 	navigation: {
// 		nextEl: '.works-slider-next',
// 		prevEl: '.works-slider-prev',
// 	},
// 	breakpoints: {
// 		320: {
// 			slidesPerView: 1,
// 		},
// 		768: {
// 			spaceBetween: 10,
// 			slidesPerView: 2,
// 		},
// 		991: {
// 			spaceBetween: 15,
// 			slidesPerView: 3,
// 		},
// 	},

// 	on: {
// 		//Если слайд последний
// 		reachEnd: () => {
// 			worksBulletEnd.classList.add('_active')
// 			worksBulletMiddle.classList.remove('_active')
// 		},
// 		//Если слайд первый
// 		reachBeginning: () => {
// 			worksBulletStart.classList.add('_active')
// 			worksBulletMiddle.classList.remove('_active')
// 		},
// 		// Если не начальная и не конечная позиция
// 		fromEdge: () => {
// 			worksBulletStart.classList.remove('_active')
// 			worksBulletEnd.classList.remove('_active')
// 			worksBulletMiddle.classList.add('_active')
// 		},
// 	},
// })
