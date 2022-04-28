class Live {
    constructor (positionX) {
        this.x = positionX;
        this.y = 40; 
        this.w = 40;
        this.h = 35;
        this.img = new Image();
        this.img.src = "./images/heart.png";
    }

    drawLive = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}