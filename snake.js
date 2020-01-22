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
    x: 9 * box;
    y: 10 * box;
}

// create the food
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

let score = 0;