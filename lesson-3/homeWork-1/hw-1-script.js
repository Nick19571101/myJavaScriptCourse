const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
	const numberValue = parseFloat(document.getElementById('numberInput').value)
	const resultSpan = document.getElementById('resultSpan')
	if (Number.isInteger(numberValue)) {
		if (numberValue % 2 == 1) {
			resultSpan.innerText = 'Це непарне число.'
			resultSpan.style.color = 'red'
		} else if (numberValue % 2 == 0) {
			resultSpan.innerText = 'Це парне число.'
			resultSpan.style.color = 'green'
		}
	}
})
