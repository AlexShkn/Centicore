document.addEventListener('DOMContentLoaded', () => {
	let partnersSlider

	function sliderInit() {
		partnersSlider = new Swiper('.partners-slider', {
			spaceBetween: 89,
			slidesPerView: 6,

			// Arrows
			navigation: {
				nextEl: '.partners-slider-next',
				prevEl: '.partners-slider-prev',
			},
			breakpoints: {
				480: {
					slidesPerView: 3,
					spaceBetween: 23,
				},
				550: {
					slidesPerView: 4,
					spaceBetween: 23,
				},
				640: {
					slidesPerView: 5,
					spaceBetween: 23,
				},
				768: {
					slidesPerView: 5,
					spaceBetween: 35,
				},

				1280: {
					slidesPerView: 6,
					spaceBetween: 73,
				},
				1920: {
					slidesPerView: 6,
					spaceBetween: 89,
				},
			},
		})
	}
	if (window.innerWidth > 479.98) {
		sliderInit()
	}

	window.addEventListener('resize', () => {
		if (window.innerWidth < 480 && partnersSlider) {
			partnersSlider.destroy()
			partnersSlider = null
		} else if (window.innerWidth > 480 && !partnersSlider) {
			sliderInit()
		}
	})
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
