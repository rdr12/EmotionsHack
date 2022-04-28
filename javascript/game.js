class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";
    this.personaje = new Personaje();
    this.emocionNegativaArr = [
      new Emocionnegativa("./images/imgenfadada1.png"),
    ];
    this.emocionPositivaArr = [new EmocionPositiva("./images/imgfeliz1.png")];
    this.emocionPositivaArr1 = [new EmocionPositiva("./images/imgf2.png")];
    this.isGameOn = true;
    this.score = 0;
  }

  //PUNTUACION

  //***CREACION DE ARRAYS***/

  //ARR EMOCION NEGATIVA
  addNewEmocionnegativa = () => {
    if (this.emocionNegativaArr.length === 0) {
      let newEmNeg = new Emocionnegativa("./images/imgenfadada1.png");
      this.emocionNegativaArr.push(newEmNeg);
    }
  };

  //ARR EMOCION POSITIVA
  addNewEmocionPositiva = () => {
    if (this.emocionPositivaArr.length === 0) {
      let newEmPos = new EmocionPositiva("./images/imgfeliz1.png");
      this.emocionPositivaArr.push(newEmPos);
    }
  };

  addNewEmocionPositiva1 = () => {
    if (this.emocionPositivaArr1.length === 0) {
      let newEmPos1 = new EmocionPositiva("./images/imgf2.png");
      this.emocionPositivaArr1.push(newEmPos1);
    }
  };

  //***COLISIONES CON EL PERSONAJE***//
  //COLISION EMOCION NEGATIVA CON EL PERSONAJE

  personColisionNeg = () => {
    this.emocionNegativaArr.forEach((eachEmocionnegativa, i) => {
      if (
        this.personaje.x < eachEmocionnegativa.x + eachEmocionnegativa.w &&
        this.personaje.x + this.personaje.w > eachEmocionnegativa.x &&
        this.personaje.y < eachEmocionnegativa.y + eachEmocionnegativa.h &&
        this.personaje.h + this.personaje.y > eachEmocionnegativa.y
      ) {

        this.score = this.score - 30;

        this.emocionNegativaArr.splice(i, 1);
        this.addNewEmocionnegativa();
        //scoreCero.innerText = this.score; 
             
               
      }else if(this.score < 0){
        this.isGameOn = false;
        canvas.style.display = "none";
        gameOverScreen.style.display = "flex";
        scoreTitle.style.display = "block";
        audio.pause();

        }
    });
  };

  //COLISION EMOCION POSITIVA CON EL PERSONAJE

  personColisionPos = () => {
    this.emocionPositivaArr.forEach((eachEmocionPositiva, i) => {
      if (
        this.personaje.x < eachEmocionPositiva.x + eachEmocionPositiva.w &&
        this.personaje.x + this.personaje.w > eachEmocionPositiva.x &&
        this.personaje.y < eachEmocionPositiva.y + eachEmocionPositiva.h &&
        this.personaje.h + this.personaje.y > eachEmocionPositiva.y
      ) {
        this.emocionPositivaArr.splice(i, 1);
        this.addNewEmocionPositiva();

        this.score = this.score + 25;
        
      }
    });
  };

  colisionArr2 = () => {
    this.emocionPositivaArr1.forEach((eachEmocionPositiva, i) => {
      if (
        this.personaje.x < eachEmocionPositiva.x + eachEmocionPositiva.w &&
        this.personaje.x + this.personaje.w > eachEmocionPositiva.x &&
        this.personaje.y < eachEmocionPositiva.y + eachEmocionPositiva.h &&
        this.personaje.h + this.personaje.y > eachEmocionPositiva.y
      ) {
        this.emocionPositivaArr1.splice(i, 1);
        this.addNewEmocionPositiva1();

        this.score = this.score + 25;
       
      }
    });
  };

  //***GAMELOOP***//

  gameLoop = () => {
    //1.BORRAR CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2.ACCIONES O MOVIMIENTO DE LOS ELEMENTOS

    //***MOVIMIENTOS***//
    //MOVIMIENTO DEL PERSONAJE
    this.personaje.atrasMov();
    this.personaje.delanteMov();
    this.personaje.arrMov();
    this.personaje.abajMov();
    this.personaje.movPersonajex();
    this.personaje.movPersonajey();

    //MOVIMIENTO DE LA EMOCION NEGATIVA
    this.emocionNegativaArr.forEach((eachEmocionnegativa) => {
      eachEmocionnegativa.movEmocionnegativa();
    });

    //MOVIMIENTO DE LA EMOCION POSITIVA
    this.emocionPositivaArr.forEach((eachEmocionPositiva) => {
      eachEmocionPositiva.movEmocionPositiva();
    });

    //MOVIMIENTO DE LA EMOCION POSITIVA1
    this.emocionPositivaArr1.forEach((eachEmocionPositiva) => {
      eachEmocionPositiva.movEmocionPositiva();
    });

    //***CHOQUES LIMITES CANVAS***//
    //CHOQUE EMOCION NEGATIVA BORDES CANVAS
    this.emocionNegativaArr.forEach((eachEmocionnegativa) => {
      eachEmocionnegativa.emoColisionNeg();
    });

    //CHOQUE EMOCION POSITIVA BORDES CANVAS
    this.emocionPositivaArr.forEach((eachEmocionPositiva) => {
      eachEmocionPositiva.emoColisionPos();
    });

    //CHOQUE EMOCION POSITIVA1 BORDES CANVAS
    this.emocionPositivaArr1.forEach((eachEmocionPositiva) => {
      eachEmocionPositiva.emoColisionPos();
    });

    //***CHOQUES CON EL PERSONAJE***//
    //CHOQUE EMOCION NEGATIVA CON EL PERSONAJE
    this.emocionNegativaArr.forEach((eachChoqueEmNeg) => {
      this.personColisionNeg(eachChoqueEmNeg);
    });

    //CHOQUE EMOCION POSITIVA CON EL PERSONAJE
    this.emocionPositivaArr.forEach((eachChoqueEmPos) => {
      this.personColisionPos(eachChoqueEmPos);
    });

    //CHOQUE EMOCION POSITIVA1 CON EL PERSONAJE
    this.emocionPositivaArr1.forEach((eachChoqueEmPos) => {
      this.colisionArr2(eachChoqueEmPos);
    });

    scoreCero.innerText = Math.floor (this.score)

    //3.DIBUJAR LOS ELEMENTOS
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    //***DIBUJO DE LAS CLASES***//

    //DIBUJO PERSONAJE
    this.personaje.drawPersonaje();

    //DIBUJO EMOCION NEGATIVA
    this.emocionNegativaArr.forEach((eachEmNeg) => {
      eachEmNeg.drawEmocionnegativa();
    });

    //DIBUJO EMOCION POSITIVA
    this.emocionPositivaArr.forEach((eachnewEmPos) => {
      eachnewEmPos.drawEmocionPositiva();
    });

    //DIBUJO EMOCION POSITIVA1
    this.emocionPositivaArr1.forEach((eachnewEmPos) => {
      eachnewEmPos.drawEmocionPositiva();
    });

    // CONTROL Y RECURSION

    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
