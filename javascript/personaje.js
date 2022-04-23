class Personaje {

    constructor() {
        this.x = 200;
        this.y = 200;
        this.w = 80;
        this.h = 160;
        this.img = new Image();
        this.img.src = "./images/personaje.png"
    }
    drawPersonaje = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h );
    }

    gravityPersonaje = () => {
        this.y = this.y + 1
    }
}