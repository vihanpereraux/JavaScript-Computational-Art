var canvas = document.getElementById('box');
var c = canvas.getContext('2d');

// Create Gradient
var grad = c.createLinearGradient(0,0,100,0);
grad.addColorStop(0, "red");
grad.addColorStop(0, "blue");
c.fillStyle = grad;
c.fillRect(0, 0, 500, 500);



