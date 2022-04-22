class Game {
    constructor() {
        // Todas las propiedades del juego
        this.bg = new Image();
        // this.bg.src = "";
        this.player = new Player();
    }

    gameLoop = () => {
        // console.log("juego andando");
        // 1. Borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //. 2. Acciones o movimiento de los elementos


        // 3. Chequear colisiones


        // 4. Dibujar los elementos
        this.player.drawPlayer();

        // 5. Control y recursividad
        requestAnimationFrame(this.gameLoop);
    }
}