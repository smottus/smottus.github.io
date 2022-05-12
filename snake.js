// 21x19
// 672x608
// 17x17
// 544x544

var cvs = document.getElementById("myCanvas");
var ctx = cvs.getContext("2d");
ctx.font = "50px Arial";
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
var snake = [];
snake[0] = {
  x : 9*ruta,
  y : 11*ruta
};
var dir = "RIGHT";
var appleX = ruta + Math.floor(Math.random() * 17)*ruta;
var appleY = 3*ruta + Math.floor(Math.random() * 17)*ruta;

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
        case "A":
        case "a":
            dir = "LEFT";
            break;
        case "ArrowRight":
        case "D":
        case "d":
            dir = "RIGHT";
            break;
        case "ArrowUp":
        case "W":
        case "w":
            dir = "UP";
            break;
        case "ArrowDown":
        case "S":
        case "s":
            dir = "DOWN";
            break;
        case "R":
        case "r":
        case "Enter":
            location.reload();
}});

function draw(){
  ctx.drawImage(background,0,0);
  ctx.fillText(points, 2*ruta, 2*ruta);
  ctx.drawImage(apple,appleX,appleY);

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

  if(snake[0].x == appleX && snake[0].y == appleY){
    appleX = ruta + Math.floor(Math.random() * 17)*ruta;
    appleY = 3*ruta + Math.floor(Math.random() * 17)*ruta;
    points++;
  }

  if(snake[0].x==0||snake[0].x==18*ruta||snake[0].y==2*ruta||snake[0].y==20*ruta){
    clearInterval(intervalID);
  }

}


var intervalID = setInterval(draw,time);
