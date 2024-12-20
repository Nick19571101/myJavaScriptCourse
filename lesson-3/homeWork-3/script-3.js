const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
	const yearValue = parseFloat(document.getElementById('yearInput').value)
	const outcome = document.getElementById('outcome')
	if (Number.isInteger(yearValue)) {
		if (yearValue % 4 == 0) {
			outcome.innerText = 'Це високосний рік.'
			outcome.style.color = 'red'
		} else {
			outcome.innerText = 'Це не високосний рік.'
			outcome.style.color = 'green'
		}
	}
})
