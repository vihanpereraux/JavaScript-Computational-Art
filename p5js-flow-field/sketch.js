var points = [];
var mult = 0.005;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  noiseDetail(5);

  // number of points in each row
  var density = 80;
  // distance between each point
  var space = width / density;

  // space variable is used in the for loop
  for (let i = 0; i < width; i += space) 
  {
    for (let j = 0; j < width; j += space) 
    {
      // creating vectors at each pixel 
      var p = createVector(i + random(-5, 5), j + random(-5, 5));
      points.push(p);      
    }    
  }
}

function draw() 
{
  noStroke();
  fill(94,0,225);

  // iterating through the points
  for (let k = 0; k < points.length; k++) 
  {
    var angle = map(noise(points[k].x*mult, points[k].y*mult), 0, 1, 0, 720);
    
    // adding a vector to each point
    points[k].add(createVector(cos(angle), sin(angle)));

    // create a circle at the x and y cordinate of each point
    ellipse(points[k].x, points[k].y, 1);
  }
}
