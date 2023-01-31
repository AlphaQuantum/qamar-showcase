// Declare Elements

let index = 0;
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let carouselStyles = window.getComputedStyle(carousel);
let carouselTransform = carouselStyles.getPropertyValue("transform");

// ADD EVENT LISTENERS

// NEXT BUTTON MOVES THE CAROUSEL LEFT
nextBtn.addEventListener("click", () => {
	// get the properties of the carousel
	carouselStyles = window.getComputedStyle(carousel);
	// extract only the transform property which we will change
	carouselTransform = carouselStyles.getPropertyValue("transform");
	// if statement to check position of the carousel (Negative is left, positive is right)
	if (
		carouselTransform === "none" ||
		carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -475, 0)" ||
		// Positions of carousel if prev arrow is used so that user can click next even if he clicks prev first
		carouselTransform === "matrix(1, 0, 0, 1, 475, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, 950, 0)"
	) {
		// if condition is met:
		// imagine the carousel positions are -2, -1, 0, 1, 2 where 0 is the first items and the numbers on the left and right are next position in that respective direction

		// so if the user clicks next (moves left), the index will become -1
		index--;
		// multiply to get desired pos
		carousel.style.setProperty("transform", `translateX(${index * 475}px)`);
	}
	// otherwise if the condition is not met, DO NOTHING
	else if (viewportWidth < 1340) {
		if (
			carouselTransform === "none" ||
			carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -475, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -950, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 1425, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 475, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 950, 0)"
		) {
			index--;
			carousel.style.setProperty(
				"transform",
				`translateX(${index * 475}px)`
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
		carouselTransform === "matrix(1, 0, 0, 1, 475, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -475, 0)" ||
		carouselTransform === "matrix(1, 0, 0, 1, -950, 0)"
	) {
		// if the item moves to the right then the position will be 1 (second click will be 2 [which is the max number of clicks we allow])
		index++;
		carousel.style.setProperty("transform", `translateX(${index * 475}px)`);
		carouselTransform = carouselStyles.getPropertyValue("transform");
		console.log(carouselTransform);
	} else if (viewportWidth < 1340) {
		if (
			carouselTransform === "none" ||
			carouselTransform === "matrix(1, 0, 0, 1, 0, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 475, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, 950, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -1425, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -475, 0)" ||
			carouselTransform === "matrix(1, 0, 0, 1, -950, 0)"
		) {
			index++;
			carousel.style.setProperty(
				"transform",
				`translateX(${index * 475}px)`
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
