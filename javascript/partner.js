class Partner {
    constructor(partnerImage) {
    // Múltiples propiedades del partner
        this.x = 60;
        this.y = 400;
        this.w = 80;
        this.h = 80;
        this.img = new Image();
        this.img.src = partnerImage; // "./images/boy-chasing.png";
        this.speed = 1;
    }

    // Dibujar el partner
    drawPartner = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    movePartner = () => {
        if(this.y < game.player.y) {
            this.y += this.speed;
            // this.x -= 1;
        } else {
            this.y -= this.speed;
            // this.x += 1;
        }
    }

}