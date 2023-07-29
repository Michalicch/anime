const modal = () => {
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

	modalInput.addEventListener('input', () => {
		console.log(modalInput.value);
	})
}

modal()