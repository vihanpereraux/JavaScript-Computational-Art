function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(225, 225, 225);
}

var counter = 0;

function draw()
{

  //creates **a new empty object** for random colors
  const col = {};
  const {r, g, b} = col
  col.r = random(0, 225);
  col.g = random(0, 225);
  col.b = random(0, 225);

  // defualt colours
  var white = (225, 225, 225);
  var black = (0);

  // random moments
  customPositionX = random(0, windowWidth);
  customPositionY = random(0, windowHeight); 

  // face
  // color of the circle
  fill(col.r, col.g, col.b);
  strokeWeight(2)
  stroke(0);

  // x-axis, y-axis, width, height
  //ellipse(windowWidth/2, windowHeight/2, 200, 200);
  ellipse(customPositionX, customPositionY, 200, 200);

  // left eye
  fill(black);
  stroke(black);
  strokeWeight(1);
  ellipse(customPositionX-35, customPositionY-35, 25, 50);

  // right eye
  fill(black);
  stroke(black);
  strokeWeight(1);
  ellipse(customPositionX+35, customPositionY-35, 25, 50);

  // sad mouth
  noFill();
  stroke(black);
  strokeWeight(6)
  // x, y, w, h, start, stop, [mode], [detail] 
  arc(customPositionX, customPositionY+60, 80, 70, PI, TWO_PI);

}