const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// size of each space
const box = 32;

// load the images
const background = new Image();
background.src = "img/background.png";

const foodImg = new Image();
foodImg.src = "img/food.png";