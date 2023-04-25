// Проверка наличия элементов в списке для добавления стрелки
export const checkSiblingElements = el =>
	[].slice.call(el.parentNode.children).filter(child => child !== el)

//====================================================================
// Выравнивание набора элементов по максимальной высоте элемента
export function findMaxHeight(elements) {
	let max = 0
	elements.forEach(el => {
		max = Math.max(max, el.clientHeight)
	})
	return max
}
// function alignmentByHeight(classname) {
// 	let divs = document.querySelectorAll(classname)
// 	divs.forEach(el => {
// 		el.style.minHeight = `${findMaxHeight(divs)}px`
// 	})
// }
//====================================================================
// Получить цифры из строки
export function getDigFromString(item) {
	return parseInt(item.replace(/[^\d]/g, ''))
}
// Форматирование цифр типа 100 000 000
export function getDigFormat(item) {
	return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}
