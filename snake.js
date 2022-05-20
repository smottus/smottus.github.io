// Canvas dimensions:
// 21x19
// 672x608
// 17x17
// 544x544

const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");
ctx.font = "40px Arial";
ctx.fillStyle = "#efeff1";

const background = new Image();
background.src = "pics/bg2.png";

const apple = new Image();
apple.src = "pics/apple.png";

const goldenApple = new Image();
goldenApple.src = "pics/gapple.png";

const snakeImg = new Image();
snakeImg.src = "pics/snake.png";

const rows = (columns = 17);
const time = 1000;
const square = 32;
let dir = "right";
let points = 0;
let snake = [];
let speed = 10; // Implement an increase when you get more points.


snake[0] = {
  x: 19 * square,
  y: 11 * square
};

var food = {
  x : 11 * square + Math.floor(Math.random() * rows) * square,
  y : 3 * square + Math.floor(Math.random() * columns) * square
};

var gapple = {
  x : 11 * square + Math.floor(Math.random() * rows) * square,
  y : 3 * square + Math.floor(Math.random() * columns) * square
}

let gOnOff = 0;


window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
    case "A":
    case "a":
      if (dir !== "right") {
        dir = "left";
      }
      break;
    case "ArrowRight":
    case "D":
    case "d":
      if (dir !== "left") {
        dir = "right";
      }
      break;
    case "ArrowUp":
    case "W":
    case "w":
      if (dir !== "down") {
        dir = "up";
      }
      break;
    case "ArrowDown":
    case "S":
    case "s":
      if (dir !== "up") {
        dir = "down";
      }
      break;
    case "R":
    case "r":
    case "Enter":
      location.reload();
  }
});

function ouroboros() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function makeGapple() {
  let g = Math.floor(Math.random() * 1000);
  if(g > 990){
      gOnOff = 1;
      gapple.x = 11 * square + Math.floor(Math.random() * rows) * square;
      gapple.y = 3 * square + Math.floor(Math.random() * columns) * square;
      setTimeout(switchgOnOff, 5000);
  }
}

function switchgOnOff() {
  if (gOnOff === 1) {
    gOnOff = 0;
  }
}

function draw() {
  ctx.drawImage(background, 0, 0);
  ctx.fillText(points.toString(), 12.1 * square, 1.6 * square);
  ctx.drawImage(apple, 11*square, 0.6 * square);
  ctx.drawImage(apple, food.x,food.y);
  if(gOnOff === 1) {ctx.drawImage(goldenApple, gapple.x, gapple.y);}
  else {makeGapple();}
  speed = 1000;

  for (let i = 0; i < snake.length; i++) {
    ctx.drawImage(snakeImg, snake[i].x, snake[i].y);
  }

  switch (dir) {
    case "left":
      snake[0].x -= square;
      break;
    case "up":
      snake[0].y -= square;
      break;
    case "right":
      snake[0].x += square;
      break;
    case "down":
      snake[0].y += square;
      break;
  }

  if(snake[0].x === food.x && snake[0].y === food.y){
    food.x = 11*square + Math.floor(Math.random() * rows) * square;
    food.y = 3 * square + Math.floor(Math.random() * columns) * square;
    points++;
  } else if(snake[0].x === gapple.x && snake[0].y === gapple.y && gOnOff === 1){
    gOnOff = 0;
    points += 5}
  else if (snake.length > 1) {
    snake.pop();
  }



  let nextHead = {
    x: snake[0].x,
    y: snake[0].y,
  };

  if (
    snake[0].x === 10 * square ||
    snake[0].x === 28 * square ||
    snake[0].y === 2 * square ||
    snake[0].y === 20 * square ||
    ouroboros()
  ) {
    clearInterval(intervalID);
  }
  snake.unshift(nextHead);
}


let intervalID = setInterval(draw, time / speed);
