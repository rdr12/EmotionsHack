//MODIFICAR
# EmotionsHack


//MODIFICAR
## Descripción

EmotionsHack es un juego en el que el jugador tiene que  tiene que evitar las emociones negativas y recoger emociones positivas que aparecerán desde la parte superior. El juego termina cuando el personaje principal colisiona con una emoción negativa.


//MODIFICAR
## MVP (DOM - CANVAS)

- El juego tiene un personaje que se mueve en distintas posiciones de la pantalla.
- Hay dos tipos de emociones: positivas y negativas

 
//MODIFICAR
## Trabajo pendiente
- Añadir marcador
- Añadir música
- Añadir efectos de sonidos en distintas funciones.
- Hacer que las emociones positivas sumen puntos.
- Hacer que las emociones negativas resten puntos.
- Hacer que el juego incremente su dificultad a medida que suben los puntos.


//MODIFICAR
## Estructura de datos


//MODIFICAR
# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}
//MODIFICAR

//MODIFICAR
# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addTentacle () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}



//MODIFICAR
# emocion-negativa.js 

- Ship () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- shoot () {}
- checkScreenCollision () {}


//MODIFICAR
# emocionpositiva.js 

- Tentacle () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionBotton () {}


//MODIFICAR
# personaje.js 

- Cannonball () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionTop () {}



//MODIFICAR
## Estados y funciones de transición
//MODIFICAR
Definición de los diferentes estados y su transición (funciones de transición).
- Dibujar
- Moverse
- Comprobar colisión


//MODIFICAR
## Tareas
//MODIFICAR
- principal - buildDom
- principal - buildSplashScreen
- principal - addEventListener
- principal - buildGameScreen
- principal - buildGameOverScreen
- Juego - startLoop
- Juego - buildCanvas
- Juego - updateCanvas
- Juego - drawCanvas
- Juego - addTentacle
- ship - draw
- ship - move
- ship - shoot
- game - addShip
- cannonball - draw
- cannonball - move
- game - checkCollision
- game - GameOver
- game - addEventListener


//MODIFICAR
## Links


//MODIFICAR
### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)


//MODIFICAR
### Git
URls for the project repo and deploy
[Link Repo](https://github.com/jorgeberrizbeitia/kraken-brigade)
[Link Deploy](https://jorgeberrizbeitia.github.io/kraken-brigade/)


//MODIFICAR
### Diapositivas
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)