// * GLOBAL VARIABLES
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  startScreen.style.display = "none";
  canvas.style.display = "block";

  let game = new Game();
  game.gameLoop();
};

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
