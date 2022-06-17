let mario;
let marioUV;

function preload() {
  mario = loadModel('eye-2.obj', true);
  marioUV = loadImage('eyeball-3.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  stroke(0);
  strokeWeight(0);
  background(100);
  orbitControl(5)
  // rotateZ(PI)
  // model(mario);
  rotateY(PI);
  sphere(70);
  texture(marioUV);
}
