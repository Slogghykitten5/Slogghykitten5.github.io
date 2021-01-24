// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;


window.onresize = function(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  return width,height;
}
// function to generate random number

function random(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  (num===0)?(Math.random()>0.3)?num++:num--:null;
  return num;
}

function Ball(x,y,velX,velY,color,size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.og_velX = velX;
  this.og_velY = velY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function(){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = this.og_velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = this.og_velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = this.og_velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = this.og_velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color =`rgb(${random(0, 233)},${random(0, 233)},${random(0, 233)})`;
        balls[j].velX =  balls[j].og_velX = random(-3,3);
        balls[j].velY =  balls[j].og_velY = random(-3,3);
        this.color = `rgb(${random(0, 233)},${random(0, 233)},${random(0, 233)})`;
        this.velX = this.og_velX = random(-3,3);
        this.velY = this.og_velY = random(-3,3);
      }
    }
  }
}

let balls = [];

while (balls.length < 23) {
  let size = random(10,13);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-3,3),
    random(-3,3),
    `rgb(${random(0, 233)},${random(0, 233)},${random(0, 233)})`,
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.23)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop()

function reverse() {
  for(i=0;i<balls.length;i++){
    balls[i].velX = -(balls[i].velX);
    balls[i].velY = -(balls[i].velY);
  }
}

function randomize() {
  for(i=0;i<balls.length;i++){
    balls[i].velX = random(-3,3);
    balls[i].velY = random(-3,3);
  }
}

function stop() {
  for(i=0;i<balls.length;i++){
    balls[i].velX = 0;
    balls[i].velY = 0;
  }
}

function start() {
  for(i=0;i<balls.length;i++){
    balls[i].velX = balls[i].og_velX;
    balls[i].velY = balls[i].og_velY;
  }
}



