function getElementWidth(content, padding, border) {
	content = Number.parseFloat(content)
	padding = Number.parseFloat(padding)
	border = Number.parseFloat(border)
	let width = content + padding * 2 + border * 2
	return width
}

console.log(getElementWidth('50px', '8px', '4px')) // 74
console.log(getElementWidth('60px', '12px', '8.5px')) // 101
console.log(getElementWidth('200px', '0px', '0px')) // 200

function getElementWidthVisual(content, padding, border) {
	const contentWidth = parseFloat(content)
	const paddingWidth = parseFloat(padding)
	const borderWidth = parseFloat(border)
	const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth
	return totalWidth
}

const task3Return = `
    ${getElementWidthVisual('50px', '8px', '4px')}<br>
    ${getElementWidthVisual('60px', '12px', '8.5px')}<br>
    ${getElementWidthVisual('200px', '0px', '0px')}
`

document.getElementById('task-3-return').innerHTML = task3Return
