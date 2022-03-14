function setup() 
{
  createCanvas(638, 500);

  createElement('bottomtext', '/ 14TH MARCH 2022');
  createElement('bottomtext-two', '/ MUSIC ANACONDA');
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

  fill(0, 0, col.b);
  //fill(255, 240, 31);
  
  stroke(0, 0, col.b);
  //stroke(255, 240, 10);

  translate(width / 2, height / 2);
  rotate(random(20, 50));
  rect(0, random(8,10), 10*random(5,22), 1);

  // create gradient
  var canvas = document.getElementById('box');
  var c = canvas.getContext('2d');

  // gradient background
  // <- right | bottom - top | left -> | top - bottom 
  var grad = c.createLinearGradient(random(250,300),random(10,500),random(20,200),random(10,500));
    
  // adding to colors 
  grad.addColorStop(0, "white");
  grad.addColorStop(1, "LightSkyBlue");
  c.fillStyle = grad;
  c.fillRect(0, 0, 638, 500);


  // if (counter > 600) 
  // { 
  //   // <- right | bottom - top | left -> | top - bottom 
  //   var grad = c.createLinearGradient(500-counter/5,0,0,0);
  //   console.log(counter);
  //   //var grad = c.createLinearGradient(0,0,10+counter/2,0);
    
  //   // adding to colors 
  //   grad.addColorStop(0, "red");
  //   grad.addColorStop(1, "lightblue");
  //   c.fillStyle = grad;
  //   c.fillRect(0, 0, windowWidth, 500);
  //   if ( counter == 1200){ counter = 0 }
  // }
  // else if (counter < 600)
  // {
  //   // <- right | bottom - top | left -> | top - bottom 
  //   //var grad = c.createLinearGradient(0,0,0,100);
  //   var grad = c.createLinearGradient(0,0,80+counter/2,0);
    
  //   // adding to colors 
  //   grad.addColorStop(0, "red");
  //   grad.addColorStop(1, "lightblue");
  //   c.fillStyle = grad;
  //   c.fillRect(0, 0, windowWidth, 500);
  // }
}


