const mainData = () =>{
	//fetch('./db.json') // Получение данных из локального файла
	fetch('https://anime-db-19882-default-rtdb.firebaseio.com/anime.json') // Получение данных из Firebase по сети
	.then((response) => {
		return response.json()		
	})
	.then((data) => {
		console.log(data);
	})
}

mainData()