// 21x19
// 672x608
// 17x17
// 544x544

var cvs = document.getElementById("myCanvas");
var ctx = cvs.getContext("2d");
ctx.font = "40px Arial";
ctx.fillStyle = "white";

var background = new Image();
background.src = "pics/bg.png";

var apple = new Image();
apple.src = "pics/apple.png";

var orm = new Image();
orm.src = "pics/snake.png";

var time = 100;
var ruta = 32;
var points = 0;
var dir = "RIGHT";
var snake = [];
snake[0] = {
  x : 9*ruta,
  y : 11*ruta
};
var food = {
  x : ruta + Math.floor(Math.random() * 17)*ruta,
  y : 3*ruta + Math.floor(Math.random() * 17)*ruta
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
    case "A":
    case "a":
      if(dir != "RIGHT"){dir = "LEFT";}
      break;
    case "ArrowRight":
    case "D":
    case "d":
      if(dir != "LEFT"){dir = "RIGHT";}
        break;
    case "ArrowUp":
    case "W":
    case "w":
      if(dir != "DOWN"){dir = "UP";}
        break;
    case "ArrowDown":
    case "S":
    case "s":
        if(dir != "UP"){dir = "DOWN";}
        break;
    case "R":
    case "r":
    case "Enter":
        location.reload();
}});

function draw(){
  ctx.drawImage(background,0,0);
  ctx.fillText(points, 2.2*ruta, 1.6*ruta);
  ctx.drawImage(apple, 1*ruta, 0.6*ruta);
  ctx.drawImage(apple,food.x,food.y);

  ctx.drawImage(orm,snake[0].x,snake[0].y);
  switch(dir) {
    case "LEFT":
      snake[0].x -= ruta;
      break;
    case "UP":
      snake[0].y -= ruta;
      break;
    case "RIGHT":
      snake[0].x += ruta;
      break;
    case "DOWN":
      snake[0].y += ruta;
      break;
  };

  if(snake[0].x == food.x && snake[0].y == food.y){
    food.x = ruta + Math.floor(Math.random() * 17)*ruta;
    food.y = 3*ruta + Math.floor(Math.random() * 17)*ruta;
    points++;
  }

  if(snake[0].x==0||snake[0].x==18*ruta||snake[0].y==2*ruta||snake[0].y==20*ruta){
    clearInterval(intervalID);
  }

}


var intervalID = setInterval(draw,time);
