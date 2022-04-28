// VARIABLES GLOBALES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
// const startBtn = document.querySelector("#start-btn");
const startBoy = document.querySelector("#start-boy");
const startGirl = document.querySelector("#start-girl");
const restartBtn = document.querySelector("#restart-btn");
const initialScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const counter = document.querySelector(".counter");
const points = document.querySelector(".counter span");
const gameOverCounter = document.querySelector("#final-counter");
const gameOverPoints = document.querySelector("#final-counter span");
const girlCrying = document.querySelector("#girl-crying");
const boyCrying = document.querySelector("#boy-crying");
let intervalShootId;
let intervalHeartId;
let isGirlPlayer;

let game;

// FUNCIONES

const startGame = (isGirlPlayer) => {
    initialScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    canvas.style.display = "block";
    counter.style.display = "block";
    points.innerText = "0";

    game = new Game(isGirlPlayer);
    game.addNewShoot();
    game.addNewHeart();
    game.gameLoop();
}

const keyPress = (event) => {
    if(event.code === "KeyW" || event.code === "ArrowUp") {
        game.player.movePlayerUp();
    } else if(event.code === "KeyS" || event.code === "ArrowDown") {
        game.player.movePlayerDown();
    }
}





// ADD EVENT LISTENERS
startGirl.addEventListener("click", () => {
    isGirlPlayer = true;
    startGame(isGirlPlayer);
});
startBoy.addEventListener("click", () => {
    isGirlPlayer = false;
    startGame(isGirlPlayer);
});
restartBtn.addEventListener("click", () => {
    startGame(isGirlPlayer);
});
window.addEventListener("keydown", keyPress);
