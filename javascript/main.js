// VARIABLES GLOBALES

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.querySelector("#start-btn");
const initialScreen = document.querySelector("#splash-screen");
let game;

// FUNCIONES

const startGame = () => {
    initialScreen.style.display = "none";
    canvas.style.display = "block";

    game = new Game();
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
startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", keyPress);