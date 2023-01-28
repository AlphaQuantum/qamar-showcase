// let nextIndex = 0;
// let prevIndex = 0;
// const carousel = document.getElementById("carousel");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
// let carouselStylesnext = window.getComputedStyle(carousel);
// let carouselTransformnext = carouselStylesnext.getPropertyValue("transform");
// let carouselStylesprev = window.getComputedStyle(carousel);
// let carouselTransformprev = carouselStylesprev.getPropertyValue("transform");

// prevBtn.addEventListener("click", () => {
// 	carouselStylesprev = window.getComputedStyle(carousel);
// 	carouselTransformprev = carouselStylesprev.getPropertyValue("transform");
// 	console.log(carouselTransformprev);
// 	if (
// 		carouselTransformprev === "none" ||
// 		carouselTransformprev === "matrix(1, 0, 0, 1, 0, 0)" ||
// 		carouselTransformprev === "matrix(1, 0, 0, 1, 500, 0)" ||
// 		carouselTransformnext === "matrix(1, 0, 0, 1, -500, 0)"
// 	) {
// 		prevIndex++;
// 		carousel.style.transform = `translateX(${prevIndex * 500}px)`;
// 	} else if (carouselTransformprev === "matrix(1, 0, 0, 1, 1000, 0)") {
// 		nextIndex = 0;
// 		prevIndex = 0;
// 		carousel.style.transform = `translateX(${prevIndex * 500}px)`;
// 	}
// 	carouselTransformprev = carouselStylesprev.getPropertyValue("transform");
// 	console.log(carouselTransformprev);
// 	carouselTransformnext = carouselStylesnext.getPropertyValue("transform");
// });

// nextBtn.addEventListener("click", () => {
// 	carouselStylesnext = window.getComputedStyle(carousel);
// 	carouselTransformnext = carouselStylesnext.getPropertyValue("transform");
// 	console.log(carouselTransformnext);
// 	if (
// 		carouselTransformnext === "none" ||
// 		carouselTransformnext === "matrix(1, 0, 0, 1, 0, 0)" ||
// 		carouselTransformnext === "matrix(1, 0, 0, 1, -500, 0)" ||
// 		carouselTransformprev === "matrix(1, 0, 0, 1, 500, 0)"
// 	) {
// 		nextIndex++;
// 		carousel.style.transform = `translateX(-${nextIndex * 500}px)`;
// 	} else if (carouselTransformnext === "matrix(1, 0, 0, 1, -1000, 0)") {
// 		nextIndex = 0;
// 		prevIndex = 0;
// 		carousel.style.transform = `translateX(-${nextIndex * 500}px)`;
// 	}
// 	carouselTransformnext = carouselStylesnext.getPropertyValue("transform");
// 	console.log(carouselTransformnext);
// 	carouselTransformprev = carouselStylesprev.getPropertyValue("transform");
// 	console.log
// });

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
		carouselTransform === "matrix(1, 0, 0, 1, -475, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 475, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 950, 0)"
	) {
		index--;
		carousel.style.setProperty("transform", `translateX(${index * 475}px)`);
	} else {
		index = 0;
		carousel.style.setProperty("transform", `translateX(${index * 475}px)`);
	}
	console.log(carouselStyles);
	console.log(carouselTransform);
});

prevBtn.addEventListener("click", () => {
	carouselStyles = window.getComputedStyle(carousel);
	carouselTransform = carouselStyles.getPropertyValue("transform");

	if (
		carouselTransform === "none" ||
		carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 475, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -475, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -950, 0)"
	) {
		index++;
		carousel.style.setProperty("transform", `translateX(${index * 475}px)`);
	} else {
		index = 0;
		carousel.style.setProperty("transform", `translateX(${index * 475}px)`);
	}
});
