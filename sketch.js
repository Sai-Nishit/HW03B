let lvLogo;
let flower;

function preload() {
  lvLogo = loadImage('LV.jpg'); 
  flower = loadImage('star.jpg'); }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(102, 51, 0); 

  let gridSize = 100; 

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      fill(102, 51, 0);
      noStroke();
      rect(x, y, gridSize, gridSize); 
      if ((x + y) % 200 === 0) {
        image(lvLogo, x, y, gridSize, gridSize); 
      } else {
        image(flower, x, y, gridSize, gridSize); 
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(102, 51, 0); 
  redraw(); 
}
