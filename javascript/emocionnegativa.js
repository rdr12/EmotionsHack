class Emocionnegativa {

    constructor(srcParam) {
      this.x = 50; 
      this.y = 50; 
      this.w = 50;
      this.h = 80; 
      this.img = new Image();
      this.img.src = srcParam;
      this.speed = 2;
      this.xdirec = 1; // muevo derecha
      this.ydirec = 1; //muevo abajo
    }
  
    drawEmocionnegativa = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
  
    //Funciones de movimiento


    movEmocionnegativa = () => {
        this.x = this.x + (this.speed * this.xdirec)
        this.y = this.y + (this.speed * this.ydirec)
    }

    emoColision = () => {
     
      if (this.x > canvas.width - this.w) {
        
        this.xdirec = -1; 

      } else if (this.y > canvas.height - this.h) {

        this.ydirec = -1;

      } else if (this.x < 0 ) {

        this.xdirec = 1

      }else if (this.y < 0) {

        this.ydirec = 1
      }
    }

     
}