let element = document.querySelector('#list')
element.innerHTML = '<li>Item 1</li>'

let li = document.createElement('li')
li.textContent = 'Item 2'
element.appendChild(li)
let li2 = document.createElement('li')
li2.textContent = 'Item 3'
element.appendChild(li2)

element.insertAdjacentHTML('beforeend', '<li>Item 4</li>')

//html code
// <ul id="list">
// 		<li>Item </li>
// </ul>
