/**
 * плавная прокрутка на странице без багов
 * https://www.npmjs.com/package/seamless-scroll-polyfill
 * <script src="https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest"></script>
 */
const scrollToTop = () => {
	const topBtn = document.querySelector('#scrollToTopButton')

	topBtn.addEventListener('click', (event) => {
		event.preventDefault();
		seamless.scrollIntoView(document.querySelector(".header"), {
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
		// Стандартный не стабильный вариант скролла
		// window.scrollTo({
		// 	top: 0,
		// 	behavior: 'smooth'
		// })
	})
}

scrollToTop()