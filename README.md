# THE REQUESTING PARTNER

## Deploy (this link will be added later)
[Link Deploy]()

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

- List here the different pages your game will have. For example: Start Screen, Game Screen, Win Screen, Lose Screen, others.

## Task (Optional)

- List of individual Tasks you will need to finish the game from zero to an amazing game!
- Note: If using Trello or github proyect to keep track of tasks, then there is no need to fill this part.

## Extra Links (The links can be added later when available)

### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)

### Slides
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)