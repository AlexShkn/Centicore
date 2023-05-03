class Slider {
	constructor(rangeElement, valueElement, options) {
		this.rangeElement = rangeElement
		this.valueElement = valueElement
		this.options = options

		// Attach a listener to "change" event
		this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
	}

	// Initialize the slider
	init() {
		this.rangeElement.setAttribute('min', options.min)
		this.rangeElement.setAttribute('max', options.max)
		this.rangeElement.value = options.cur

		this.updateSlider()
	}

	// Format the money
	asMoney(value) {
		return parseFloat(value).toLocaleString('en-US', {
			maximumFractionDigits: 2,
		})
	}

	generateBackground(rangeElement) {
		if (this.rangeElement.value === this.options.min) {
			return
		}

		let percentage =
			((this.rangeElement.value - this.options.min) /
				(this.options.max - this.options.min)) *
			100
		return (
			'background: linear-gradient(to right, #2D4872, #2D4872 ' +
			percentage +
			'%, #D1D1D1 ' +
			percentage +
			'%, #dee1e2 100%)'
		)
	}

	updateSlider(newValue) {
		this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
		this.rangeElement.style = this.generateBackground(this.rangeElement.value)
	}
}

let rangeElement = document.querySelector(
	'.calculate-form__range-slider [type="range"]',
)
let valueElement = document.querySelector('.calculate-form__range-value span')

let options = {
	min: 1,
	max: 500,
	cur: 35,
}

if (rangeElement) {
	let slider = new Slider(rangeElement, valueElement, options)

	slider.init()
}

//====================================================================

const inputFields = document.querySelectorAll('.calculator__field > input')

function checkingInput(input) {
	const value = input.value
	input.value = value.replace(/\D/g, '')
}

inputFields.forEach(input => {
	input.addEventListener('input', () => {
		checkingInput(input)
	})
})

//====================================================================

document.querySelector('#current-year').innerHTML = new Date().getFullYear()

//====================================================================

const tabs = (
	tabsSelector,
	tabsHeadSelector,
	tabsBodySelector,
	tabsCaptionSelector,
	tabsCaptionActiveClass,
	tabsContentActiveClass,
) => {
	// объявляем основную функцию tabs, которая будет принимать CSS классы и селекторы

	const tabs = document.querySelector(tabsSelector) // ищем на странице элемент по переданному селектору основного элемента вкладок и записываем в константу
	const head = tabs.querySelector(tabsHeadSelector) // ищем в элементе tabs элемент с кнопками по переданному селектору и записываем в константу
	const body = tabs.querySelector(tabsBodySelector) // ищем в элементе tabs элемент с контентом по переданному селектору и записываем в константу

	const getActiveTabName = () => {
		// функция для получения названия активной вкладки
		return head.querySelector(`.${tabsCaptionActiveClass}`).dataset.tab // возвращаем значение data-tab активной кнопки
	}

	const setActiveContent = () => {
		// функция для установки активного элемента контента
		if (body.querySelector(`.${tabsContentActiveClass}`)) {
			// если уже есть активный элемент контента
			body
				.querySelector(`.${tabsContentActiveClass}`)
				.classList.remove(tabsContentActiveClass) // то скрываем его
		}
		body
			.querySelector(`[data-tab=${getActiveTabName()}]`)
			.classList.add(tabsContentActiveClass) // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
	}

	// проверяем при загрузке страницы, есть ли активная вкладка
	if (!head.querySelector(`.${tabsCaptionActiveClass}`)) {
		// если активной вкладки нет
		head
			.querySelector(tabsCaptionSelector)
			.classList.add(tabsCaptionActiveClass) // то делаем активной по-умолчанию первую вкладку
	}

	setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы

	head.addEventListener('click', e => {
		// при клике на элемент с кнопками
		const caption = e.target.closest(tabsCaptionSelector) // узнаем, был ли клик на кнопке
		if (!caption) return // если клик был не на кнопке, то прерываем выполнение функции
		if (caption.classList.contains(tabsCaptionActiveClass)) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем

		if (head.querySelector(`.${tabsCaptionActiveClass}`)) {
			// если уже есть активная кнопка
			head
				.querySelector(`.${tabsCaptionActiveClass}`)
				.classList.remove(tabsCaptionActiveClass) // то удаляем ей активный класс
		}

		caption.classList.add(tabsCaptionActiveClass) // затем добавляем активный класс кнопке, на которой был клик

		setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой
	})
}

tabs(
	'.calculator',
	'.calculator__list--caption',
	'.calculator__content',
	'.calculator__caption',
	'tabs__caption_active',
	'tabs__content_active',
) // вызываем основную функцию tabs для синих вкладок .section__tabs

//====================================================================

const resultList = document.querySelector('.result-list')
const inputsList = document.querySelectorAll('.calculator__input')
const radioInputs = document.querySelectorAll('input[type="radio"]')
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
const rangeInput = document.querySelector('.range-slider > input[type="range"]')
const rangeSlider = document.querySelector('.range-slider')
const rangeDots = document.querySelectorAll('.range-slider__dots > i ')
const countsName = document.querySelectorAll('.calculator__item--count > span')
const rangeMessage = document.querySelector('.range-slider__message')
const messageBullet = rangeMessage.querySelector('span')
const resultButton = document.querySelector('.calculate-result__button')

const result = {
	services: '',
	team: [],
	works: [],
	products: [],
	term: '',
}

inputsList.forEach((input, index) => {
	createIndicateItem(input, index)

	input.addEventListener('change', () => {
		createIndicateItem(input, index)
	})
})

rangeInput.addEventListener('input', () => {
	if (rangeInput.value) {
		rangeDots.forEach((dot, index) => {
			const dotIndex = index + 1
			const month = dot.querySelector('span')
			let monthWord = ''

			if (dotIndex === 1 || dotIndex === 21) {
				monthWord = 'месяц'
			} else if (
				(dotIndex > 1 && dotIndex < 5) ||
				(dotIndex > 21 && dotIndex < 25)
			) {
				monthWord = 'месяца'
			} else if (dotIndex >= 5 && dotIndex < 21) {
				monthWord = 'месяцев'
			}

			if (+rangeInput.value === dotIndex) {
				result.term = `${rangeInput.value} ${monthWord}`
				if (month) {
					createIndicateItem(
						`Длительность ${month.textContent}`,
						`range-${dotIndex}`,
						'value',
					)
					month.style.color = '#1f50fe'
				} else if (!month) {
					createIndicateItem(
						`Длительность ${+rangeInput.value} ${monthWord}`,
						`range-${dotIndex}`,
						'value',
					)
				}
			} else {
				removeItem(`range-${dotIndex}`)
				if (month) {
					month.style.color = '#1a233b'
				}
			}
		})
	}
	showSliderValue()
})

radioInputs.forEach(input => {
	input.addEventListener('change', () => {
		radioInputs.forEach((input, index) => {
			if (!input.checked) {
				createIndicateItem(input, index)
			}
		})
	})
})

resultList.addEventListener('click', e => {
	const close = resultList.querySelector('.del-icon')
	const itemText = e.target.closest('.result-list__item').textContent.trim()

	if (
		(e.target.closest('.result-list__item') && e.target === close) ||
		e.target.closest('.del-icon')
	) {
		e.target.closest('.result-list__item').remove()

		checkboxInputs.forEach(checkbox => {
			if (checkbox.value === itemText) {
				checkbox.checked = false
			}
		})

		countsName.forEach(count => {
			if (count.textContent === itemText) {
				count.previousElementSibling.querySelector('i').textContent = 0
			}
		})
	}
})

const calculatorCounts = document.querySelectorAll('.calculator__count')

calculatorCounts.forEach((item, index) => {
	const buttons = item.querySelectorAll('button')
	buttons.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
		})
	})
	const countDec = item.querySelector('[data-count-dec]')
	const countInc = item.querySelector('[data-count-inc]')
	const countEl = item.querySelector('i')
	let count = +countEl.textContent

	const textItem = item
		.closest('.calculator__item')
		.querySelector('span').textContent

	if (count === 0) {
		countDec.classList.add('_disabled')
	}

	countDec.addEventListener('click', e => {
		if (count > 0) {
			countEl.textContent--
			count--
		}

		if (count === 0) {
			countDec.classList.add('_disabled')
			countDec.disabled = true
		}

		if (count < 50) {
			countInc.classList.remove('_disabled')
			countInc.disabled = false
		}

		changeItemCount(e, count)
	})

	countInc.addEventListener('click', e => {
		if (count < 50) {
			countEl.textContent++
			count++
		}

		if (count === 50) {
			countInc.classList.add('_disabled')
			countInc.disabled = true
		}

		if (count > 0) {
			countDec.classList.remove('_disabled')
			countDec.disabled = false
		}
		if (count === 1) {
			createIndicateItem(textItem, 'count-' + index, 'value', count)
		}

		changeItemCount(e, count)
	})
})

function createIndicateItem(input, index, type, count) {
	if (input.checked || type === 'value') {
		let value
		if (type === 'value') {
			value = input
		} else {
			value = input.value
		}

		resultList.insertAdjacentHTML(
			'beforeend',
			createTemplate(value, index, count),
		)
	} else {
		removeItem(index)
	}
}

function removeItem(index) {
	let el = document.getElementById(`result-item-${index + 1}`)
	if (el) {
		el.remove()
	}
}

function createTemplate(name, index, count = '') {
	return `
	<li id="result-item-${index + 1}" class="result-list__item">
	<div class="result-list__indicators">
		<span class="result-list__count">${count}</span>
		<span class="result-list__name">${name}</span>
	</div>
	<svg class="icon del-icon">
		<use xlink:href="../img/sprite.svg#x"></use>
	</svg>
</li>
	`
}

function showSliderValue() {
	messageBullet.textContent = rangeInput.value
	const inputWidth = rangeSlider.getBoundingClientRect().width
	const realInputWidth = (inputWidth * 5) / 100
	let bulletPosition = rangeInput.value / rangeInput.max
	let finalPosition = bulletPosition * inputWidth - realInputWidth + 'px'
	rangeMessage.style.left = finalPosition
}

function changeItemCount(e, count) {
	const items = document.querySelectorAll('.result-list__item')
	const countText = e.target
		.closest('.calculator__item')
		.querySelector('span')
		.textContent.trim()

	items.forEach(item => {
		const itemName = item.querySelector('.result-list__name')
		const itemCount = item.querySelector('.result-list__count')

		if (itemName.textContent.trim() === countText) {
			if (count < 1) {
				item.remove()
				return
			}
			itemCount.textContent = count
		}
	})
}

resultButton.addEventListener('click', e => {
	e.preventDefault()
	inputsList.forEach(input => {
		if (input.type === 'radio' && input.checked) {
			result.services = input.value
		}
		if (input.type === 'checkbox' && input.checked) {
			if (input.name === 'works') result.works.push(input.value)
			if (input.name === 'products') result.products.push(input.value)
		}

		input.checked = false
	})

	calculatorCounts.forEach(item => {
		const countDec = item.querySelector('[data-count-dec]')
		const countInc = item.querySelector('[data-count-inc]')
		const count = item.querySelector('i')
		const textItem = item
			.closest('.calculator__item')
			.querySelector('span').textContent

		if (+count.textContent > 0) {
			result.team.push({
				profession: textItem,
				quantity: count,
			})

			count.textContent = 0
			countDec.classList.add('_disabled')
			countDec.disabled = true
			countInc.classList.remove('_disabled')
			countInc.disabled = false
		}
	})

	rangeInput.value = 1
	resultList.innerHTML = ''
	console.log(result)
})
