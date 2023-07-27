const preloader = document.querySelector('.preloder')

preloader.classList.add('active')

setTimeout(() => {
	preloader.classList.remove('active')
}, 500)

console.log(preloader);