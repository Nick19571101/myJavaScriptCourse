'use strict'

const phrase = document.getElementById('btn')
const date = document.getElementById('date')
const txt = document.querySelector('#txt')

phrase.onclick = function () {
	txt.innerHTML = 'Hello Nick!'
}
phrase.addEventListener('click', () => {
	date.innerHTML = new Date().toLocaleDateString()
})
phrase.addEventListener('click', () => {
	txt.style.color = 'red'
})
