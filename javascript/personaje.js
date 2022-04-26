class Personaje {

    constructor() {
        this.x = 300;
        this.y = 600;
        this.w = 50;
        this.h = 100;
        this.img = new Image();
        this.img.src = "./images/personaje.png"
        this.speed = 10;
        
    }
    drawPersonaje = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h );
    }

    //Funciones de movimiento

    atrasMov = () => {
        this.x -= this.speed;
    }

    delanteMov = () => {
        this.x += this.speed;
    }

    abajMov = () => {
        this.y -= this.speed;
    }

    arrMov = () => {
        this.y += this.speed;
        
    }

    //Límite de movimiento canvas

    movPersonajex = () => {
        if (this.x < 0) {
           this.x = 1;
       }else if (this.x > canvas.width - this.w) {
           this.x = canvas.width - this.w - 1;
       } 
    }

    movPersonajey = () => {
        if (this.y < 0) {
            this.y = 1;
        }else if (this.y > canvas.height - this.h) {
            this.y = canvas.height - this.h -1;
        }
    }
}
    
