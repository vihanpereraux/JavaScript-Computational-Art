let bg;
let canvasWidth = 1080;
let canvasHeight = 1094;

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("test");
  frameRate(2)
  noLoop();
}

function draw() {
  drawModuleOne();
  drawModuleTwo();
  drawModuleThree();
  drawModuleFour();
  drawModuleFive();
  drawModuleSix();
  drawModuleSeven();
}

function drawModuleOne(){
  translate(width/2, height/2);
  noFill();
  strokeWeight(2);
  stroke(255);
  circle(0, 0, canvasWidth);
}

function drawModuleTwo(){
  line(0, 0, -(canvasWidth/2), -(canvasHeight/2));
  line(0, 0, (canvasWidth/2), -(canvasHeight/2));
  line(0, 0, 0, (canvasHeight/2));
}

function drawModuleThree(){
  strokeWeight(3);
  stroke(255);

  var middleXPosition = ((canvasWidth/2))/random(1, 10);
  var middleYPosition = ((canvasHeight/2))/random(2, 12);

  var x1 = random(middleXPosition, -(canvasWidth/2));
  var y1 = random(middleYPosition, -(canvasHeight/2));

  var x2 = random(0, middleXPosition);
  var y2 = random(0, middleYPosition);

  bezier(0, 0, x2, y2, x1, y1, (canvasWidth/2), -(canvasHeight/2));
  bezier(0, 0, -x2, y2, -x1, y1, -(canvasWidth/2), -(canvasHeight/2));
}

function drawModuleFour(){
  strokeWeight(2);
  circle(0, -(canvasHeight/4), (canvasWidth/2));

  // bottom section
  var x1 = ((canvasWidth/4));
  var y1 = -(canvasWidth/2) + (canvasWidth/4);
  var y0 = random((canvasWidth/2)-250, (canvasWidth/2)); 
  line(0, y0, x1, y1); // /
  line(0, y0, -x1, y1); // \

  // top section
  var x2 = ((canvasWidth/4));
  var y2 = -(canvasWidth/2) + (canvasWidth/4);
  var y3 = -(canvasWidth/2);
  line(-x2, y2, 0, y3); // \
  line(x2, y2, 0, y3); // /
}

function drawModuleFive(){
  // stroke(255, 0, 0);
  line(canvasWidth/2, 0, -(canvasWidth/2), 0);
  line(canvasWidth/2, 0, 0, (canvasWidth/2));
  line(-(canvasWidth/2), 0, 0, (canvasWidth/2));
}

function drawModuleSix(){
  var middleYPosition = (canvasWidth/2)/random(1, 25);
  
  var y1 = random((canvasWidth/2), middleYPosition);
  var y2 = random(middleYPosition, 0);
  
  bezier(0, (canvasWidth/2), 200, y1, 200, y2, 0, 0);
  bezier(0, (canvasWidth/2), -200, y1, -200, y2, 0, 0);
}

function drawModuleSeven(){
  translate(-width/2, -height/2); 
  circle(0, 0, 350);

  translate(width, height); 
  circle(0, 0, 350);
}

