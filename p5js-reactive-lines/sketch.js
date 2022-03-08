function setup() 
{
  createCanvas(windowWidth, 500);

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

  //fill(0, 0, col.b);
  fill(68, 214, 44);
  
  //stroke(0, 0, col.b);
  //stroke(68, 214, 44);
  
  translate(width / 2, height / 2);
  
  rotate( random(20, 50) );
  //rotate( 60 );
  rect(0, 0, 10*random(10,20), 1);

  var canvas = document.getElementById('box');
  var c = canvas.getContext('2d');

  // Create Gradient
  //var grad = c.createLinearGradient(0,0,100,0);
  var grad = c.createLinearGradient(0,0,random(10, 150),random(100, 150));
  grad.addColorStop(0, "white");
  grad.addColorStop(1, "lightblue");
  c.fillStyle = grad;
  c.fillRect(0, 0, 500, 500);
}


