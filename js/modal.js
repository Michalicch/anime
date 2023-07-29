const modal = () => {
	const modal = document.querySelector('.search-model')
	const modalBtn = document.querySelector('.icon_search')
	const modalClose = modal.querySelector('.icon_close')
	const searchInput = document.getElementById('search-input')
	const wrapper = document.querySelector('.search-model-result')

	wrapper.style.width = '100%'
	wrapper.style.maxWidth = '500px'

	const renderFunc = (items) => {
		wrapper.innerHTML = ''

		items.forEach(item => {
			wrapper.insertAdjacentHTML('afterbegin', `
				<a class="p-2" href="/anime-details.html" target="_blank">${item.title}</a>
			`)
		});
	}


	const searchFunc = (searchStr) => {
		fetch('https://anime-db-19882-default-rtdb.firebaseio.com/anime.json') // Получение данных из Firebase по сети
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				const filteredData = data.filter(dataItem => {
					return dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) ||
						dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
				})

				renderFunc(filteredData.slice(0, 5));
			})
	}

	modalBtn.addEventListener('click', () => {
		modal.style.display = 'block'
	})

	modalClose.addEventListener('click', () => {
		modal.style.display = 'none'
		searchInput.value = ''
		wrapper.innerHTML = ''
	})

	searchInput.addEventListener('input', (event) => {
		searchFunc(event.target.value);
	})
}

modal()