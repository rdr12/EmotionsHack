class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.personaje = new Personaje();
    this.emocionNegativaArr = [new Emocionnegativa("./images/imgenfadada1.png")];
    this.isGameOn = true;
    this.score = 0;
    
  }

  addNewEmocionnegativa = () => {
    if (this.emocionNegativaArr.length === 0){

      let newEmNeg = new Emocionnegativa("./images/imgenfadada1.png")
      this.emocionNegativaArr.push(newEmNeg)
    }
  }

  personColision = () => {
    this.emocionNegativaArr.forEach((eachEmocionnegativa) => {
       
    if (this.personaje.x < eachEmocionnegativa.x + eachEmocionnegativa.w &&
      this.personaje.x + this.personaje.w > eachEmocionnegativa.x &&
      this.personaje.y < eachEmocionnegativa.y + eachEmocionnegativa.h &&
      this.personaje.h + this.personaje.y > eachEmocionnegativa.y) {

        
        this.isGameOn = false;
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";

      }
    })
  }



  gameLoop = () => {
    //1.BORRAR CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    //2.ACCIONES O MOVIMIENTO DE LOS ELEMENTOS
    this.personaje.atrasMov()
    this.personaje.delanteMov()
    this.personaje.arrMov()
    this.personaje.abajMov()
    this.personaje.movPersonajex()
    this.personaje.movPersonajey()
    this.emocionNegativaArr.forEach((eachEmocionnegativa) => {
    eachEmocionnegativa.movEmocionnegativa()
    })
    this.emocionNegativaArr.forEach((eachEmocionnegativa) => {
    eachEmocionnegativa.emoColision()
    })
    this.personColision()
    
   
    
    
    //3.DIBUJAR LOS ELEMENTOS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.personaje.drawPersonaje()
    this.emocionNegativaArr.forEach((eachEmNeg) => {
    eachEmNeg.drawEmocionnegativa()
    })

    requestAnimationFrame(this.gameLoop);
    
  };

}