class Player {
    constructor() {
    // Múltiples propiedades del player
        this.x = 240;
        this.y = 200;
        this.w = 80;
        this.h = 80;
        this.img = new Image();
        this.img.src = "./images/player.png";
        this.speed = 20;
    }

    // Dibujar el player
    drawPlayer = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        // ctx.fillStyle = "yellow";
        // ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    movePlayerUp = () => {
        if(this.y > 120) {
            this.y -= this.speed;
            this.x +=  2;
        }
    }

    movePlayerDown = () => {
        if(this.y < (canvas.height - this.h)) {
            this.y += this.speed;
            this.x -=  2;
        }
    }
}
