class Player {
    constructor() {
    // Múltiples propiedades del player
        this.x = 360;
        this.y = 400;
        this.w = 100;
        this.h = 100;
        this.img = new Image();
        this.img.src = "./images/player.png";
        this.speed = 20;
    }

    // Dibujar el player
    drawPlayer = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    movePlayerUp = () => {
        if(this.y > 260) {
            this.y -= this.speed;
        }
    }

    movePlayerDown = () => {
        if(this.y < (canvas.height - this.h)) {
            this.y += this.speed;
        }
    }
}
