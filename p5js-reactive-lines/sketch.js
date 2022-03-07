function setup() 
{
  createCanvas(windowWidth, 400);
  background(0);

  createElement('bottomtext', '/ 07th MARCH 22');
  createElement('bottomtext-two', '/ MUSIC ANACONDA');
  createElement('br')
  createElement('bottomtext-three', '/ DEVELOPED by VIHAN PERERA');
}

var counter = 0;
function draw() 
{   
  // creates an empty object
  var col = {};
  var r = col;
  var g = col;
  var b = col;

  col.r = random(0, 225);
  col.g = random(0, 225);
  col.b = random(0, 225);

  fill(0, 0, col.b);
  //fill(225, 0, 0);
  
  stroke(0, 0, col.b);
  //stroke(225, 0, 0);
  
  translate(width / 2, height / 2);
  
  rotate( random(20, 50) );
  //rotate( 60 );
  rect(0, 0, 10*random(10,20), 1);
}


