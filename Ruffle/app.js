const GameUrls = {
	"Gun Mayhem 2": "https://ubg100.github.io/games/SWF/gun-mayhem-2.swf",
};

window.RufflePlayer = window.RufflePlayer || {};

window.addEventListener("DOMContentLoaded", () => {
	let ruffle = window.RufflePlayer.newest();
	let player = ruffle.createPlayer();
	player.id = "player";
	player.style.width = "900px";
	player.style.height = "600px";
	let container = document.getElementById("Ruffle_Player");
	container.appendChild(player);
	player.load(GameUrls["Gun Mayhem 2"]);
});

document.getElementById("fsbutton").addEventListener("click", () => {
	let GameContainer = document.getElementById("player");
	if (GameContainer.requestFullscreen) GameContainer.requestFullscreen();
	else if (GameContainer.mozRequestFullScreen) GameContainer.mozRequestFullScreen();
	else if (GameContainer.webkitRequestFullscreen) GameContainer.webkitRequestFullscreen();
	else if (GameContainer.msRequestFullscreen) GameContainer.msRequestFullscreen();
	else alert("Fullscreen API not supported");
});
