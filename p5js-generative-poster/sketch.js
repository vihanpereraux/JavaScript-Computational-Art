let bg;

function setup() {
  const canvas = createCanvas(1080, 1094);
  canvas.parent("test");
  frameRate(2)
}

function draw() {
  // translate(width/2, height/2);

  noFill();
  stroke(255)
  strokeWeight(1)
  circle(0, 0, random(0, 500))

  stroke(random(255));  
  strokeWeight(1);
  line(0, 0, 500, random(500));
  line(0, 0, -500, random(-500));
}

function mousePressed() {
  noLoop();
}


