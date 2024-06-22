const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌛")) {
		main.style.background = "black";
		main.style.color = "orange"
		modeButton.textContent = "🌞";
	} else {
		main.style.background = "#eee";
		main.style.color = "navy";
		modeButton.textContent = "🌛";
	}
});

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }