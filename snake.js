const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// size of each space
const box = 32;

// load the images
const background = new Image();
background.src = "img/background.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// create the snake
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box,
}

// create the food
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

let score = 0;
let d;

// control the snake
document.addEventListener("keydown", direction);

function direction(event){
    if(event.keycode == 37){
        d = "LEFT";
    }
    else if(event.keycode == 38){
        d = "UP";
    }
    else if(event.keycode == 39){
        d = "RIGHT";
    }
    else if(event.keycode == 40){
        d = "DOWN";
    }
}

// draw them to the canvas
function draw(){
    ctx.drawImage(background, 0, 0);

    for(let i = 0; i < snake.length; i++){
        // the head of the snake
        ctx.fillStyle = (i == 0) ? "yellow" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        // border line
        ctx.strokeStyle = "blue";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    ctx.drawImage(foodImg, food.x, food.y);
}

ctx.fillStyle = "white";
ctx.font = "45px Changa one";
ctx.fillText(score, 2 * box, 1.6 * box);

// call the funcation every 100ms
let game = setInterval(draw, 100);