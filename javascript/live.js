class Live {
    constructor (positionX) {
        this.x = positionX;
        this.y = 40; 
        this.w = 40;
        this.h = 40;
        this.img = new Image();
        this.img.src = "./images/girl-running-away.png";
    }

    drawLive = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}