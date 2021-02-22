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

function add_balls(x) {
  while (balls.length < x) {
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
}

add_balls(20);

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
  console.log('Reversed')
}

function randomize() {
  for(i=0;i<balls.length;i++){
    balls[i].velX = random(-3,3);
    balls[i].velY = random(-3,3);
  }
  console.log('Randomized')
}

function stop() {
  for(i=0;i<balls.length;i++){
    balls[i].velX = 0;
    balls[i].velY = 0;
  }
  console.log('Stopped')
}

function start() {
  for(i=0;i<balls.length;i++){
    balls[i].velX = balls[i].og_velX;
    balls[i].velY = balls[i].og_velY;
  }
  console.log('Started')
}

const start_button = document.querySelector('.start_div');
const stop_button = document.querySelector('.stop_div');
const randomize_button = document.querySelector('.randomize_div');
const reverse_button = document.querySelector('.reverse_div');

start_button.onclick = start;
stop_button.onclick = stop;
randomize_button.onclick = randomize;
reverse_button.onclick = reverse;

const ball_add_input = document.querySelector('.myNum_add');
const add_ball_div = document.querySelector('.add_b_div');

add_ball_div.onclick = function() {
  swal({
    title: `Add ${ball_add_input.value} balls?`,
    text: `Are you sure you want to add ${ball_add_input.value} balls? This may slow down your browser.`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((add) => {
    if (add) {
      add_balls(ball_add_input.value);
      ball_add_input.value = 0;
    }
  });
}

function remove_balls(num) {
  if(balls.length>=num){balls.length -= num;}else{balls.length=0}
  if(balls.length<0){balls.length=0}
}

const ball_remove_input = document.querySelector('.myNum_remove');
const remove_ball_div = document.querySelector('.remove_b_div');

remove_ball_div.onclick = function() {
  swal({
    title: `Remove ${ball_remove_input.value} balls?`,
    text: `Are you sure you want to remove ${ball_remove_input.value} balls?`,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((remove) => {
    if (remove) {
      remove_balls(ball_remove_input.value);
      ball_remove_input.value = 0;
    }
  });
}

const contol_controls = document.querySelector('.control_controls');
const controls = document.querySelector('.controls');
const control_p = document.querySelector('.control_p');

contol_controls.onclick = function(){
  if(control_p.textContent === 'Show'){
    controls.classList.remove('scale_out');
    controls.classList.add('scale_in');
    console.log('Scaled_in')
    control_p.textContent = 'Hide'
  }else{
    controls.classList.remove('scale_in');
    controls.classList.add('scale_out');
    console.log('Scaled_out')
    control_p.textContent = 'Show'
  }
}
