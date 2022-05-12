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

var ruta = 32;
var points = 0;
var snake = [];
snake[0] = {
  x : 9*ruta,
  y : 11*ruta
};
var dir = "right";

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 37:
      dir = "left";
      break;
    case 38:
      dir = "up";
      break;
    case 39:
      dir = "right";
      break;
    case 40:
      dir = "down";
      break;
  }
});

function draw(){
  ctx.drawImage(background,0,0);
  ctx.fillText(points, 2*ruta, 2*ruta);
  var x = ruta + Math.floor(Math.random() * 17)*ruta;
  var y = 3*ruta + Math.floor(Math.random() * 17)*ruta;
  ctx.drawImage(apple,x,y);

  ctx.drawImage(orm,snake[0].x,snake[0].y);
  switch(dir) {
    case "left":
      snake[0].x -= ruta;
      break;
    case "up":
      snake[0].y -= ruta;
      break;
    case "right":
      snake[0].x += ruta;
      break;
    case "down":
      snake[0].y += ruta;
      break;

};

}


var intervalID = setInterval(draw,100);
