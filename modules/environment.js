//Environment.js

import {c, ctx} from "./canvas.js";

//Player.js
class Player {
    constructor(){
        this.x = 230
        this.y = 378
        this.width = 500
        this.height = 32
        this.dx = 0
        this.dy = 0
    }
    update(){

    }
    draw(){
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
export {Player};
