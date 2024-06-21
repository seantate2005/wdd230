const hamburgerElement = document.querySelector(`#myButton`);
const navElement = document.querySelector(`.menuLinks`);

hamburgerElement.addEventListener(`click`, () => {
navElement.classList.toggle(`open`);

}
);
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});
