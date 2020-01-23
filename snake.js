const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// size of each space
const box = 32;

// load the images
const background = new Image();
background.src = "img/background.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// load the sound
const crash = new Audio();
const eat = new Audio();

crash.src = "audio/crash.mp3";
eat.src = "audio/eat.mp3";

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

// add Event Listener on the keyboard
document.addEventListener("keydown", direction);

// control the snake
function direction(event){
    if(event.keyCode == 37 && d != "RIGHT"){
        d = "LEFT";
    }
    else if(event.keyCode == 38 && d != "DOWN"){
        d = "UP";
    }
    else if(event.keyCode == 39 && d != "LEFT"){
        d = "RIGHT";
    }
    else if(event.keyCode == 40 && d != "UP"){
        d = "DOWN";
    }
}

// check if the snake hit its tail
function collision(head, array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
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

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // direction
    if(d == "LEFT"){
        snakeX -= box;
    }
    if(d == "UP"){
        snakeY -= box;
    }
    if(d == "RIGHT"){
        snakeX += box;
    }
    if(d == "DOWN"){
        snakeY += box;
    }

    // increase the snake size if it eat the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        }
    }
    else{
        // remove the tail
        snake.pop();
    }

    // new snake head
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // game over
    if(snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)){
        clearInterval(game);
        crash.play();
    }

    snake.unshift(newHead);

    // add styles to the point
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);
}



// call the funcation every 100ms
let game = setInterval(draw, 100);