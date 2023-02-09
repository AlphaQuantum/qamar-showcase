let index = 0;
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let carouselStyles = window.getComputedStyle(carousel);
let carouselTransform = carouselStyles.getPropertyValue("transform");

nextBtn.addEventListener("click", () => {
	carouselStyles = window.getComputedStyle(carousel);
	carouselTransform = carouselStyles.getPropertyValue("transform");
	if (
		carouselTransform === "none" ||
		carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -480, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 480, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 960, 0)"
	) {
		index--;
		carousel.style.setProperty("transform", `translateX(${index * 480}px)`);
	} else if (viewportWidth < 1340) {
		if (
			carouselTransform === "none" ||
			carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -480, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -960, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 1440, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 480, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 960, 0)"
		) {
			index--;
			carousel.style.setProperty(
				"transform",
				`translateX(${index * 480}px)`
			);
			carouselTransform = carouselStyles.getPropertyValue("transform");
			console.log(carouselTransform);
		} else {
			carouselTransform = carouselStyles.getPropertyValue("transform");
			console.log(carouselTransform);
		}
	}
});

// PREV BUTTON MOVES THE CAROUSEL RIGHT
prevBtn.addEventListener("click", () => {
	carouselStyles = window.getComputedStyle(carousel);
	carouselTransform = carouselStyles.getPropertyValue("transform");

	if (
		carouselTransform === "none" ||
		carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 480, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -480, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -960, 0)"
	) {
		index++;
		carousel.style.setProperty("transform", `translateX(${index * 480}px)`);
		carouselTransform = carouselStyles.getPropertyValue("transform");
		console.log(carouselTransform);
	} else if (viewportWidth < 1340) {
		if (
			carouselTransform === "none" ||
			carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 480, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 960, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -1440, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -480, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -960, 0)"
		) {
			index++;
			carousel.style.setProperty(
				"transform",
				`translateX(${index * 480}px)`
			);
			carouselTransform = carouselStyles.getPropertyValue("transform");
			console.log(carouselTransform);
		} else {
			carouselTransform = carouselStyles.getPropertyValue("transform");
			console.log(carouselTransform);
		}
	}
});

let viewportWidth = window.innerWidth;
console.log(viewportWidth);

// Disable Image and a-link Dragging

document
	.querySelectorAll("img")
	.forEach((img) => (img.ondragstart = () => false));

document
	.querySelectorAll("a")
	.forEach((img) => (img.ondragstart = () => false));
