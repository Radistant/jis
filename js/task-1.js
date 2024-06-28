function makeTransaction(quantity, pricePerDroid) {
	const totalPrice = quantity * pricePerDroid
	return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}

console.log(makeTransaction(5, 3000)) // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)) // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)) // "You ordered 10 droids worth 5000 credits!"

function makeTransactionVisual(quantity, pricePerDroid) {
	const totalPrice = quantity * pricePerDroid
	return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}

const task1Return = `
    ${makeTransactionVisual(5, 3000)}<br>
    ${makeTransactionVisual(3, 1000)}<br>
    ${makeTransactionVisual(10, 500)}
`

document.getElementById('task-1-return').innerHTML = task1Return
