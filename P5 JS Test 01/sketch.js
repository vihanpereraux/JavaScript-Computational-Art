 //Loads everything to the program
let img;
let newCanvas;
function preload(){
  img = loadImage('assets/model.png');
}

function setup() {
  //createCanvas(400, 400);
  newCanvas = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  newCanvas.position(newCanvasX, newCanvasY);

  for(let col = 0 ; col < img.width ; col++){
    for(let row = 0 ; row < img.height ; row++){
      let getColor = img.get(col, row);
      stroke(color(getColor));
      point(col, row);
    }
  }
}

function draw() {
  background(220);
}
