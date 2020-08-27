function setup()
{
    frameRate(240);
createCanvas(windowWidth,windowHeight);
background(0);
}

function draw(){

stroke(255);
if(mouseIsPressed == true){
line(mouseX,mouseY,pmouseX,pmouseY)
}
}

function keyPressed()

{
if(keyCode = 27)
{
background(0);
}
}