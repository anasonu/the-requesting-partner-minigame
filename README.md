# THE REQUESTING PARTNER

## Deploy
[Link Deploy](https://anasonu.github.io/the-requesting-partner-minigame/)

## Description

The requesting partner is a game where you (the player) will have to run from your partner, who will want to catch you to get some help in everyday matters. 

Avoid every obstacle and ignore your partner calls as long as you can!

## Main Functionalities

- The player will have to avoid obstacles by pressing up and down buttons.
- Obstacles will be appearing from the right side of the screen and will move to the left until they leave the canvas.
- The partner will throw objects that can hit the player.
- If the player hits an obstacle, the distance to the partner will reduce.
- When the partner gets the player, the player loses the game.
- Every obstacle avoided, adds one point to the counter.
- Every 5 points added to the counter, will increase speed.

## Backlog Functionalities

- Add music
- Ability to choose a male or female character
- Add name so the partner can call the player by name


## Proyect Structure

- List here the JS files you think you might need. 
- One main.js to manage DOM elements, one for Game class and one for each other class.
- Recommended: Inside each file you can list the functions, clases, properties and methods you will need.

# main.js

- startGame()
- KeyPress()
- addEventListeners()

# game.js

- Game () {
    this.player;
}
- checkCollisions () {}
- addNewObstacles () {}
- gameLoop () {}

# player.js 

- Player () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawPlayer () {}
- movePlayer () {}

# partner.js 

- Partner() {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- movePartner(){}

# obstacles.js

- Obstacles() {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawObstacle(){}
- moveObstacle(){}

## States y States Transitions

- Initial screen
- Game screen
- Game Over screen

## Task

- Add player
- Ability to move player up and down
- Add partner
- Make partner move automatically following the player
- Add obstacles
- Make obstacles appear randomly
- Add collisions
- Add shoots from the partner
- Make images from shoots appear randomly
- Add 3 lives on top of the screen
- Add lives functionality
- Draw background, player, partner and obstacles
- Add points counter
- Increase velocity when receiving X points
- Create initial screen
- Create game over screen
- Add music

## Extra Links

### Slides
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)