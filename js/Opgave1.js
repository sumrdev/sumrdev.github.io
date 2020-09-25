function draw()
{
    let center = windowWidth/4+windowHeight/4;
    let ellipseSX = windowWidth/2;
    let ellipseSY = windowHeight/2;
   rectMode(CENTER);
    createCanvas(windowWidth, windowHeight);
    background(0);
    stroke(255);
    fill(255);

if(mouseX <= windowWidth/2)
{
   ellipse(ellipseSX,ellipseSY,center,center);
}

else
{
    rect(ellipseSX,ellipseSY,center,center);
}
}