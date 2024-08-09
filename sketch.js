let cor;
let cX;
let cY;

function setup () {
  createCanvas(1000, 800);
  background(color(0, 0));
  cor = color(random(0,255), (0,255), (0,255));
  cX = [0, 0, 0];
  cY = [random(height), random(height), random(height),];
}





function draw() {
  
  fill(cor);
  
  
  
  for (let contador in cX) {
    
    circle(cX[contador], cY[contador], 50);
    cX[contador] += random (0, 3);
    cY[contador] += random (-3, 3);
    
    if (cX[contador] >=width){
      cX[contador] = 0;
      cY[contador] = random(height);    
  }
    
}
  
  if (mouseIsPressed){
      cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
      }



}
  
