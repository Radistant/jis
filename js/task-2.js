function getShippingMessage(country, price, deliveryFee) {
	const totalPrice = price + deliveryFee
	return `Shipping to ${country} will cost ${totalPrice} credits`
}

console.log(getShippingMessage('Australia', 120, 50)) // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)) // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)) // "Shipping to Sweden will cost 120 credits"

function getShippingMessageVisual(country, price, deliveryFee) {
	const totalPrice = price + deliveryFee
	return `Shipping to ${country} will cost ${totalPrice} credits`
}

const task2Return = `
    ${getShippingMessageVisual('Australia', 120, 50)}<br>
    ${getShippingMessageVisual('Germany', 80, 20)}<br>
    ${getShippingMessageVisual('Sweden', 100, 20)}
`

document.getElementById('task-2-return').innerHTML = task2Return
