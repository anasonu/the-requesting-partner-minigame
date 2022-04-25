class Game {
    constructor() {
        // Todas las propiedades del juego
        this.bg = new Image();
        this.bg.src = "/images/bg.png";
        this.player = new Player();
        this.partner = new Partner();
       
        this.toiletPaperArr = [];
        
        this.dogArr = [];

        this.clothelineArr = [];

        this.boxArr = [];
    }
    // Función para las colisiones

    gameOverCollision = () => {
        this.toiletPaperArr.forEach((eachToiletPaper, index) => {
            if(this.player.x < eachToiletPaper.x + eachToiletPaper.w &&
                this.player.x + this.player.w > eachToiletPaper.x &&
                this.player.y < eachToiletPaper.y + eachToiletPaper.h &&
                this.player.h + this.player.y > eachToiletPaper.y) {
                    this.player.x -= 80;
                    this.toiletPaperArr.splice(index, 1);
                }
        })
    }

    addNewToiletPaper = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 160 + 1) + 160;

        if(this.toiletPaperArr.length === 0 || this.toiletPaperArr[this.toiletPaperArr.length - 1].x < 200) {
            let newToiletPaper = new ToiletPaper(randomPosition);
            this.toiletPaperArr.push(newToiletPaper);
        }
    }

    addNewDog = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 160 + 1) + 160;

        if(this.dogArr.length === 0 || this.dogArr[this.dogArr.length - 1].x < 150) {
            let newDog = new Dog(randomPosition);
            this.dogArr.push(newDog);
        }
    }

    addNewClotheline = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 160 + 1) + 160;

        if(this.clothelineArr.length === 0 || this.clothelineArr[this.clothelineArr.length -1].x < 100) {
            let newClotheline = new Clotheline(randomPosition);
            this.clothelineArr.push(newClotheline);
        }
    }

    addNewBox = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 160 + 1) + 160;

        if(this.boxArr.length === 0 || this.boxArr[this.boxArr.length - 1].x < 50) {
            let newBox = new Box(randomPosition);
            this.boxArr.push(newBox);
        }
    }

    gameLoop = () => {
        // 1. Borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //. 2. Acciones o movimiento de los elementos
        this.toiletPaperArr.forEach((eachToiletPaper) => {
            eachToiletPaper.moveToiletPaper();
        })

        this.addNewToiletPaper();

        this.dogArr.forEach((eachDog) => {
            eachDog.moveDog();
        })
        this.addNewDog();

        this.clothelineArr.forEach((eachClotheline) => {
            eachClotheline.moveClotheline();
        })
        this.addNewClotheline();

        this.boxArr.forEach((eachBox) => {
            eachBox.moveBox();
        })
        this.addNewBox();
        

        // 3. Chequear colisiones
        this.gameOverCollision();

        // 4. Dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.partner.drawPartner();
        this.player.drawPlayer();
        
        this.toiletPaperArr.forEach((eachToiletPaper) => {
            eachToiletPaper.drawToiletPaper();
        })

        this.dogArr.forEach((eachDog) => {
            eachDog.drawDog();
        })

        this.clothelineArr.forEach((eachClotheline) => {
            eachClotheline.drawClotheline();
        })

        this.boxArr.forEach((eachBox) => {
            eachBox.drawBox();
        })

        // this.couchArr.forEach((eachCouch) => {
        //     eachCouch.drawCouch();
        // })

        // this.toiletPaperArr.forEach((eachToiletPaper) => {
        //     if(this.player.y > eachToiletPaper.y) {
        //         eachToiletPaper.drawToiletPaper();
        //         this.player.drawPlayer();
        //     } else {
        //         this.player.drawPlayer();
        //         eachToiletPaper.drawToiletPaper();
        //     }
        // })

        // 5. Control y recursividad
        requestAnimationFrame(this.gameLoop);
    }
}