class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.personaje = new Personaje();
    this.emocionNegativaArr = [new Emocionnegativa("./images/imgenfadada1.png")];
    this.emocionPositivaArr = [new EmocionPositiva("./images/imgfeliz1.png")];
    this.isGameOn = true;
    this.score = 0;
    
  }

  //***CREACION DE ARRAYS***/
  //ARR EMOCION NEGATIVA
  addNewEmocionnegativa = () => {
    if (this.emocionNegativaArr.length === 0){

      let newEmNeg = new Emocionnegativa("./images/imgenfadada1.png")
      this.emocionNegativaArr.push(newEmNeg)
    }
  }
  //ARR EMOCION POSITIVA
  addNewEmocionPositiva = () => {
    if (this.emocionPositivaArr.length === 0){

      let newEmPos = new EmocionPositiva("./images/imgfeliz1.png")
      this.emocionPositivaArr.push(newEmPos)
    }
  }


  //***COLISIONES CON EL PERSONAJE***//
  //COLISION EMOCION NEGATIVA CON EL PERSONAJE
  personColisionNeg = () => {
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

  //COLISION EMOCION POSITIVA CON EL PERSONAJE
  personColisionPos = () => {
    this.emocionPositivaArr.forEach((eachEmocionPositiva) => {
       
    if (this.personaje.x < eachEmocionPositiva.x + eachEmocionPositiva.w &&
      this.personaje.x + this.personaje.w > eachEmocionPositiva.x &&
      this.personaje.y < eachEmocionPositiva.y + eachEmocionPositiva.h &&
      this.personaje.h + this.personaje.y > eachEmocionPositiva.y) {

        
        this.isGameOn = true;
        canvas.style.display = "none";

      }
    })
  }

  //***GAMELOOP***//
  gameLoop = () => {

    //1.BORRAR CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //2.ACCIONES O MOVIMIENTO DE LOS ELEMENTOS

    //***MOVIMIENTOS***//
    //MOVIMIENTO DEL PERSONAJE
    this.personaje.atrasMov()
    this.personaje.delanteMov()
    this.personaje.arrMov()
    this.personaje.abajMov()
    this.personaje.movPersonajex()
    this.personaje.movPersonajey()
    //MOVIMIENTO DE LA EMOCION NEGATIVA
    this.emocionNegativaArr.forEach((eachEmocionnegativa) => {
    eachEmocionnegativa.movEmocionnegativa()
    })
    //MOVIMIENTO DE LA EMOCION POSITIVA
    this.emocionPositivaArr.forEach((eachEmocionPositiva) => {
      eachEmocionPositiva.movEmocionPositiva()
    })


    //***CHOQUES LIMITES CANVAS***//
    //CHOQUE EMOCION NEGATIVA BORDES CANVAS
    this.emocionNegativaArr.forEach((eachEmocionnegativa) => {
    eachEmocionnegativa.emoColisionNeg()
    })
    //CHOQUE EMOCION POSITIVA BORDES CANVAS
    this.emocionPositivaArr.forEach((eachEmocionPositiva) => {
      eachEmocionPositiva.emoColisionPos()
      })

    //***CHOQUES CON EL PERSONAJE***//
    //CHOQUE EMOCION NEGATIVA CON EL PERSONAJE
    this.emocionNegativaArr.forEach((eachChoqueEmNeg) => {
      this.personColisionNeg(eachChoqueEmNeg) 
    })
    //CHOQUE EMOCION POSITIVA CON EL PERSONAJE

      
    //3.DIBUJAR LOS ELEMENTOS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    //***DIBUJO DE LAS CLASES***//
    //DIBUJO PERSONAJE
    this.personaje.drawPersonaje()
    //DIBUJO EMOCION NEGATIVA
    this.emocionNegativaArr.forEach((eachEmNeg) => {
    eachEmNeg.drawEmocionnegativa()
    })
    //DIBUJO EMOCION POSITIVA
    this.emocionPositivaArr.forEach((eachnewEmPos) =>{
    eachnewEmPos.drawEmocionPositiva()
    })


    requestAnimationFrame(this.gameLoop);
    
  };

}