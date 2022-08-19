//scripts.js
//Main script for the page

import {c, ctx} from "./modules/canvas.js";
import { } from "./modules/environment.js";
import { } from "./modules/game.js";
import {Player} from "./modules/player.js";

//animation loop

let gameFrame = 0

const player = new Player

function gameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    player.update()
    player.draw()
    gameFrame ++
    requestAnimationFrame(gameLoop)
}

gameLoop()