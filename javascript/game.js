class Game {
    constructor(isGirlPlayer) {
        // Todas las propiedades del juego
        this.bg = new Image();
        this.bg.src = "./images/bg.png";

        let playerImg = "./images/girl-running-away.png";
        let partnerImg = "./images/boy-chasing.png";

        if(isGirlPlayer === false) {
            playerImg = "./images/boy-running-away.png";
            partnerImg = "./images/girl-chasing.png";
        }

        this.player = new Player(playerImg);
        this.partner = new Partner(partnerImg);
        
        this.live = new Live();

        this.liveArr = [
            new Live(canvas.width - 80),
            new Live(canvas.width - 140),
            new Live(canvas.width - 200),
        ];
       
        this.toiletPaperArr = [];   
        this.dogArr = [];
        this.clothelineArr = [];
        this.boxArr = [];
        this.shootArr = [];
        this.heartArr = [];

        this.audio = new Audio();
        this.audio.src = "./audio/game-audio.mp3";
        this.audio.volume = 0.1;
        
        this.isGameOn = true;
        
    }

    // Función para las colisiones

    gameOverCollision = () => {
        if(this.liveArr.length === 0) {
            this.isGameOn = false;
            clearInterval(intervalShootId);
            clearInterval(intervalHeartId);
            canvas.style.display = "none";
            counter.style.display = "none";
            gameOverScreen.style.display = "flex";
            gameOverPoints.innerText = points.innerText;
            gameOverCounter.style.display = "block";
            if(!isGirlPlayer) {
                girlCrying.style.display = "none";
                boyCrying.style.display = "block";
            }
            this.audio.pause();
        }

        this.toiletPaperArr.forEach((eachToiletPaper, index) => {
            if(this.player.x < eachToiletPaper.x + eachToiletPaper.w &&
                this.player.x + this.player.w > eachToiletPaper.x &&
                this.player.y < eachToiletPaper.y + eachToiletPaper.h &&
                this.player.h + this.player.y > eachToiletPaper.y) {
                    this.player.x -= 100;
                    this.toiletPaperArr.splice(index, 1);
                    this.liveArr.pop();
                }
            
            if(this.player.x > eachToiletPaper.x) {
                this.toiletPaperArr.splice(index, 1);
                points.innerText = Number(points.innerText) + 1;
            }
        })

        this.dogArr.forEach((eachDog, index) => {
            if(this.player.x < eachDog.x + eachDog.w &&
                this.player.x + this.player.w > eachDog.x &&
                this.player.y < eachDog.y + eachDog.h &&
                this.player.h + this.player.y > eachDog.y) {
                    this.player.x -= 100;
                    this.dogArr.splice(index, 1);
                    this.liveArr.pop();
                }
            
            if(this.player.x > eachDog.x) {
                this.dogArr.splice(index, 1);
                points.innerText = Number(points.innerText) + 1;
            }
        })

        this.clothelineArr.forEach((eachClotheline, index) => {
            if(this.player.x < eachClotheline.x + eachClotheline.w &&
                this.player.x + this.player.w > eachClotheline.x &&
                this.player.y < eachClotheline.y + eachClotheline.h &&
                this.player.h + this.player.y > eachClotheline.y) {
                    this.player.x -= 100;
                    this.clothelineArr.splice(index, 1);
                    this.liveArr.pop();
                }

            if(this.player.x > eachClotheline.x) {
                this.clothelineArr.splice(index, 1);
                points.innerText = Number(points.innerText) + 1;
            }    
        })

        this.boxArr.forEach((eachBox, index) => {
            if(this.player.x < eachBox.x + eachBox.w &&
                this.player.x + this.player.w > eachBox.x &&
                this.player.y < eachBox.y + eachBox.h &&
                this.player.h + this.player.y > eachBox.y) {
                    this.player.x -= 100;
                    this.boxArr.splice(index, 1);
                    this.liveArr.pop();
                }

            if(this.player.x > eachBox.x) {
                this.boxArr.splice(index, 1);
                points.innerText = Number(points.innerText) + 1;
            }  
        });

        this.shootArr.forEach((eachShoot, index) => {
            if(this.player.x < eachShoot.x + eachShoot.w &&
                this.player.x + this.player.w > eachShoot.x &&
                this.player.y < eachShoot.y + eachShoot.h &&
                this.player.h + this.player.y > eachShoot.y) {
                    this.player.x -= 100;
                    this.shootArr.splice(index, 1);
                    this.liveArr.pop();
                }

            if(eachShoot.x > canvas.width) {
                this.shootArr.splice(index, 1);
                points.innerText = Number(points.innerText) + 1;
            }  
        });

        this.heartArr.forEach((eachHeart, index) => {
            if(this.player.x >= 360){
                this.heartArr.shift();
                return;
            }

            if(this.player.x < eachHeart.x + eachHeart.w &&
                this.player.x + this.player.w > eachHeart.x &&
                this.player.y < eachHeart.y + eachHeart.h &&
                this.player.h + this.player.y > eachHeart.y) {
                    this.player.x += 100;
                    this.heartArr.splice(index, 1);
                    this.liveArr.push(new Live(this.liveArr[this.liveArr.length - 1].x - this.liveArr[this.liveArr.length - 1].w- 20));
                }
        })
    }

    addNewHeart = () => {
        intervalHeartId = setInterval(() => {
            let randomPosition = Math.random() * ((canvas.height - 40) - 300 + 1) + 300;
            let newHeart = new Heart(randomPosition);
            this.heartArr.push(newHeart);
        }, 5000);
    }

    addNewShoot = () => {


        intervalShootId = setInterval(() => {
            if(this.player.x <= 160) {
                return false; // => Cuando el jugador retrocede hasta cierto punto, el personaje de atrás deja de disparar.
            }
            // console.log(this.shootArr.length)
            if(this.shootArr.length === 0 || this.shootArr[this.shootArr.length - 1].x > 1000) {
                let newShoot = new Shoot();
                this.shootArr.push(newShoot);
            }
            }, 3000)
    }

    addNewToiletPaper = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 300 + 1) + 300;

        if(this.toiletPaperArr.length === 0 || this.toiletPaperArr[this.toiletPaperArr.length - 1].x < 370) {
            let newToiletPaper = new ToiletPaper(randomPosition);
            this.toiletPaperArr.push(newToiletPaper);
        }
    }

    addNewDog = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 300 + 1) + 300;

        if(this.dogArr.length === 0 || this.dogArr[this.dogArr.length - 1].x < 350) {
            let newDog = new Dog(randomPosition);
            this.dogArr.push(newDog);
        }
    }

    addNewClotheline = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 300 + 1) + 300;

        if(this.clothelineArr.length === 0 || this.clothelineArr[this.clothelineArr.length -1].x < 400) {
            let newClotheline = new Clotheline(randomPosition);
            this.clothelineArr.push(newClotheline);
        }
    }

    addNewBox = () => {
        let randomPosition = Math.random() * ((canvas.height - 40) - 300 + 1) + 300;

        if(this.boxArr.length === 0 || this.boxArr[this.boxArr.length - 1].x < 430) {
            let newBox = new Box(randomPosition);
            this.boxArr.push(newBox);
        }
    }

    gameLoop = () => {
        // 1. Borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //. 2. Acciones o movimiento de los elementos

        this.audio.play();

        this.partner.movePartner();

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

        this.shootArr.forEach((eachShoot) => {
            eachShoot.moveShoot();
        });

        this.heartArr.forEach((eachHeart) => {
            eachHeart.moveHeart();
        });
        

        // 3. Chequear colisiones
        this.gameOverCollision();

        // 4. Dibujar los elementos
        
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

        this.liveArr.forEach((eachLive) => {
            eachLive.drawLive();
        })

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


        this.heartArr.forEach((eachHeart) => {
            eachHeart.drawHeart();
        })

        this.shootArr.forEach((eachShoot) => {
            eachShoot.drawShoot();
        })

        // 5. Control y recursividad
        if (this.isGameOn) {
            requestAnimationFrame(this.gameLoop);
          }
    }
}