document.querySelector('#btnToC').onclick = () => {
	let tempF = Number(document.querySelector('#temp').value)
	let tempC = (5 / 9) * (tempF - 32)
	showResult(tempC)
}
document.querySelector('#btnToF').onclick = () => {
	let tempC = Number(document.querySelector('#temp').value)
	let tempF = (9 / 5) * tempC + 32
	showResult(tempF)
}
const showResult = result => {
	let output = document.querySelector('#output')
	output.innerHTML = result.toFixed(3)
}
