class ToiletPaper {
    constructor (positionY) {
        // Múltiples propiedades del player
        this.x = canvas.width;
        this.y = positionY; //Math.random() * ((canvas.height - this.h) - 120 + 1) + 120; // 200;
        this.w = 40;
        this.h = 40;
        this.img = new Image();
        // this.img.src = "./images/.png";
        this.speed = 2;
    }

    drawToiletPaper = () => {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    moveToiletPaper = () => {
        this.x = this.x - this.speed;
    }
}

class Dog {
    constructor (positionY) {
        // Múltiples propiedades del player
        this.x = canvas.width;
        this.y = positionY;
        this.w = 40;
        this.h = 40;
        this.img = new Image();
        // this.img.src = "./images/.png";
        this.speed = 1.5;
    }

    drawDog = () => {
        ctx.fillStyle = "orange";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    moveDog = () => {
        this.x = this.x - this.speed;
    }
}

class Clotheline {
    constructor (positionY) {
        this.x = canvas.width;
        this.y = positionY;
        this.w = 40;
        this.h = 40;
        this.img = new Image();
        // this.img.src = "./images/.png";
        this.speed = 1.5;
    }

    drawClotheline = () => {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    moveClotheline = () => {
        this.x = this.x - this.speed;
    }
}

class Box {
    constructor (positionY) {
        this.x = canvas.width;
        this.y = positionY;
        this.w = 40;
        this.h = 40;
        this.img = new Image();
        // this.img.src = "./images/.png";
        this.speed = 2;
    }

    drawBox = () => {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    moveBox = () => {
        this.x = this.x - this.speed;
    } 
}