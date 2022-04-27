// * GLOBAL VARIABLES
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const score = document.querySelector("#score");
const gameOverScreen = document.querySelector("#gameover-screen");
const restartBoton = document.querySelector("#restart-btn");
const audio = new Audio("./audio/musicgame.mp3");
let game;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  startScreen.style.display = "none";
  canvas.style.display = "block";
  score.style.display = "block";
  gameOverScreen.style.display = "none";
  audio.play();
  audio.loop = true;
  audio.volumen = 0.01;
  game = new Game();
  game.gameLoop();
};

const keyCode = (event) => {
  if (event.code === "ArrowLeft") {
    // se mueve a la izquierda

    game.personaje.atrasMov();
  } else if (event.code === "ArrowRight") {
    // se mueve a la derecha

    game.personaje.delanteMov();
  } else if (event.code === "ArrowDown") {
    // se mueve hacia abajo

    game.personaje.arrMov();
  } else if (event.code === "ArrowUp") {
    // se mueve hacia arriba

    game.personaje.abajMov();
  }
};

// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", keyCode);
restartBoton.addEventListener("click", startGame);