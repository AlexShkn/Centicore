import { throttle } from '../../functions.js'

const backToTopButton = document.querySelector('#back-to-top-btn')

if (backToTopButton) {
	document.addEventListener('scroll', throttle(scrollFunction, 64))
	document.addEventListener('resize', throttle(scrollFunction, 64))

	function scrollFunction() {
		if (window.innerWidth < 768) {
			backToTopButton.style.display = 'none'
		} else {
			if (window.pageYOffset > 300) {
				if (!backToTopButton.classList.contains('btnEntrance')) {
					backToTopButton.classList.remove('btnExit')
					backToTopButton.classList.add('btnEntrance')
					backToTopButton.style.display = 'inline-flex'
				}
			} else {
				if (backToTopButton.classList.contains('btnEntrance')) {
					backToTopButton.classList.remove('btnEntrance')
					backToTopButton.classList.add('btnExit')
					setTimeout(function () {
						backToTopButton.style.display = 'none'
					}, 250)
				}
			}
		}
	}

	backToTopButton.addEventListener('click', e => {
		e.preventDefault()
		window.scrollTo(0, 0)
	})
}
