class Partner {
    constructor() {
    // Múltiples propiedades del partner
        this.x = 10;
        this.y = 200;
        this.w = 80;
        this.h = 80;
        this.img = new Image();
        this.img.src = "./images/partner.png";
    }

    // Dibujar el partner
    drawPartner = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}