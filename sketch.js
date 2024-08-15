let x,y,c,b,s,srect
let dist1, dist2, dist3, clearDist, eraseDist
function setup() {
  createCanvas(500,500)
  y=c='green'
  s=srect='1'
  b='black'
  background(y)
  x = createColorPicker("black");
  x.position(0,0)}

function draw() {
  //toolbar
  fill('white')
  strokeWeight(srect)
  stroke(b)
  rect(0,0,60,500)
  //misc
  print(mouseX,mouseY)
  //strokeweight
  fill(x.color())
  stroke(b)
  strokeWeight(srect)
  ellipse(25,37,15)
  ellipse(25,60,25)
  ellipse(25,98,40)
  //dists
  dist1 = dist(mouseX,mouseY,25,37)
  dist2 = dist(mouseX,mouseY,25,60)
  dist3 = dist(mouseX,mouseY,25,98)
  //logic
  if(dist1<7.5 && mouseIsPressed && mouseButton == LEFT){
    s=1
  }
  if(dist2<12.5 && mouseIsPressed && mouseButton == LEFT){
    s=10
  }
  if(dist3<20 && mouseIsPressed && mouseButton == LEFT){
    s=20
  }
  //separater line
  stroke(b)
  strokeWeight(srect)
  line(0,130,60,130)
  //separater line finish
  //empty canvas
  stroke(b)
  fill('gainsboro')
  strokeWeight(srect)
  ellipse(25,150,25)
  //indicater text
  textAlign(CENTER)
  fill(b)
  textSize(16)
  text("CLEAR",28,180)
  //dists for clear
  clearDist=dist(mouseX,mouseY,25,150)
  //logic
  if(clearDist < 12.5 && mouseIsPressed && mouseButton == LEFT){
    fill(y)
    rect(60,0,500,500)
  }
  //pen creation
  if(mouseIsPressed && mouseButton == LEFT){
    stroke(x.color())
    strokeWeight(s)  
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
  if(mouseIsPressed && mouseButton == RIGHT){
    stroke(y)
    strokeWeight(20)  
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
}
