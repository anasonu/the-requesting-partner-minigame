class ToiletPaper {
    constructor (positionY) {
        // Múltiples propiedades del player
        this.x = canvas.width;
        this.y = positionY; 
        this.w = 40;
        this.h = 40;
        this.img = new Image();
        this.img.src = "./images/toilet-paper.png";
        this.speed = 2;
    }

    drawToiletPaper = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    moveToiletPaper = () => {
        if(Number(points.innerText) >= 10 && Number(points.innerText) <= 30) {
            this.speed = 3;
        } else if(Number(points.innerText) >= 31 && Number(points.innerText) <= 50) {
            this.speed = 4;
        } else if(Number(points.innerText) > 50 && Number(points.innerText) <= 100) {
            this.speed = 5;
        } else if(Number(points.innerText) > 100) {
            this.speed = 6;
        }
        this.x = this.x - this.speed;
    }
}

class Dog {
    constructor (positionY) {
        // Múltiples propiedades del player
        this.x = canvas.width;
        this.y = positionY;
        this.w = 60;
        this.h = 60;
        this.img = new Image();
        this.img.src = "./images/thor.png";
        this.speed = 1.5;
    }

    drawDog = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    moveDog = () => {
        if(Number(points.innerText) >= 10 && Number(points.innerText) <= 30) {
            this.speed = 2.5;
        } else if(Number(points.innerText) >= 31 && Number(points.innerText) <= 50) {
            this.speed = 3.5;
        } else if(Number(points.innerText) > 50 && Number(points.innerText) <= 100) {
            this.speed = 4.5;
        } else if (Number(points.innerText) > 100) {
            this.speed = 5.5;
        }

        this.x = this.x - this.speed;
    }
}

class Clotheline {
    constructor (positionY) {
        this.x = canvas.width;
        this.y = positionY;
        this.w = 40;
        this.h = 50;
        this.img = new Image();
        this.img.src = "./images/sock.png";
        this.speed = 2;
    }

    drawClotheline = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    moveClotheline = () => {
        if(Number(points.innerText) >= 10 && Number(points.innerText) <= 30) {
            this.speed = 3;
        } else if(Number(points.innerText) >= 31 && Number(points.innerText) <= 50) {
            this.speed = 4;
        } else if(Number(points.innerText) > 50 && Number(points.innerText) <= 100) {
            this.speed = 5;
        } else if( Number(points.innerText) > 100) {
            this.speed = 6;
        }
        this.x = this.x - this.speed;
    }
}

class Box {
    constructor (positionY) {
        this.x = canvas.width;
        this.y = positionY;
        this.w = 80;
        this.h = 80;
        this.img = new Image();
        this.img.src = "./images/box.png";
        this.speed = 1.5;
    }

    drawBox = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    moveBox = () => {
        if(Number(points.innerText) >= 10 && Number(points.innerText) <= 30) {
            this.speed = 2.5;
        } else if(Number(points.innerText) >= 31 && Number(points.innerText) <= 50) {
            this.speed = 3.5;
        } else if(Number(points.innerText) > 50 && Number(points.innerText) <= 100) {
            this.speed = 4.5;
        } else if(Number(points.innerText) > 100) {
            this.speed = 5.5;
        }
        this.x = this.x - this.speed;
    } 
}

class Shoot {
    constructor() {
        this.x = game.partner.x;
        this.y = game.partner.y;
        // this.w = 80;
        this.h = 40;

        const images = [
            { src: "./images/help-call.png", width: 120, },
            { src: "./images/toilet-paper-call.png", width: 200, },
            { src: "./images/bored-call.png", width: 120, },
            { src: "./images/keys-call.png", width: 170, },
            { src: "./images/sick-call.png", width: 120, },
        ];

        const random = Math.floor(Math.random() * images.length);
        const shootCall = images[random];
        this.img = new Image();
        this.img.src = shootCall.src;
        this.w = shootCall.width;

        this.speed = 1.5;
    }
    
    drawShoot = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);        
    }

    moveShoot = () => {
        this.x += this.speed;
    }    
}