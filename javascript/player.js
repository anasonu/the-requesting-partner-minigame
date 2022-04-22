class Player {
    constructor() {
    // Múltiples propiedades del player
        this.x = 160;
        this.y = 200;
        this.w = 20;
        this.h = 20;
        this.speed = 20;
    }

    // Dibujar el player
    drawPlayer = () => {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    movePlayerUp = () => {
        this.y -= this.speed;
    }

    movePlayerDown = () => {
        this.y += this.speed;
    }
}
