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
  var color = [255];
  var weight = 2;

  drawModuleOne(color, weight);
  drawModuleTwo(color, weight);
  drawModuleThree(color, weight);
  drawModuleFour(color, weight);
  drawModuleFive(color, weight);
  drawModuleSix(color, weight);
  drawModuleSeven(color, weight);
}

function drawModuleOne(color, weight){
  translate(width/2, height/2);
  noFill();
  strokeWeight(weight);
  stroke(color);
  circle(0, 0, canvasWidth);
}

function drawModuleTwo(color, weight){
  stroke(color);
  strokeWeight(weight);
  line(0, 0, -(canvasWidth/2), -(canvasHeight/2));
  line(0, 0, (canvasWidth/2), -(canvasHeight/2));
  line(0, 0, 0, (canvasHeight/2));
}

function drawModuleThree(color, weight){
  strokeWeight(weight);
  stroke(color);

  var middleXPosition = ((canvasWidth/2))/random(1, 10);
  var middleYPosition = ((canvasHeight/2))/random(2, 12);

  var x1 = random(middleXPosition, -(canvasWidth/2));
  var y1 = random(middleYPosition, -(canvasHeight/2));

  var x2 = random(0, middleXPosition);
  var y2 = random(0, middleYPosition);

  bezier(0, 0, x2, y2, x1, y1, (canvasWidth/2), -(canvasHeight/2));
  bezier(0, 0, -x2, y2, -x1, y1, -(canvasWidth/2), -(canvasHeight/2));
}

function drawModuleFour(color, weight){
  strokeWeight(weight);
  stroke(color);
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

function drawModuleFive(color, weight){
  // stroke(255, 0, 0);
  stroke(color);
  strokeWeight(weight);
  line(canvasWidth/2, 0, -(canvasWidth/2), 0);
  line(canvasWidth/2, 0, 0, (canvasWidth/2));
  line(-(canvasWidth/2), 0, 0, (canvasWidth/2));
}

function drawModuleSix(color, weight){
  stroke(color);
  strokeWeight(weight);
  var middleYPosition = (canvasWidth/2)/random(1, 25);
  
  var y1 = random((canvasWidth/2), middleYPosition);
  var y2 = random(middleYPosition, 0);
  
  bezier(0, (canvasWidth/2), 200, y1, 200, y2, 0, 0);
  bezier(0, (canvasWidth/2), -200, y1, -200, y2, 0, 0);
}

function drawModuleSeven(color, weight){
  stroke(color);
  strokeWeight(weight);

  translate(-width/2, -height/2); 
  circle(0, 0, 350);

  translate(width, height); 
  circle(0, 0, 350);
}

