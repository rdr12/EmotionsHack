// * GLOBAL VARIABLES
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#splash-screen");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const score = document.querySelector("#score");
let game;



// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  startScreen.style.display = "none";
  canvas.style.display = "block";
  score.style.display = "block";
  game = new Game();
  game.gameLoop();
};


const keyCode = (event) => {

  if (event.code === "ArrowLeft") {  // se mueve a la izquierda
    
    game.personaje.atrasMov()
  
  } else if (event.code === "ArrowRight") {  // se mueve a la derecha
   
    game.personaje.delanteMov()
  
  } else if (event.code === "ArrowDown") {   // se mueve hacia abajo
   
    game.personaje.arrMov()
  
  } else if (event.code === "ArrowUp") { // se mueve hacia arriba
    
    game.personaje.abajMov()
  
  }

};



// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", keyCode);
