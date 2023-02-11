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
		carouselTransform === "matrix(1, 0, 0, 1, -400, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 400, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 800, 0)"
	) {
		index--;
		carousel.style.setProperty("transform", `translateX(${index * 400}px)`);
	} else if (viewportWidth < 1340) {
		if (
			carouselTransform === "none" ||
			carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -400, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -800, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 1200, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 400, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 800, 0)"
		) {
			index--;
			carousel.style.setProperty(
				"transform",
				`translateX(${index * 400}px)`
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
		carouselTransform === "matrix(1, 0, 0, 1, 400, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -400, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -800, 0)"
	) {
		index++;
		carousel.style.setProperty("transform", `translateX(${index * 400}px)`);
		carouselTransform = carouselStyles.getPropertyValue("transform");
		console.log(carouselTransform);
	} else if (viewportWidth < 1340) {
		if (
			carouselTransform === "none" ||
			carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 400, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 800, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -1200, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -400, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -800, 0)"
		) {
			index++;
			carousel.style.setProperty(
				"transform",
				`translateX(${index * 400}px)`
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

// Dark mode

const darkmodeBtn = document.querySelector(".dark-mode");
const darkenItems = document.querySelectorAll(".darken");
const lightenItems = document.querySelectorAll(".lighten");
const moonImg = document.querySelectorAll(".moon");
const darkenText = document.querySelectorAll(".darken-text");
const darkenishText = document.querySelectorAll(".darkenish-text");
const darkenBody = document.querySelectorAll(".darken-body");
const removeHover = document.querySelectorAll("#remove-hover");
const invertColor = document.querySelectorAll("#invert-color");

darkmodeBtn.addEventListener("click", darken);

function darken() {
	prevBtn.classList.toggle("from-white");
	prevBtn.classList.toggle("from-[#212121]");

	nextBtn.classList.toggle("from-white");
	nextBtn.classList.toggle("from-[#212121]");

	// Darkens bg and lightens text
	darkenItems.forEach((item) => {
		item.classList.toggle("dark");
	});
	// Lightens bg and darkens text
	lightenItems.forEach((item) => {
		item.classList.toggle("light");
	});
	// Changes the icon for the dark-mode button
	moonImg.forEach((item) => {
		item.classList.toggle("hidden");
	});
	// inverts the color of the images
	invertColor.forEach((item) => {
		item.classList.toggle("invert");
	});
	// Changes the color of text to black
	darkenText.forEach((item) => {
		item.classList.toggle("dark-text");
	});
	// Changes the color of text to grayish black
	darkenishText.forEach((item) => {
		item.classList.toggle("darkish-text");
	});
	// Changes the color of the body to a lighter gray
	darkenBody.forEach((item) => {
		item.classList.toggle("dark-body");
	});
	// Changes the hover state of the nav bar
	removeHover.forEach((item) => {
		item.classList.toggle("hover:text-slate-200");
		item.classList.toggle("hover:text-slate-700");
	});
}

// Grid Can Zoom thingy

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
	item.addEventListener("mouseover", function () {
		gridItems.forEach((otherItem) => {
			otherItem.style.opacity = 0.5;
		});
		this.style.opacity = 1;
	});

	item.addEventListener("mouseout", function () {
		gridItems.forEach((otherItem) => {
			otherItem.style.opacity = 1;
		});
	});
});
