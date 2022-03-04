function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(225, 225, 225);
}


function draw()
{
  //creates **a new empty object**
  const col = {};
  const {r, g, b} = col
  col.r = random(0, 225);
  col.g = random(0, 225);
  col.b = random(0, 225);

  fill(col.r, col.g, col.b);
  // x-axis y-axis width height
  ellipse(mouseX, mouseY, 200, 200);

}