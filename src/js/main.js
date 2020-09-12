$(document).ready(function () {
	const menuItemDrop = document.querySelector('.menu-item-drop');
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('.header-menu')
	menuItemDrop.addEventListener('click', function () {
		const thisDropMenu = menuItemDrop.querySelector('.menu-item-submenu');
		const thisDropIcon = menuItemDrop.querySelector('.menu-item-icon');

		if (thisDropMenu.classList.contains('active')) {
			thisDropMenu.classList.remove('active');
			thisDropIcon.style.color = '#000';
			thisDropIcon.textContent = '+'
		} else {
			thisDropMenu.classList.add('active');
			thisDropIcon.innerHTML = '&ndash;';
			thisDropIcon.style.color = '#EB2325';
		}

	});
	if (menuToggle) {
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {

				this.classList.remove('active');
				mobMenu.classList.remove('active');
				// for (let item of mobMenuItem) {
				// 	item.classList.remove('animate')
				// }

				// overlayBlock.classList.remove('active');
				// bodyEl.classList.remove('noscroll');

			} else {
				this.classList.add('active');
				mobMenu.classList.add('active');
				// overlayBlock.classList.add('active');
				// bodyEl.classList.add('noscroll');
				// let delay = 0;
				// for (let item of mobMenuItem) {
				// 	setTimeout(function () {
				// 		item.classList.add('animate');
				// 	}, 50 + delay)
				// 	delay += 100;
				// }

			}
		});
		window.addEventListener('resize', function () {
			menuToggle.classList.remove('active');

		});

	}
})