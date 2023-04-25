document.addEventListener('DOMContentLoaded', () => {
	const onScrollHeader = () => {
		const header = document.querySelector('.header')
		const headerContainer = document.querySelector('.header__container')

		let prevScroll = window.pageYOffset
		let currentScroll

		window.addEventListener('scroll', () => {
			currentScroll = window.pageYOffset

			const headerHeight = header.getBoundingClientRect().height

			if (currentScroll > headerHeight) {
				header.style.backgroundColor = '#fff'
				headerContainer.style.minHeight = 84 + 'px'
			} else {
				header.style.backgroundColor = 'transparent'
				if (window.innerWidth > 1280) {
					headerContainer.style.minHeight = 109 + 'px'
				}
			}

			const headerHidden = () => header.classList.contains('header_hidden')

			if (currentScroll > prevScroll && !headerHidden()) {
				header.classList.add('header_hidden')
			}
			if (currentScroll < prevScroll && headerHidden()) {
				header.classList.remove('header_hidden')
			}

			prevScroll = currentScroll
		})
	}

	onScrollHeader()
})

// let lastScroll = 0
// const defaultOffset = 200
// const header = document.querySelector('.header')

// const scrollPosition = () =>
// 	window.pageYOffset || document.documentElement.scrollTop
// const containHide = () => header.classList.contains('header_hidden')

// window.addEventListener('scroll', () => {
// 	if (
// 		scrollPosition() > lastScroll &&
// 		!containHide() &&
// 		scrollPosition() > defaultOffset
// 	) {
// 		//scroll down
// 		header.classList.add('header_hidden')
// 	} else if (scrollPosition() < lastScroll && containHide()) {
// 		//scroll up
// 		header.classList.remove('header_hidden')
// 	}

// 	lastScroll = scrollPosition()
// })
