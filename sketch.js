var btn;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(random(0,255),random(0,255),random(0,255));
  btn = createButton('Descargar')
  btn.position(0, 0);
  btn.mousePressed(impresora)
}

function draw () {
  fill (random(0,255),random(0,255),random(0,255));;
  triangle(mouseX, mouseY, mouseX+200, mouseY+200, mouseX-200, mouseY+200);
}
                  
function impresora() {
saveCanvas("imagen","jpg");
}