const bookForm = document.querySelector('#form')
const titleInput = document.querySelector('#titleInput')
const authorInput = document.querySelector('#authorInput')
const yearInput = document.querySelector('#yearInput')
const genreInput = document.querySelector('#genreInput')
const html = document.querySelector('#list')

function renderBook() {
	bookList.render(bookData.books, html)
}

const bookData = {
	books: [
		{
			id: 1,
			title: '1984',
			author: 'Джордж Орвелл',
			year: 1949,
			genre: 'Антиутопія',
		},
		{
			id: 2,
			title: 'Гаррі Поттер і філософський камінь',
			author: 'Дж. К. Роулінг',
			year: 1997,
			genre: 'Фентезі',
		},
		{
			id: 3,
			title: 'Гра престолів',
			author: 'Джордж Р. Р. Мартін',
			year: 1996,
			genre: 'Фентезі',
		},
		{
			id: 4,
			title: 'Старий і море',
			author: 'Ернест Хемінгуей',
			year: 1952,
			genre: 'Пригодницький роман',
		},
		{
			id: 5,
			title: 'Майстер і Маргарита',
			author: 'Михайло Булгаков',
			year: 1967,
			genre: 'Фантастика',
		},
	],
	lastId: 5,
	add(book) {
		this.lastId++
		book.id = this.lastId
		this.books.push(book)
	},
	remove(id) {
		const index = this.books.findIndex(x => x.id == id)
		this.books.splice(index, 1)
	},
	update(id, book) {
		let index = this.books.findIndex(x => x.id == id)
		this.books[index] = book
	},
	find(id) {
		let index = this.books.findIndex(x => x.id == id)
		return this.books[index]
	},
}
// bookList.render(bookData.books, html)
bookForm.addEventListener('submit', e => {
	e.preventDefault()
	let book = {
		title: titleInput.value,
		author: authorInput.value,
		year: yearInput.value,
		genre: genreInput.value,
	}
	bookData.add(book)
	renderBook()
})
renderBook()
