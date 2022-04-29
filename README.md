
# EmotionsHack

## Descripción

EmotionsHack es un juego en el que el jugador tiene que  tiene que esquivar las emociones negativas y recoger emociones positivas que aparecerán de forma aleatoria. El juego termina cuando el jugador se queda sin puntos.


## MVP (DOM - CANVAS)

- El juego tiene un personaje que se mueve en distintas posiciones de la pantalla.
- Hay dos tipos de emociones: positivas y negativas.

 

## Trabajo pendiente
- Hacer que el juego incremente su dificultad a medida que suben los puntos.



## Estructura de datos

# main.js

- Global Variables.
- State Management Functions:
- startGame () {}
- keyCode  () {}
- Add Event Listeners.



# game.js

- Game () {}
- addNewEmocionnegativa  () {}
- ddNewEmocionPositiva () {}
- addNewEmocionPositiva1 () {}
- ersonColisionNeg () {}
- personColisionPos () {}
- colisionArr2 () {}
- gameLoop () {}


# emocion-negativa.js 

- Emocionnegativa () {
    this.x;
    this.y;
    this.w;
    this.h
    this.img
    this.img.src
    this.speed
    this.xdirec
    this.ydirec
}
- drawEmocionnegativa() {}
- movEmocionnegativa () {}
- emoColisionNeg () {}


# emocionpositiva.js 

- EmocionPositiva () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.img;
    this.img.src;
    this.speed;
    this.xdirec;
    this.ydirec;
}
- drawEmocionPositiva () {}
- movEmocionPositiva () {}
- emoColisionPos () {}


# personaje.js 

- Personaje () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.img;
    this.img.src;
    this.speed;
}
- drawPersonaje () {}
- atrasMov () {}
- delanteMov () {}
- abajMov
- arrMov
-  movPersonajex
-  movPersonajey



## Main
Definición de los diferentes estados y su transición (funciones de transición).
- Dibujar
- Moverse
- Comprobar colisión



## Links

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/rdr12/EmotionsHack.git)
[Link Deploy](https://rdr12.github.io/EmotionsHack/)



### Diapositivas
URls for the project presentation (slides)
[Link Slides.com]https://docs.google.com/presentation/d/1drLT5ugGRLnnQEjTMupDOOMOrsr2WV44ZaJZ-Geqsgc/edit?usp=sharing