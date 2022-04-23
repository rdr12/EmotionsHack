class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.personaje = new Personaje();
    
  }

  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.personaje.gravityPersonaje()
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.personaje.drawPersonaje()

    requestAnimationFrame(this.gameLoop);
    
  };
}
