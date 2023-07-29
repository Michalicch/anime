const mainData = () => {

	const renderAnimeList = (array, ganres) => {
		//console.log(array);
		//console.log(ganres);
	}

	const rendorTopAnime = (array, ganres) => {
		const wrapper = document.querySelector('.filter__gallery')

		wrapper.innerHTML = ''
		array.forEach((item) => {
			//console.log(item);
			wrapper.insertAdjacentHTML("afterbegin", `
				<div class="product__sidebar__view__item set-bg mix"
					data-setbg="${item.image}">
					<div class="ep">${item.rating}</div>
					<div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
					<h5><a href="/anime-details.html">${item.title}</a></h5>
				</div>
			`
			);
		});
		wrapper.querySelectorAll('.set-bg').forEach((elem) => {
			elem.style.backgroundImage = `url(${elem.dataset.setbg})`
		});
	}


	//fetch('./db.json') // Получение данных из локального файла
	fetch('https://anime-db-19882-default-rtdb.firebaseio.com/anime.json') // Получение данных из Firebase по сети
		.then((response) => {
			return response.json()
		})
		.then((data) => {

			const ganres = new Set()

			rendorTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5)); //меняя местами a и b изменяем направление сортировки

			data.forEach((item) => {
				ganres.add(item.ganre)
			})

			renderAnimeList(data, ganres)
		})
}

mainData()