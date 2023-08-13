let altura = 5;
let largura = 5;

function setup() {
  createCanvas(600, 400);
  background("blue");
}

function draw() {
  
  stroke(100);
  fill("red");

  // console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, altura, largura);
  }
}
