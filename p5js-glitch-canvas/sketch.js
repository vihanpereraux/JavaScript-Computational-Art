function setup() {
  //createCanvas(400, 400);
  noLoop();
}


function draw() 
{
  var imagePath = "img/Girls.png";

  var params = 
  {
    amount: random(10, 50),
    iterations: random(4, 7),
    quality: 70,
    seed: random(40, 70),
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

}


function keyPressed() 
{
  if (keyCode === 13) 
  {
    document.getElementById("img-container").innerHTML = " ";
    redraw();
  }
}
