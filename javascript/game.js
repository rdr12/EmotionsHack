class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
  }

  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    requestAnimationFrame(this.gameLoop);
  };
}
