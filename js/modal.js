const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.icon_close')

const modalInput = document.getElementById('search-input')

modalBtn.addEventListener('click', () => {
	modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
	modal.style.display = 'none'
})

console.log('текст поиска: ');
let val = ''
setInterval(() => {
	if (val != modalInput.value) {
		val = modalInput.value
		console.log(val);
	}else{
		return
	}
	//console.log(val);
}, 500)
