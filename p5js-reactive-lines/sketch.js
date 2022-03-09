function setup() 
{
  createCanvas(windowWidth, 500);

  createElement('bottomtext', '/ 07th MARCH 22');
  createElement('bottomtext-two', '/ MUSIC ANACONDA');
  createElement('br')
  createElement('bottomtext-three', '/ DEVELOPED by VIHAN PERERA');
}

var counter = 0;
var counterm = 0;

function draw() 
{   
  counter = counter + 1 ;

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
  rect(0, 0, 10*random(10,20), 1);

  // create gradient
  var canvas = document.getElementById('box');
  var c = canvas.getContext('2d');

  // gradient loop
  if (counter > 600) 
  { 
    // <- right | bottom - top | left -> | top - bottom 
    var grad = c.createLinearGradient(500-counter/5,0,0,0);
    console.log(counter);
    //var grad = c.createLinearGradient(0,0,10+counter/2,0);
    
    // adding to colors 
    grad.addColorStop(0, "red");
    grad.addColorStop(1, "lightblue");
    c.fillStyle = grad;
    c.fillRect(0, 0, windowWidth, 500);
    if ( counter == 1200){ counter = 0 }
  }
  else if (counter < 600)
  {
    // <- right | bottom - top | left -> | top - bottom 
    //var grad = c.createLinearGradient(0,0,0,100);
    var grad = c.createLinearGradient(0,0,80+counter/2,0);
    
    // adding to colors 
    grad.addColorStop(0, "red");
    grad.addColorStop(1, "lightblue");
    c.fillStyle = grad;
    c.fillRect(0, 0, windowWidth, 500);
  }
}


