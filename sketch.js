let arraycol = ["red", "blue", "green", "purple", "black"];
let arraynum = ["3", "2", "14", "4", "8"];
let ballnum = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function draw() {
  background("white");
  noStroke();

  for(let i = 0; i < arraycol.length; i++){
    draw8Ball(arraynum[i], arraycol[i], width/arraycol.length * i + 60, 300);
  }
  
 // draw8Ball(arraynum[ballnum], arraycol[ballnum], 300, 300);
  
}
function draw8Ball(num, col, x, y)
{

  fill(col);
  circle(x, y, 100);
  fill("white");
  circle(x, y-10, 50);
  textSize(30);
  fill("black");
  text(num, x, y);
}