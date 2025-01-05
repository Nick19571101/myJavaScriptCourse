const bookList = {
	render(books, element) {
		books.forEach(book => {
			let section = document.createElement('section')
			section.classList.add('myBook')
			section.insertAdjacentHTML('beforeend', `<h2>${book.title}</h2>`)
			section.insertAdjacentHTML('beforeend', `<h3>${book.author}</h3>`)
			section.insertAdjacentHTML('beforeend', `<b>${book.year}</b>`)
			section.insertAdjacentHTML(
				'beforeend',
				`<p>${book.genre}</p>`,
				element.appendChild(section)
			)
		})
	},
}
