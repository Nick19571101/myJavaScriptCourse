const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
	const dateInput = document.getElementById('dateInput').value
	const date = new Date(dateInput).getDay()

	const dayOfWeek = document.getElementById('outcome')

	if (date === 0) {
		dayOfWeek.innerText = 'Обрана дата відповідає дню: Неділя'
	}
	if (date === 1) {
		dayOfWeek.innerText = 'Обрана дата відповідає дню: Понеділок'
	}
	if (date === 2) {
		dayOfWeek.innerText = 'Обрана дата відповідає дню: Вівторок'
	}
	if (date === 3) {
		dayOfWeek.innerText = 'Обрана дата відповідає дню: Середа'
	}
	if (date === 4) {
		dayOfWeek.innerText = 'Обрана дата відповідає дню: Четвер'
	}
	if (date === 5) {
		dayOfWeek.innerText = "Обрана дата відповідає дню: П'ятниця"
	}
	if (date === 6) {
		dayOfWeek.innerText = 'Обрана дата відповідає дню: Субота'
	}
})

// const days = [
// 	'Неділя',
// 	'Понеділок',
// 	'Вівторок',
// 	'Середа',
// 	'Четвер',
// 	"П'ятниця",
// 	'Субота',
// ]
// const dayOfWeek = days[date.getDay()]
// document.getElementById('output').innerText =
// 	'Обрана дата відповідає дню: ' + dayOfWeek
