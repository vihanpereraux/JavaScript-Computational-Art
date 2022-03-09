function setup() {
  //createCanvas(400, 400);
  noLoop();
}


function draw() 
{
  var imagePath = "img/lincoln.jpg";

  var params = 
  {
    amount: random(30, 35),
    iterations: 20,
    quality: 30,
    seed: 25,
  };

  var imgContainerEl = document.getElementById("img-container");

  loadImage(imagePath, function (img) 
  {
    glitch(params)
      .fromImage(img)
      .toDataURL()
      .then(function (dataURL) {
        var imageEl = new Image();
        imageEl.src = dataURL;
        imgContainerEl.appendChild(imageEl);
      });
  });

  function loadImage(src, callback) 
  {
    var imageEl = new Image();

    imageEl.onload = function () 
    {
      callback(imageEl);
    };

    imageEl.src = src;
  }

  fill(0)
  ellipse(50, 50, 100, 100);
}


function keyPressed() 
{
  if (keyCode === 13) 
  {
    document.getElementById("img-container").innerHTML = " ";
    redraw();
  }
}
